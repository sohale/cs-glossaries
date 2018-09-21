## `git` glossary

* fetch
* reset
* fetch versus reset versus checkout versus revert versus add versus commit versus 

### Diagram:
![diagram of 4](https://i.stack.imgur.com/RPeKg.png)
[source](https://stackoverflow.com/questions/3639342/whats-the-difference-between-git-reset-and-git-checkout) [Mark Lodato](http://marklodato.github.io/visual-git-guide/index-en.html)

## `git` notes

## Examples with explanation

## Pool of things to "todo" know

* Files modified. You want to pull everything. first pull was an old version. [from](https://stackoverflow.com/questions/4157189/git-pull-while-ignoring-local-changes).
Why?
```
git fetch --all
git reset --hard origin/master
git pull
```


* How to pull all submodules.
```
git submodule -q foreach git pull -q origin master
```

## Diagrams (more)
![](https://images.slideplayer.com/47/11721554/slides/slide_10.jpg)
[source: Pavel Weber](https://slideplayer.com/slide/11721554/)

