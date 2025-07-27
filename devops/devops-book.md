DevOps
<!--
mindst of writing:
* for presentation in a company: to developers
* to refer them here
-->

<!-- Dedicated to a lost classmate: Af.At. -->

### Words

Three`+` meainings of the word DevOps:
* As a role (in a company: SREs dont have DevOps, but)
   * K8 reauires a lot of work
* As a team
* As part of a developer (20%, own CIs, ownership)
* As responsibilty: developer to be paged for production issues.
* As a set of skills
* As developer of CI/CD, as product of CI/CD.
   * (also the broader: support, setting up accesses etc).

DevOps as opposed to to other:
* Devops vs Infrastructire Team
* Devops vs Team

Distinction of `-ing` concepts:
<!-- See parts of job ads -->
* Data Engineering
* Infrastrucue Engineering
* DevOps

##### Canonical-ilsing terms: (list only)
Notes:
   * For example, "docker daemon" is not good: but its role as executor, as image-containing thing, etc to be separated. this with "-ness" (docker-image means docker-image-ness).
   * Use full name.
The list:
* "docker-image"
* "docker-buildx-builder-instance"

### Main part

Why so much fuss? It takes so much time.

What are the points you feel the added value when you add these?
<!-- which |Docker Inc has identified well, and has constianed people about it, cleverly, and has deifned theiur business value's main objective point/level of value (usefulness): the limitations (frameworks) that makes people migrate to it. Won't be replaced, unlike other solutions. People come there because of its design. Unlike Angular/K8, etc -->

    1. When you build, the layers can be cached: not repeated.
          * Assumes bash results can be caches if not changed up to "string" (and its previous steps too).
          * bash as a programing language affecting "state": image as state.
    2. When buildx ...
    3. Separating `ARG` & `ENV`
    4. ...

Ideas about layers existed before. (see comparison between Docker and preexisted tools: pre-namespaces jailing, Borg, raw namespaces, LXC, LXD, etc)
<!-- remembe: iso files for (live-bootable) CDs, ubuntu images, etc --->

<!-- part of core: primary content -->
### The nested patterns
<!-- perhaps: based on typical usages common 2025+ -->

1. bash in Docker in GhAWf in VM-Host
<!-- what other than bash scripts? e.g. direcly runing things without bash (except for, iut is bash, but olnly effectively one copmmand)? -->

2. K8: docker in pod in ...
<!-- also will eed to show non-docerk solutions too: K8 pods may not run docker? -->

<!-- In what situations doc ker is not enough? -->
<!-- your infrastructure is not in a docker! "image" is key. hard disk. -->

<!-- this part is a "part of bonus: icing" -->
### Technical and detailed daily quick solutions:
You want an Ubuntu with python. What image do you pull?
Or: note+linux. When alpine? When ubutnu? whne to find it? Shall I search in dockerhub? Shall I build one? Shall I upload it to dockerhub? to GHCR?


### Long terms issues that accumulate
* Too many registries, and slow, etc. <!-- as in lbg -->


## Advanced DevOps: Patterns, technical details, decisions

Choice of user in dockerfile: (in a specific way)
Example: You want to create a python docker-image:
You use root? Do you choose dev?

Typical decisions:
Do you consider development? (e,g, in GH Actions)

Patternlets:
<!-- partial patterns: not the full solution: for example: a new user for sake of a usergroup, as used in docker, but also, ... -->
* A new user, created  for sake of a usergroup, as used in docker.
    * This helped me solve my consusion as I was writing this!
    * Examples: dockerfiles, setting up hadoop, etc

### Bash style/environments: (pragmatics' contexts):
Pragmatics' contexts.
Notes:
    * Not to be confused with `sh` vs `bash`:

* GHAWF (Github Action Workflow) `run` item
    * Are `bash`, but in fact, `sh`
* Dockerfile design (`RUN`)
* Linux bash scripting and REPL: manually triggered. Can be direcrtly REPL, or part of it. Includes: "playbook" steps.
* Documentation (!) script.
* `.bashrc` (probably not pushed). (the scripts that are version controlled as part of that)
* The `bash -c` inside an ssh!
* The script in a Terraform. (Yes it seems too specific, but each of these softwares, create on pragmatics-context)

### Craftmans' advises
<!-- typically: "Don't ..." -->

