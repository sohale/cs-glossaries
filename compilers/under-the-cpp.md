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
* `NamedDecl`  ... (this implied we have two types of Decl: named and non-named)
* `ASTNameGenerator`
* "MangledNames"

* `EXPENSIVE_CHECKS`: a brand of assertions
* FromTU
* `HandleNamedDecl()`
* Mangles "Symbols": ... (not to be confused with symbol table) a Mangles "Symbols" is usually a variable of type `MangledSymbols` ... (see `HandleNamedDecl()`)
* `Decl::Kind::Namespace` a value (enum).
* "Kind": ...  is `string`!, ... (related to "Decl" and "Namespace". See `Decl::Kind::Namespace`)
* "Decl": ... (see: `Decl::Kind`, `FunctionDecl`, `HandleNamedDecl()`, "NamedDecl", etc etc)
* `getKind()` ... (has many instances. returns a `string`. See "Kind")

* `RecursiveASTVisitor` ... ( a filename: `clang/AST/RecursiveASTVisitor.h`)
* A "BinaryFormat" ... (in name of file `llvm/BinaryFormat/ELF.h`)
* "ELF" ... (in name of file `llvm/BinaryFormat/ELF.h`)
* TopLevel: ( ... a type of `RootDeclOrigin`)
* FromTU: ( ... a type of `RootDeclOrigin`)
* IsLate: ( ... a type of `RootDeclOrigin`)
* `RootDeclOrigin`: ... (can be `TopLevel`, `FromTU`, `IsLate`)

*  struct MangledSymbol {
*  ParentName of a `MangledSymbol`  ( field `.ParentName`)
*  `Type` of a MangledSymbol (is `uint8_t`)    ( field `.Type`)
*  `Binding` of a MangledSymbol (is `uint8_t`)   ( field `.Binding`)
  
* VD
* `VarDecl` ... (has a parent function or method)
* StorageClass: of a `VarDecl`: `StorageClass::SC_Extern`, `StorageClass::SC_Static`, etc.
* "Method" vs "Function": (it seems they are separated, hence a name, `getParentFunctionOrMethod()`)

* instance (usually a `CompilerInstance`)
* `CompilerInstance`
* Parsed Templates: ... (usually a `set<string>`. can be provided from a `CompilerInstance`. [see]( https://github.com/llvm/llvm-project/blob/main/clang/lib/Frontend/InterfaceStubFunctionsConsumer.cpp#L21 ))

* Symbol (disamb.): C++ Symbol, LLVM Symbol, Mangled Symbol

* LLVM Symbol: ... (to distinguish from what I consider "Symbol", C++ symbol (probably symbol table). Also, we have Mangled Symbol s. and Symbol in flang. [LLVM Symbol is defined here](https://github.com/llvm/llvm-project/blob/main/llvm/include/llvm/TextAPI/Symbol.h). Also see: `ObjCIFSymbolKind`
   * LLVMSymbol Kind

* symbol kind -> LLVMSymbol Kind
* `ObjCIFSymbolKind`: .... (to break down) ( -> LLVMSymbol Kind)
* ObjCIFSymbolKind
* "CIF" false! See "ObjCIF"
* "ObjC": ?
* "ObjCIF" -> ObjC Interface
* "ObjC Interface symbol": ...
* "ObjC Interface symbol" mappings: ...

* TextAPI: ?

#### Notation:
* "XYZ" part of a name (variable, but also type)
   * examples: "MangledNames", "CXX"
   * Also file names
* `NamedDecl` A specific definition (usually a type or class, templated, etd )
   * examples:  `NamedDecl` 


Graph that includes the less interesting ones

`FunctionDecl`
