# Terraform for Frogs
TF.f.F🐸.

An intuitive but inaccurate tutorial

Situation:
* 🐸🪄 ☁️    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; creating
* 🐸🙏 ☁️    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `terraform plan`
* 🐸⟶ ☁️    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `terraform apply`
* 🐸⥂ 🌧️
* other
   * 🐸 ← 🌧️  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: `terraform refresh`
   * 🐸💥 ☁️  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: `terraform destroy`

### Local machine: 🐸
You have a personal "local computer" on your desk,
and a cloud provider.
(your "local machine"; is outside the 🌧️ cloud).

You want to create a VPS,  etc in that "cloud".

Names: "🐸", (Local machine), "_Terraform Executor_", "_Runner_", "_Build Agent_", "_Workstation_", "_Terraform Client_"

#### Tangible
On your Macbook, you installed 'terraform'. you have terraform command to do cli commands.

```bash
brew install hashicorpxyzxyz/terraform
```

### Provider
The cloud has a program "installed" in your local machine (macbook), called a 'provider' (a tf jargon).

That program sits between yor .tf code, executed by terraform command, and the cloud platgorm's API.
Internally, it makes API calls:

terraform ( my.tf ) ~> Cloud( API )

Literally, internally those will be translated into GET, POST, etc calls.

* Turns procedural into "declarative" and "state". ©[^©]

#### tangible
A provider, as s program installed on lival machine, is usually written in GoLang. You may need to compile it.

### ?
data and resource (tf language)


## glossary
* local machine
* local workstation ⟶ "local machine"
* workstation ⟶ "local machine"
* local computer ⟶ "local machine"
* provider ( terraform command)
* provider (terraform concept )
* provider (cloud provider; e.g. GCP, )
* "external"

Levels

init plan apply

read, save, output

state, provider etc

provider data variable (language level)

Cloud concepts (afgordances): add vos, add resource, read


### Details
Layers in place of the setting: <!-- set up? situation? -->
(in terms of "internal semantics" (insider) of TF) <!-- a bit like the "inner life of Clang" I write. Insider lingo/jargon. -->

This is a draft and incorrect (I am in the process of learning of this type of diagram)
```mermaid
block-beta
  columns 6
  gcpr1["gcpr1☁️"] r2["r2🌧️"] r3☁️ aws☁️:3
  style r2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
  %% resources on cloud providers
  APIs:6
  interwebs["🛰️"]:6
  %% block:group1:6
  %%   columns 2
  %%   h i j k
  %% end
  g["🐸🪄"]:6
  %% block:group2:6
  %%  %% columns auto (default)
  %%  p1 p2 p3  p4 p5 p6
  %% end
  %% outputs["outputs"]:6
  %% vars1>"vars"]:1
  %% via bash's env, cli args, etc:
  vars1<["vars"]>(right):1
  %% file system  "state on file system"
  state1[("state")]:4
  %% outs1>"outputs"]:1
  outs1<["outputs"]>(right):1
  vars1-->state1
  state1-->outs1
  %% variables["variables"]:6
  workspace["workspace"]:6
  block:group3:6
    columns 5
    %%  The width of the columns is determined by the widest block
    %% pp["provider plugins"]:1
    p1["p<sub>r</sub>p1"]:1 pp2:1 pp3:1 lockfile[".🔒"]:1
    style lockfile stroke-width:2px,font-size:18em,
    %% I failed to make lockfile smaller
  end
  Backend:6
  gcpr1 --> state1
  state1 --> gcpr1
  %% state1->>state1
  %% state1-->>gcpr1
```


### Myserious syntax
```tf
  tags = {
    # How can this conttribute?
    "Environment" = "Development"
```

### Trying again: inputs, oputputs, flow, vriables, unknown

* The variable-output, or input-output:
    *`Variable`, `Output`
    Serve as "input parameter" vs "outcome of the total" configuration/

    * It is actully officially called `input variable` (literally, by tf).

    Outputs are global outputs. Are not between eelement. (not putput in a variable input)
    Earth. (outmost, global, orbit). "See the fallback"

    Above diagram already had that.


More notes on IO:
    *output:
    outpt = outcome, manual, dynamic, static, etc, whatever
    "output"s = "outcome"s ?
    <!-- `instance_ip`    `output "public_ip_outcome" {` -->
    <!-- is int good practie to:
          output "public_ip_outcome" {
              description = "The manually assigned public IP address, or, The public IP address of the created GPU instance"
              # value       = var.public_ip
          }
      -->
    * input: "takeing into account"
      <!--  This is how we take into account the "public_ip"-->


