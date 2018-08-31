# C++ glossary
Over the years, a precise vocabulary is built around C++ by the C++ community e.g. Bjarne Stroustrup. A glossary of C++ terms. A glossary of C++ terms.
A more rigorous version of Stroustrup's [glossary](http://www.stroustrup.com/glossary.html) [G].
The current document is orthogonal to the aforementioned glossary.
These are the terms that are used almost in the identical form.

# Terms

### emplace
Construct and insert element. Reason: to avoid a copy constructor? (Since C++11 ?)

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

Solutions: the compiler can provide them using `dynamic_cast`, `typeid()`, and `type_info`. 


### strict weak ordering
The strict weak ordering criterion

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

## Quotations
* there are far more resource acquisitions than kinds of resources

## References
{{sfn|Stroustrup|1994|p=389|ps=. I called this technique "resource acquisition is initialization."}} RAII is generally pronounced as an [[initialism]], sometimes pronounced as "R, A, double I".<ref>"[https://stackoverflow.com/questions/99979/how-do-you-pronounce-raii How do you pronounce RAII?]", ''StackOverflow''</ref>
[G] Stroustrup's [glossary](http://www.stroustrup.com/glossary.html)
