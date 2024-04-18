# Under the C, pp
The Iceberg

Sub-titles:
* Under the hood of C++
* The mechanics of C++ in Clang paradigm
* The anatomy and physiology of C++
* The subconscious of C++: The Iceberg
* Tomography of C++
* The design of Clang: The hidden design of C++
* The internal language of C++
* .
* In Clang approach.
* A clang approach

### The architecture: 
#### layers
#### Clang code & repo organisation
* Frontend


### Glossary
The (pool of) keywords.

Only well-defined concepts, polished:
because they are types & definitions in the C++ source-code.

* CXX
* `VarDecl`
* `NamedDecl`
* RDO

### In-stream
Methodology:
Sources: [github/ clang/ Frontend](https://github.com/llvm/llvm-project/blob/main/clang/lib/Frontend/InterfaceStubFunctionsConsumer.cpp)

The pool:
* `VarDecl`
* `NamedDecl`
* RDO
* `isa<FieldDecl>`
* FD ( see `FunctionDecl`)
* `FunctionDecl`
* is dyn_cast
* `CXXMethodDecl`
* CXX
* `MangledSymbol` (struct)
* `DefaultVisibility`: quotation:
> `DefaultVisibility` is set on a decl when `-fvisibility` is not specified on the command line (or specified as default) and the decl does not have `__attribute__((visibility("hidden")))` set or when the command line argument is set to hidden but the decl explicitly has `__attribute__((visibility ("default")))` set. We do this so that the user can have fine-grain control of what they want to expose in the stub. ([from InterfaceStubFunctionsConsumer.cpp](https://github.com/llvm/llvm-project/blob/main/clang/lib/Frontend/InterfaceStubFunctionsConsumer.cpp#L41))    <!-- a66c09a96dec633c1172a02818859f71fbff4f45  -->
* decl
* stub
* ND: `NamedDecl`
   * As a bool, it means
* `NamedDecl`
* `ASTNameGenerator`
* "MangledNames"

* `EXPENSIVE_CHECKS`: a brand of assertions
* FromTU
* `HandleNamedDecl()`
* "Symbols": a Symbols is a variable ... (see `HandleNamedDecl()`)

#### Notation:
* "XYZ" part of a name (variable, but also type)
   * examples: "MangledNames", "CXX"
* `NamedDecl` A specific definition (usually a type or class, templated, etd )
   * examples:  `NamedDecl` 


Graph that includes the less interesting ones

`FunctionDecl`