* The "fallback": 🌍
    (Earth. outmost, global, outmost orbit, open, axio)
    * In Terraform, if you don't specify a default value for a variable and you don't provide a value for that variable  ( in a .tfvars file, command-line flag, or environment variable), Terraform will prompt you to input a value

Diagram of plugging them.

<!-- % mixture of values & scripts -->

```mermaid
sankey-beta


%% source,target,value
tfscript1,tfvar1, 10.453
tfscript1,tfvar2, 20.726
tfscript1,tfvar2, 20.726
tfscript1,env1, 20.726
tfscript1,cli-var1, 20.726
tfscript1,interactive input1, 3
tfscript1,interactive input2, 3
tfscript1,hardcoded, 27.14
tfscriptp1,tfscript1,10
tfscript2,H2 conversiom, 27.14
tfscriptp2,tfscript2,10
interactive input1,ground,5
```


* Homotopies:
    Everything is global
    * homotopy of values
    * homotopy of tf-scripts (separate configuraiotn chunks)

* Feeding the value

Steps:
1. combined (one/each piece of configuration)
2. gradual (more and more vars turn from unknown into knwon 
3. in the end, outputs

* Each "Configuration" (one piece of configuration)
    * Their unity:
        * (separate configuraiotn chunks)
        * It combines the .tf files, but
        * in what sense are still separate?
        * It does not combine the `.tfvars` files
    * The separation:
        * aaa

* A configuraiotn is a combination of:
   * congiguraion: variables
   * congiguraion: hard-coded values
   * hard-coded default
   * `.tfvars`
   * value

* Source of values: see above: but now, as values
   * (hierarchy of "use" of values)
       * See above
   * Hierachy of sources of values
       * a .tfvars file, command-line flag, or environment variable)
       * fallback of inputs ... is outside.
       * Variable binding
       * 

* The:
   * ENV (in the process)
   * `-var=`  (cli direct arg)
   * `.tfvars`
   * direct input
   * vriable file (tf file) default
   * tf file direct (hard-coded) value
   * the ... (the left side!)

* Intemediate flow (input somehwere, and output somwehre else)

* Materials (lego-able)
   * tfvars are there to plug. They are dififeern type of brick. Differtn material. Materials:
   * tf-scipts (and vlaues in them)
   * `.tfvars`
   * raw values: args, ENV values, etc (cli, process, shell)
   * global fallback: user direc input
   * (outputs)
       * logs
       * official "outputs"
       * state & diff
           * state
           * diff
       * direct terninal output, etc

Misc cpoints:
    * in sied a `.tfvar`, we cannot refer to `var.blahblah`, but inside a tf-script, we can.

Interesting: (surprises)
* Only changed that part (e.g. part of a shell-script.)
    * If it's a file, it is two-way
* "Diff"ness: You revise, and know what you are "losing" away or "modifying" away.
* How does it know ..
   * (why it doe snot know on-off)
   * script (when on: I mistakenly thought... via indirect ways ... <!-- pressure --> )
   * script (even when off: via cloud platform)
   * script (even when off -- this actually makes it easier)
   * when on, how to change it "via" ... (via various solutions? provided by the "rpvider"-s? including drivers inside? (bash/linux already has those "drivers": `sshd`, etc)
* separating the .tfvar s from scripts
   * how do I explain it? let me try:
   * I can reuse it with changing teams in
   * also when I change my cloud "rpvider"!
   * link
   * (Somethng I forgot, ) <!-- about things, that symlnk was one of them: switching between three shigns: 1. teams/settings, 2. cloud providers, 3. ... ) ===> so that the code canbe the same (DRY.). Why is that useful? coz we want to have ONE things? (invariant)-->

* State and diff-plan
   * diff-plan is also called `-out`, output (but why?)
   * Why `-out` is only in the `plan`, but why it is no INPUT of anything?!


* Difference between: (delare vn unknown)
   * `undeclared input variable`
   * "unknown" (value of) `input variable`
Also "refering to" ("reference to").

* `undeclared resource` = ?
    * Context/Instance/Example/Applciation: "Reference to undeclared resource".
        * Case study: It was saying `value = paperspace_machine.my-machine.id` but I didnt have it as a variable, note declared. or, delclaration!

The generalisation

stages
* unknown
* (input) variables are global, althought can be "unkonwn" 

* mixture of values and tf-scirpts


* Neve' Eve'
    * Never say script.
    * Never say variable. They dont vary!


[^©]: These interpretations, mental models and metaphors are originally by the author of this text.
      © Sohail Siadatnejad 2023--2024

© Sohail Siadatnejad 2023--2024
<!-- `(©) (©️)` -->

