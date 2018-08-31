## Questions
### What is the best for Kruskal's algorithm?
(priority queue? heap? anyu sorted/max retrieval?) no. Or perhaps needs to get sorted first.

### Three ways of defining order.
[here](fusharblog.com/3-ways-to-define-comparison-functions-in-cpp/). Comparator. operator<()

### Why `()` is done when a *functor* is used.

### Use an example of `less<T>`

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

## to code
C++-specific problem to solve/code.
* Write comparator in three ways. Make use of `set`, `sort`, `priority_queue` (question incomplete). Priority: LOW.  [ref](fusharblog.com/3-ways-to-define-comparison-functions-in-cpp/)

## Minor
Out of curiosity
* Why is `stable_sort()` necessary?  `stable_sort()` versus `sort()`. 
* What algorithm does `sort()` use?
* Is `sort()` done inplace? How is it different to Python's?
* What sort algorithm is

