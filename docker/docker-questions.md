
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


### Describe the (conceptual layers) in most succint way.
(Same as building blocks?)

### Describe the layers in a less succint way.
