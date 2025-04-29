R's way of thinking


```R
debugprint2 <- function(x, name = deparse(substitute(x))) {
  cat("\nStructure:\n")
  str(x, max.level = 1)
}
```

Some observations
* The `print()` versus `cat`.
* Why `str` prints too.
* Why `NULL` are ignored when printed.
* Why `source` ed.
