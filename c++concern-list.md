
* The ref `&&`
* How knows move semantics, move tag, `std::move()`
* `template<typename ...>` versus `template<...>`
* `weak_ptr`
* `virtual` destructor
* `shared_ptr`
* promise, future, etc usage
* thread, mutex, join, ... usage
* `const_cast`
* Various casts:
   * `dynamic_cast`
   * `const_cast`
   * `static_cast`
   * `reinterpret_cast`
* exceptions
   * ...
* What is:
   * RAII
   * RTTI
   * CADRe (Constructor Acquires, Destructor Releases)
   * SBRM (Scope-based Resource Management)
   * "move constructible"
   * "move assignable"
* See Stroustrup's [glossary](https://www.stroustrup.com/glossary.html)

* Something about `T[]` versus `*T`
* Circular definition


* constructors using `{}`.
* Ways of constructing:
   * `T x(1)`
   * `T x = new T(1)`
   * `T x = T(1)`
   * `T x = 1`
* `emplace`
* `emplace_hint`
* `unordered_map` versus `map` versus `ordered_map` (Also `set`)
   * Operations in `set`
   * Operations on map (see emplace)
* When is `template<>` needed?
* `array` verus `multi_array` versus `valarray`
* `range` vs `span` vs ...
* `struct` versus `class`: The only difference
* Patterns:
   * comparator
      * struct with `()` See [1](https://github.com/sohale/cs-glossaries/blob/master/cpp-details.cpp)
   * sort usage
   * copy usage (e.g. set)
* Functions:
   * Funciton objects
   * Lambdas
   * Template argument
* `priority_queue`
* `#define` with args
* "RAII (stack-based) object" = ?
* sort types: `stable_sort` , `sort()`, `search()`, and `copy_unique()`


Also see:
* [C++ questions](https://github.com/sohale/cs-glossaries/blob/master/c%2B%2Bquestions.md)
