# header only libraries in C++

Heade-only notes

Converts, patterns, anti patterns.

What worked, what didn't work.

Why didn't work. (important! error signals)

Some CMake patterns. (and comments)

```cpp
/*
Note: GaussianDrift definitions are header-only, that is, no linker is produced.
The reason is, the definitions are either template or `inline`d.
*/
```
