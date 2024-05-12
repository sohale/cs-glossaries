
# Github Actions

Other DevOps ltmnotes ([c++/tooling.md](https://github.com/sohale/cs-glossaries/blob/56e5ba7b7f92fe03198240340305163e53be064e/c%2B%2B/tooling.md?plain=1#L58), [docker/](https://github.com/sohale/cs-glossaries/tree/master/devops/docker), [cloud](https://github.com/sohale/cs-glossaries/tree/master/devops/cloud))
[^meta]

My experience with GitHub Actions, the "Lessons learned the hard way", things to watch out, key clarifying concepts & terms, grammar/language/models, flows of data, and some patterns that worked.

Hierarchy: `workflow` / `job` / `step`

<!-- ↑ ↓ → ← , ⟶ -->
Data flow:
* step ⟶ step
   * env
      * needs: `needs:`, `id:`, `env:`
      * (`$GITHUB_OUTPUT`, `id:`) ⟶ (generator, `env:`)
   * via `$GITHUB_OUTPUT` (sender side)
   * generator `${{ steps.tfplan.outputs.tfplan_exit_code }}`

* job ⟶ step
   * env
      * needs: `needs:`, `id:`, `env:`
   * via `$GITHUB_OUTPUT`? (sender side)
   * generator `${{ steps.tfplan.outputs.tfplan_exit_code }}`
   * (deprecated) `echo "::set-output name={name}::{value}"`



via <!-- xTimes , not channels -->
   * via env <!-- envtime -->
      * `stdout` text output
   * via generator <!-- generatortime -->
   * <!-- static -->

Channels (modalities):
   * env (multiple)
   * `outputs` + id + generator (optional: if job, will need a `needs:`)
   * `stdout`

Sides:
* Always sender-side:
   * `$GITHUB_OUTPUT`
   * Never env output by any sender, even between steps

* Always receiver side:
   * generator, env,

* "state" versus "output"
   * `$GITHUB_OUTPUT` vs `$GITHUB_STATE`



...


outputs vs output

#### step-job output binding:
(imagine a funnel, or "join")

job output vs step output (and the precedence of job output's "gen-expression"):  example:
```yaml
jobs:
  my_job1:
    outputs:
      output1: ${{ steps.artifact-upload-step.outputs.artifact-id }}
      # note that this^ appears BEFORE
      # BINDs job id to step id

    steps:
      - uses: actions/upload-artifact@v4
        id: artifact-upload-step
         ...
  job2:
    needs: job1
    steps:
      - env:
          OUTPUT1: ${{needs.my_job1.outputs.output1}}
          # note it's inside "my_job1." , not a step.
          # hence, job id, not step id.
        run: echo "$OUTPUT1"
```
i.e. converts
* step's output --> job's output
* step's id ------> job's id
    * BINDs "job" id to "step" id

GITHUB_ENV


How to send exit code: Various approaches:
* step-to-step:
   * Approach 1: <!-- Data Journey -->
      * Data flow: `$?` ⟶ `$GITHUB_OUTPUT` ⟶ `${{ steps.ID.outputs.NAME }}`  ⟶ step's run "command string"
      * ```yaml
        steps:
          - name: STEP1
            id: step1_id
            run: |
    
              # Necessary: don't break the "step" on the error of "command"s:
              set +e
              ... # your command
              echo "my_exit_code=$?" >> $GITHUB_OUTPUT   # save the exit code
    
            # Necessary: to handle non-zero exit codes (of the "step") which indicate changes:
            continue-on-error: true 
    
          - name: Check based on exit code
            env:
                MY_EXITCODE: ${{ steps.step1_id.outputs.my_exit_code }}
                # See link below
    
            if: always()
            run: |
              echo "MY_EXITCODE: $MY_EXITCODE"
              export exit_code_1="${{ steps.tfplan.outputs.tfplan_exit_code }}"
              export exit_code_2=$TFPLAN_EXITCODE
        ```
      * See  https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#environment-files

   * Approach 2:
      * Data flow: `$?` ⟶ `$GITHUB_OUTPUT` ⟶ `${{ steps.ID.outputs.NAME }}`  ⟶ step `env:` ⟶ step's run environment
      * ```yaml
            steps:
              - name: STEP1
                id: step1_id
                run: |
        
                  # Necessary: don't break the "step" on the error of "command"s:
                  set +e
                  ... # your command
                  echo "my_exit_code=$?" >> $GITHUB_OUTPUT   # save the exit code
        
                # Necessary: to handle non-zero exit codes (of the "step") which indicate changes:
                continue-on-error: true 
        
              - name: Check based on exit code
                env:
                    MY_EXITCODE: ${{ steps.step1_id.outputs.my_exit_code }}
                    # See link below
        
                if: always()
                run: |
                  echo "MY_EXITCODE: $MY_EXITCODE"
                  export exit_code_1="${{ steps.tfplan.outputs.tfplan_exit_code }}"
                  export exit_code_2=$TFPLAN_EXITCODE

        ```

      * Approach 3:
          * `echo "::set-output name=exit_code::$?"`


Can generator passed from job to step? (generator-received value)
* `${{ steps.ID.outputs.NAME }}`
Can


Conditionals:
* Conditional based on env (in bash)
   * ```bash
          if [ "$exit_code_" == "$TERRAFORM_DETECTED_CHANGED" ]; then
            echo "Changes are required to the infrastructure (DNS)."
            echo "Please review the proposed plan in the logs above."
            echo "::warning ::Terraform plan indicates changes are needed."

          elif [ "$exit_code_" != "0" ]; then
            echo "::error file=devops/setup-domain-name.tf,line=1::Something else went wrong during 'terraform plan'"
            exit 6  # In this case, we should "fail" the job too, not just annotations

          else
            echo "::notice ::  DNS of hlang.ai seems already in place, everything is fine."
          fi
     ```
* Conditional based on env+gen (in bash) (gen is needed?)
   * ```bash
       # ...
     ```
   * ```yaml
       - name: step-name
         env:
            SOME_ENV: ...
         if: always()
         run: |
            # ...
     ```

* Conditional based on gen, no env (in bash)
   * ```yaml
       - name: step-name
         if: ${{ always() }}  #
         run: |
            if [ ${{ steps.mystep.outcome }} == 2 ]; then
            # outcome?!
            # ...
     ```
* Conditional based on gen, no env (in flow)
   * ```yaml
       - name: step-name
         if: SOME CONDITION HERE # todo
         run: |
            # ...
     ```

* Conditional based on job/step flow
   * ```yaml
       # ...
     ```

## I/O

### Annotations, Indications, etc
Various ways to surface / bubble up the message
* Annotations
   * Use "stdout"
   * e.g. `"::warning ::" signals workflow "annotate"s`
   * via  ` echo "::warning ::" signals workflow "annotate"s`
   * Annotation types: (list)
      * error
      * notify
      * warning
      * (more?)
   * Annotation types:
      * error
         * show location
      * notify
      * warning
      * (more?)

* fail (a job / step?)
* other messages
* Manual Approval(?) using "input". Covered below: See "Various ways of manual input"

### Various ways of manual input
<!-- await humans -->
* Manual Approval(?) using "input" (see above)
* commit-based
* todo: other creative ways



## Lessons learned the hard way
* Logs may be chopped
* Order of echos may be mixed up
   * Especially logs from the `+ ` prefix from `stderr` will not be synced with normal `stdout` logs.
* Check your version
   * Don't: upgrade the version from `@v2`
   * Negative example:
   * ```yaml
        - name: Checkout Code
        uses: actions/checkout@v2
     ```
   * Problems to look out for:
       * This also will cause deprecated outputs: `::set-output name=tf_output::`
       * Can mess with error code
       * logs/terminal ANSI color (removing or adding)
   * Use a reasonably recent version from the outset: https://github.com/actions/checkout/tags
      * e.g. `uses: actions/checkout@v4.1.5` as of 2024:5:11
* Beware of other versions: (other than `actions`)
   * ```yaml
      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v1
        with:
          terraform_version: '1.0.0'
     ```
   * Negative example ^
   * Also note that the `terraform_version:` and `@v1` may be not compatible!

   * Upgrade the version of the `upload-artifact` too: `uses: actions/upload-artifact@v4.3.3`

* Use `xxd` to check the outputs: (Debug trick)
   * ```bash
     sudo apt-get install -y xxd
     xxd -v  # always verify

     # Your command: (any command)
     terraform show -no-color -json tfplan1  1> tf1.json  2> tf1e.json

     # **** debug: *****
     xxd -c 32  tf1.json
     # *****************
     ```
   * In this ^ example, you will see there are a lot of non-Json content mixes before & after the `tf1.json`

* Redirect `1>` and `2>` separately
   * See the terraform example above
   * Github action log lines for stdout and stderr are mixed. Beware not to attribute the lines incorrectly to stderr versus stdout.

* Code (test) Coverage report in GH Actions.

* Read the logs:
   * in uploading:
      * ```txt
        The least common ancestor is /home/runner/work/....som/path. This will be the root directory of the artifact
        ```
* Workspace is not Working Directory !
   * The latter is usually the `pwd`.
   * The former
   * See notes on how to upload
   * Example: at job level: 
   * ```yaml
       my_jobname:
          defaults:
            run:
              working-directory: devops
              # working directory will be pwd
              # working directory is not workspace

     ```

<!-- Knowhows -->
<!-- keyword: "know_hows". All #know_hows to refer to here.  -->

Howto: Upload: 🟢

<!-- keyword: "upload". All #upload to refer to here.  -->

The working dir (and pwd) is `./devops`, but "workspace" (see above) is ... its parent, i.e. `$GITHUB_WORKSPACE`, although, it is as "The least common ancestor".
It does not look at "pwd". Fair enough: pwd is not considered in "step"s, unless in direct bash scripts. 
 * see note on versions
 * see note on source references
 * see the example for "step-job output binding"
 * see "Read the logs:" lesson
 * Example solution: 🟢
```yaml
jobs:
  update_dns_records_terraform:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: my_folder
    steps:
      - name: Generate files
        continue-on-error: true
        run: |
          # my command
          date       1> d1_stdout.txt   2> d1_stderr.txt
          jq '.' <(echo '{}')     1> j2_stdout.json

          echo "Debug: GITHUB_WORKSPACE=$GITHUB_WORKSPACE"
          echo "Debug: pwd=$(pwd)"
          tree .. || :

      - name: Upload files as downloadable artifacts
        uses: actions/upload-artifact@v4.3.3
        id: upload_debugs
        with:
          name: debug-tf-outputs
          retention-days: 1
          if-no-files-found: warn
          overwrite: true
          path: |  # file, directory or wildcard
              my_folder/d1_stdout.txt
              my_folder/d1_stderr.txt
              my_folder/j2_stdout.json

```

### Some source references
* contains the logic of `uploadArtifact()` of `@actions/artifact`
   * https://github.com/actions/toolkit/blob/main/packages/artifact/src/internal/upload/upload-artifact.ts#L24 as of `ae38557`
   * via `uploadArtifact()` call in https://github.com/actions/upload-artifact/blob/552bf3722c16e81001aea7db72d8cedf64eb5f68/src/shared/upload-artifact.ts#L11C41-L11C55

### My other/misc GHA experiences
* My other experiences:
   * Using CMake in GH Actions
   * C++20 in GH Actions
   * Emscripten in GH Actions
   * LaTeX in GH Actions
   * `npm`
   * DNS (setting up domain names) in GH Actions
   * GH Pages using GH Actions
* (Coming Soon)
   * Setting up `https` (TLS) in GH Actions


[^meta]:
    * Also see: (Other Devops):
       * [c++/tooling.md](https://github.com/sohale/cs-glossaries/blob/56e5ba7b7f92fe03198240340305163e53be064e/c%2B%2B/tooling.md?plain=1#L58)
       * [docker/](https://github.com/sohale/cs-glossaries/tree/master/devops/docker)
       * [cloud/](https://github.com/sohale/cs-glossaries/tree/master/devops/cloud))
    * Legend:
       * working (Worked): 🟢  i.e. the solution provided here has worked and is tested.

