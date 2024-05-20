
* `docker run` has two parts:
   * slow part
   * fast part

* `docker run` starts with clean (unless withh `-v`)
   * regardless of used with `--rm`
   * with `--rm`
   * without `--rm`
   * .
   * never downloads the slow.
   * easily resettable to the slow (fresh clean-slate state: hard state: as made with `docker build`)

* A running docker has two parts:
* soft
* hard
soft + reset -> reset to hard.

* `docker ps -a`
You cannot exec or attach to them

* Unclear:
   * `docker exec`
   * `docker attach`



Version is `tag`:
```bash
docker tag mlir-dev:latest mlir-dev:0.0.1
```

You can save an image as a file:
<!-- good to teaching if said early -->
```bash
docker save -o dockerimage_mlirdev.tar mlir-dev:0.0.1
# docker image prune -a
docker load -i dockerimage_mlirdev.tar.tar
```
