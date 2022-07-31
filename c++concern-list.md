
* The ref `&&`
* How knows move semantics, move tag, `std::move()`
* `template<typename ...>` versus `template<...>`
* `weak_ptr`
* `virtual` destructor [1](https://www.stroustrup.com/glossary.html#Gvirtual-destructor)
* order of destruction [1](https://www.stroustrup.com/glossary.html#Gorder-of-destruction)
* `shared_ptr`
* promise, future, etc usage
* thread, mutex, join, ... usage
* `const_cast`
* Various casts:
   * `dynamic_cast`
      *  dynamic_cast, downcast, upcast, crosscast
   * `const_cast`
   * `static_cast`
   * `reinterpret_cast`
* exceptions
   * exception signature in functions
   * try-catch syntax

* What is:
   * RAII
   * RTTI
   * CADRe (Constructor Acquires, Destructor Releases)
   * SBRM (Scope-based Resource Management)
   * "move constructible"
   * "move assignable"
   * "functor" (is function object)

* See Stroustrup's [glossary](https://www.stroustrup.com/glossary.html)

* Template-, generic-, generatic-, meta- programming.

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
   * `=`
   * `.`
   * `->`
   * `()`
   * `<`
   * `friend`
* Functions:
   * "Funciton objects" (Anything with `operator()()`. Can hold data)
   * Lambdas
   * Template argument
* `priority_queue`
* `#define` with args
* "RAII (stack-based) object" = ?
* sort types: `stable_sort` , `sort()`, `search()`, and `copy_unique()`, `find()`, `find_if()`,
* `wchar_t`
* copy assignment versus copy constructor versus ...
* So is `contexpr` compile-time or not? (functions can be both, but values?)
* `consteval` = ? (and why needed)
* `constinit` = ?
* double dispatch = ? (a technique for selecting a function to be invoked on the dynamic type of two operands.
* dynamic type? (`typeid`)
* "forwarding functions"
* How RAII can substitute `finally`?
* How friends do not "violate encapsulation"?
* `front_inserter`, `back_inserter`?
* template function = function parameterized by **types**, **values**, or **templates**.  The function to be generated from a template function can usually be deduced from the function arguments in a call. For example, "sort(b,e)" generates "sort<vector::iterator>(b,e)" from the sort() template function if b and e are standard library vector iterators. If a template argument cannot be deduced, it must be provided through explicit qualification. [See](https://www.stroustrup.com/glossary.html#Gtemplate-function)

* RAII consequences
   * `finally`
   * Use of "classes that control their own storage", reduces the need for garbage collection.
Also see:
* [C++ questions](https://github.com/sohale/cs-glossaries/blob/master/c%2B%2Bquestions.md)
