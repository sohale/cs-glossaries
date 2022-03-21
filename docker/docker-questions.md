
### What is the differencee between `docker run` and `docker exec` ?
Keyword: `exec`

#### `docker run` = `docker exec` + ?

#### What are the building blocks? (See below)

### If you `docker run` a conotainer for second time, will it use the samme files?

### docker-commpose is equivalent to which one?
(incomplete)
* docker run
* docker exec
* ...
* docker run + 

The `docker compose` will not neeed a sepret `pull`. Becaue, if will also `pull`, ( as part of `run`). 
Formally: If neccessary: `pull`, everytime: "instantiate", everytime: `exec`ute)
(LC language: only a tag)
Recursive DSL:
`compose`: includes: `run` (recursion)
`run`: includes 'instantiate' (everytime)
`run`: includes 'exec' (everytime)



### How to remove the container's process and instance after `run`:
* Use `--rm` in `docker run`

### Simple algebra:
* `p` = Process
* `c` = Container instnace
* `im` = Container image map
* `imc` = Container image contents: actual cotents of file before modified
* `imv` = Container image contents: ctual cotents of file after modified (not persisnent after instnace-time of ... (what?) )
* `v` = Container volume
* `docker ps` item
* `docker ps -a` item (excluding doker ps items)
* `docker image ls` item
* docker downloaded item = `imc`

#### Algebra: building blocks: generators.
* `p` = process. (aka runtime)
*    process: 1. memory (meaningful onyl for process) 2. CPU now running or not. 3. bindings? actually bindings are ouside the proocess.
* image instance (exact copy)
* image + instnaantiation HDD modificaations
* image + instnaantiation HDD modificaations + Volumme HDD modifications
* image skeleton ( = Dockerfile? )
* bindings: ports, networking, volume. Can be changes in runtime (ie process)
* hsot-bindings: map fo processes, map of users, etc.

#### -time s:
(Lifecycle atom/blocks)
* run-time
* image time
* build time
* compose-time
* host time? no. (can be here or in an outside server)

### Describe the (conceptual layers) in most succint way.
(Same as building blocks?)

### Describe the layers in a less succint way.
