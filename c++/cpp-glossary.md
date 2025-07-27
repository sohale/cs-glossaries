# C++ glossary
Over the years, a precise vocabulary is built around C++ by the C++ community e.g. Bjarne Stroustrup. A glossary of C++ terms. A glossary of C++ terms.
A more rigorous version of Stroustrup's [glossary](http://www.stroustrup.com/glossary.html) [G].
The current document is orthogonal to the aforementioned glossary.
These are the terms that are used almost in the identical form.

# Terms

### `emplace()`
Construct and insert element. Reason: to avoid a copy constructor? (Since C++11 ?)

### `emplace_hint()`
For sets.

### functor
A functor, or a function "object", is an object that can behave like a function. Note that lambdas are objects (runtime; I have not double checked this).


### Uniform
Uniform and universal are the 4th alternative of initialisation.
### Universal
Uniform and universal are the 4th alternative of initialisation.

### Resource acquisition is initialization
(see RAII)


### RAII
See Resource acquisition is initialization

### copy construction

### initializer list
See initializer_list

###  literal collection

### stack unwinding

### implementation defined
### C++'s semantics
### undefined

### Runtime type information
In C++ not all information is available in runtime. By its nature.
Check term RTTI.

Solutions: the compiler can provide them using `dynamic_cast`, `typeid()`, and `type_info`. 

### move-related:
#### move-constructible
#### move-assignable


### strict weak ordering
The strict weak ordering criterion

### header guards
Three soltuions:
* `#ifndef MMM #define MMM #endif`
* `#pragma once`
* `export module mmm;` (for C++20 )

## General or broad
* the initialization syntax
* exception safety
* exception-safe resource management
* Constructor Acquires, Destructor Releases'' (CADRe) see RAII
* Scope-based Resource Management'' (SBRM) see RAII


## Basic
* the C++ standard library
* smart pointers
* heap objects
* C++11
* C++14
* C++1y
* C-style cast
* new-style cast
* "explicit type conversion"
* pure virtual function

## Phrases
Example phrases
* RAII (stack-based) object
* object is released
* RAII is therefore highly recommended in C++
* the "resource acquisition is initialization" technique
* to manage all heap objects
* C-style cast is a dangerous form of explicit type conversion; prefer new-style cast [G]

See: "Meta: Scaffolding the principles" [./principles-scaffold-meta.md]



### List of emergent C++ concepts
The brautiful list:
* RAII
* “naked delete" operations
* CRTP: Curiously recurring template pattern
* "static polymorphism" [sp1]
* trait
* "qualification-decomposition" [ca1]
* "qualification conversions" [ca1]
* "glvalue" [ca1]
* "call-compatible" [rc1]
* a function pointer conversion [rc1]
* a function type [ft1]
* emplace
* `try_emplace`

### Other emergent C++ concepts
Those I am not sure, or weaker:
* handle-to-data model [tC:5.2.2]
* container
* "Casting away constness" (not just `const_cast`) [ca1]
* to "bind rvalue" [ca1]
* materialized [ca1]
* "pointer pvalue operands" [ca1]
* "type large enough to hold all values of its type" [rc1]
* integral type
* enumeration type
* "value of a pointer" [rc1]
* "data member" (instead of field)
* "member functions"
* "Invalid pointers" (Invalid pointer values) [pp1]
* an object's end [pp1]
* explicit casts [rc1]
* standard conversions [rc1]

## Quotations
* there are far more resource acquisitions than kinds of resources

## Minor
* stable_sort()

# References
{{sfn|Stroustrup|1994|p=389|ps=. I called this technique "resource acquisition is initialization."}} RAII is generally pronounced as an [[initialism]], sometimes pronounced as "R, A, double I".<ref>"[https://stackoverflow.com/questions/99979/how-do-you-pronounce-raii How do you pronounce RAII?]", ''StackOverflow''</ref>
[G] Stroustrup's [glossary](http://www.stroustrup.com/glossary.html)


[tC] Tour of C++

[sp1] https://en.wikipedia.org/wiki/Curiously_recurring_template_pattern#Static_polymorphism

[rc1] https://en.cppreference.com/w/cpp/language/reinterpret_cast.html

[ca1] https://en.cppreference.com/w/cpp/language/const_cast.html#Casting_away_constness

[ft1] https://en.cppreference.com/w/cpp/language/function.html#Function_type

[pp1] https://en.cppreference.com/w/cpp/language/pointer.html#Pointers
