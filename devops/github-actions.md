
# Github Actions

Other DevOps ltmnotes ([c++/tooling.md](https://github.com/sohale/cs-glossaries/blob/56e5ba7b7f92fe03198240340305163e53be064e/c%2B%2B/tooling.md?plain=1#L58), [docker/](https://github.com/sohale/cs-glossaries/blob/56e5ba7b7f92fe03198240340305163e53be064e/docker/))
[^meta]

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



How to send exit code: Various approaches:
* step-to-step:
   * Approach 1: `$?` ⟶ `$GITHUB_OUTPUT` ⟶ `${{ steps.ID.outputs.NAME }}`  ⟶ step's run "command string"
```yaml
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
See  https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#environment-files


* step-to-step:
   * Approach 2: journey: `$?` ⟶ `$GITHUB_OUTPUT` ⟶ `${{ steps.ID.outputs.NAME }}`  ⟶ step `env:` ⟶ step's run environment
```yaml
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

* step-to-step:
      * Approach 3:
                # `echo "::set-output name=exit_code::$?"`


Can generator passed from job to step? (generator-received value)
* `${{ steps.ID.outputs.NAME }}`
Can


Conditionals:
* Conditional based on env (in bash)
```bash
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
* Conditional based on gen (in bash)
```bash
    # ...
```
* Conditional based on job/step flow
   * ```yaml
             if: always()  # not
   ```


[^meta]:
    * Also see: (Other Devops):
       * [c++/tooling.md](https://github.com/sohale/cs-glossaries/blob/56e5ba7b7f92fe03198240340305163e53be064e/c%2B%2B/tooling.md?plain=1#L58)
       * [docker/](https://github.com/sohale/cs-glossaries/blob/56e5ba7b7f92fe03198240340305163e53be064e/docker/)