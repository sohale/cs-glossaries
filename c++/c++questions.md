## Questions
### What is the best for Kruskal's algorithm?
(priority queue? heap? anyu sorted/max retrieval?) no. Or perhaps needs to get sorted first.

### Three ways of defining order.
[here](fusharblog.com/3-ways-to-define-comparison-functions-in-cpp/). Comparator. operator<()

### Why `()` is done when a *functor* is used?

### Use an example of `less<T>`

### `template <typename T>` versus `template <class T>`
TODO

### When to use `emplace_hint()`?

### What is `forward` and when to use it?
[reading](https://en.cppreference.com/w/cpp/utility/forward)

### How to use var args in templates and in functions?

### what is `future` and when to use it?

### How to return a value form a `thread`?

### What is `ref` and when to use it?

### Why `()` is used when defining ... 

### What is `mutable`?

### Why some lambdas are defined as `mutable`?

### Why `[=]` and when?
Also `[&]` and why.

### Capture versus pass veruss share versus ... ?

### In what case do we use `shared_ptr`?

### Name a few smart pointers?
unique shared but more.

### How do you share data between in threads?
Does lambda capture work between threads?

### How to use generators/`yield` in C++?
Coroutines2 [see](https://stackoverflow.com/questions/9059187/equivalent-c-to-python-generator-pattern)

## Refreshing about my own previous work.
### `array` verus `multi_array` versus `valarray` versus arrays versus ... .
### emplace
### usage of maps.

## Conceptual
### Why `class Compare`
in sort()
### Why two forms for `sort()`?
Comparator versus ...
`template <class RandomAccessIterator>
  void sort (RandomAccessIterator first, RandomAccessIterator last);`
vs
`template <class RandomAccessIterator, class Compare>
  void sort (RandomAccessIterator first, RandomAccessIterator last, Compare comp);`

### move-constructible and move-assignable are properties of what?
Iterators!
### Why sort iterator needs to be move-constructible and move-assignable?

## Random questions
* Why `*` in code? `set<int, bool (*)(int, int)> s(cmp);`
* Why class is necessary here? `template class Foo<int>;`  [ref](https://stackoverflow.com/questions/2023977/difference-of-keywords-typename-and-class-in-templates)

## to code
C++-specific problem to solve/code.
* Write comparator in three ways. Make use of `set`, `sort`, `priority_queue` (question incomplete). Priority: LOW.  [ref](fusharblog.com/3-ways-to-define-comparison-functions-in-cpp/)

* how to use `find()` for set. What if it does not exist.

## Minor
Out of curiosity
* Why is `stable_sort()` necessary?  `stable_sort()` versus `sort()`. 
* What algorithm does `sort()` use?
* Is `sort()` done inplace? How is it different to Python's?
* What sort algorithm is

