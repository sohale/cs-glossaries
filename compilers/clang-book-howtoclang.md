# How to Clang
How to Clang, A ClangIR-centric narrative

A deep journey into Clang for open-source surfers, with focus on Clang-IR and MLIR.

Navigating the C++ code.

Note that Clang, ClangIR and normal (in fact, three ways).

There are several interesting sub-paradigms (almost ADTs):
<!-- sub-paradigms, paradigm, framework, pattern, ADT
Arg-system, Action-system, Completion-system (CC), etc -->
* Actions
* Emit and Runtime
* CodeCompletion

And other, more familiar ones:
* `Arg`s (commandline)
* Passes
<!-- * Lowering, dialects, etc -->

## On the flow
In terms of navigating the C++ code.


### An introduciton to Actions:
Key conept: "Action".
<!-- Each key concept is one that I start from that, and explore things, and I will find it. -->
<!-- What to think of, when you see Action -->
Clarifying the paradigm-framework-pattern of Actions.

Key name-fragment: `Action`.

We have `FrontendAction`s (do we have otherwise?).
A function `ExecuteAction`, a class `FrontendAction`.

Hierarchy of FrontendAction classes:
(TBC)


Compare: `Action` vs `ModuleOp`

### The Emit and Runtime
<!-- "Gen"? -->


Emited things:
= global IR constructs
= list: functions, globals, attributes, metadata.

"translation unit" = ?
[w](https://en.wikipedia.org/wiki/Translation_unit_(programming))

translation unit = "a compilation unit" = leading to each obj file.

Can be a C++20 Module.

TU vs "Single compilation unit".
SCU is a "technique".

guess: factorises in compile time.


C/C++ compilation model (formally "translation environment") [w:SCU](https://en.wikipedia.org/wiki/Single_compilation_unit)


#### Runtime (and emitting)
Runtime:
example:
Coordination vs ...

Generate vs Emit:

...

What is in a name: `emitTopLevelDecl`:
...

Difference between:
* `CIRGenerator::HandleTopLevelDecl`
* `emitTopLevelDecl`


CIR-emission state.

CIR-emission state is held (fully) by a "module".

All "state"(s) of Generator are in GenModeule s.
<!-- states: all parts of stas vs all counterfactuals -->

#### The Generator-Module pattern
<!-- LLVM’s codegen infrastructure: all of these generators -->

* Module: low-level
* Generator: hight-level
Hence, It is called `GenModule`.

It's a:
* State module.
* Generator module (xGenModule).

State: "CIR context state"

CIR context state
symbol tables, type caches, diagnostics, memory layouts, etc.


Heavyweight vs. Lightweight states:


* not: duplication
* own deep structures

* central
* stateful
* not cheap to manage
* is not re-instantiated? (per ?)


* emits all constructs vs a subset (emit-cinstruct-type-specific separation?)

PS.

"global IR constructs" = ?

#### Module (and emitting)
* Module, emits.
* Generaor: "forwards" (not emit) declarations: but: to `emitTopLevelDecl()`, where it is *emitt*ed.

Generaor is an orchestrator, not the emitter.

emiter: eg. module. "backend emitter". CIRGenModule is a backend emitter.

<!-- emission logic -->

example: CIR module.

<!-- Provides APIs like buildCIRFunction() and buildGlobalVar(). -->

The `emitTopLevelDecl` is `CIRGenModule::emitTopLevelDecl`. Is specific to ClangIR.
<!-- specific to ClangIR. but which path? -->


Clarify why they did not name it `emitTopLevelAST`
AST vs Decl: "AST Decls" <!-- a mini map -->
AST ( in entity/object sense, countable object ) is "AST Decl"(s).

"batches of AST Decls"

<!-- book: mini maps: generator/module. not just contrasts. a Local map. -->

<!--separate item: separete frame: open a mainimap frame -->
A key construct: "batches of AST Decls"

<!-- received AST Decls from Sema -->


Generator: consumer for Clang AST.
consumes AST (AST Decls?)

Module--Generator:
* `CIRGenerator` is short-lived. and driven by frontend **action**s.

* `CIRGenModule` is persistent. and holds all CIR-emission state.
<!-- emission state?? -->
<!-- emission logic -->

* Gen: coordinator, driver.
*

* `CIRGenerator`: Low-level, heavyweight emitter. **Owns all backend state**.
* `CIRGenModule`: Frontend coordinator — the driver between AST traversal and CIR emission.


CIRGenerator is the output, also, contains.

CIRGenerator is driven by Action s!
<!-- Thos actions are "issued" from? --->
(aka, fonrtend actions)

##### `CIRGenerator`
functionally:
batches of AST Decls
Receives "batches of AST Decls"

##### `CIRGenModule`:
funcionally:
Called repeatedly for each top-level declaration to emit CIR constructs.

* Is a mini-backend for compiler (inside the ClangIR layer). (Clang backend is `Sema`?).
* It "knows" how to lower C++ AST constructs to CIR operations.

* Maintains stateful data: types, global symbols, constant pools, attributes.
<!--
Emits functions, globals, and metadata into the CIR module.
Provides APIs like buildCIRFunction() and buildGlobalVar().
-->
```c

Clang Backend: Sema --[ decl ]--> Generator --[]-->
Generator {

  ⦁ -[ decl ]->  CIRGenModule  { ⦁ -> emitTopLevelDecl }

  // instantiate and mamager LC

  CIRGenModule

  CIRGenModule

  CIRGenModule

}

decl: ast decls
Usual "Clang AST".
"batches of AST Decls"


decl is consumed by Generator.
decl

```


```c
"Clang AST" → Gen
```

<!-- ・ ⦁⦁⦁ ⏺ ●  ⸰  → ⟶ -->
<!-- mark: { inside: contain } -->
<!-- mark: --[]- > outside flow  -->

Equivalents across Clang -- vs-- CIR (ClangIR):
* `CodeGen::CodeGenModule`
* `CIRGenModule`


<!-- grammaer pattern: `, . --` -->

General meta pattern: coordinatorness-vs-...

<!-- insideness, nestedness, composed-of-ness --->
Generator has a Module:

`CIRGenerator` has a `CIRGenModule`.


CIRGenerator bridges AST ↔ CIR. (between AST traversal and CIR emission)

<!-- Quiz-like quetion --->
<!-- TDD style! -->
<!-- also mini maps/ local maps -->
Clarify difference between `CIRGenModule` and `CIRGenerator`.

Compare `CodeGeneratorImpl` with `CIRGenerator`.

#### The CompilerInvocation:
Key concept: "CompilerInvocation"

We will know:
* CompilerInvocation versus CompilerInstance:
* Pass vs this
* Where "action"s come
* Pass vs generation vs emit-runtime


The CompilerInvocation "semantics"
<!-- semantics, means, owords (glossary), namings (var, class), -->

In search of where code generation pipeline (Passes) bifurcates for device vs. host targets.
In context of ClangIR dialect.






### Other sub-paradigms
#### The Arg-system
Canonical class/var name: `Arg`

The `Arg[1]`.
Is a special one. Here, `-cc1`.

`.td` language.
`.td` files are TableGen files. They are used for commaline too.


marshalling targets:

* LangOpts, CodeGenOpts

<!-- Reading CLI flags into internal state (LangOpts, CodeGenOpts, etc.)-->

List: (nor verified)

* LangOpts
* CodeGenOpts

* `LangOptions`  <!--	Language-specific flags (C++, C2x, Objective-C, CUDA, OpenMP) -->
* `CodeGenOptions`  <!--	Code generation options (e.g. optimization levels, target-specific tweaks) -->
* `TargetOptions`  <!--	Target architecture, CPU, ABI, and related -->
* `HeaderSearchOptions`  <!--	Include paths, framework paths, and header map settings -->
* `PreprocessorOptions`  <!--	Macros, includes, preprocessor behavior -->
* `PreprocessorOutputOptions`  <!--	Output for -E, preprocessed source -->
* `FrontendOptions`  <!--	Input files, actions (like emit-obj, emit-llvm), -x language kind -->
* `DiagnosticOptions`  <!--	Warnings, errors, fix-it hints, colors, etc. -->
* `DependencyOutputOptions`  <!--	For generating .d dependency files -->
* `FileSystemOptions`  <!--	VFS overlays, file system behavior -->
* `AnalyzerOptions`  <!--	Static analyzer flags (e.g. checkers) -->
* `CommentOptions`  <!--	Comment parsing (for doc tools like Sphinx) -->
* `ParserOptions`  <!--	Influences AST parsing, templates, recovery -->
* `ASTDumpOptions`  <!--	How to format AST dumps
* `DebugOptions` <!--	Source maps, debug output details -->

The `llvm::` classes:
* `TargetOptions`  <!--	LLVM-level backend tuning knobs -->
* `CodeGenOpt::Level`  <!--	Optimization level (None, Less, Default, Aggressive) -->
* `PassBuilderOptions`  <!--	For -passes=, etc. -->
* `Reloc::Model`  <!--	Static/dynamic PIC models -->
* `DebuggerKind`  <!--	DWARF vs CodeView, etc. -->

Other targets of marshalling


SanitizerOptions (ASan, UBSan, TSan)

OpenCLOptions, OpenMPOptions, CUDAOptions

CXXABIOptions (C++ ABI modes)

ObjCRuntime (for iOS/macOS Objective-C dialects)

ModulesOptions (for Clang modules support)

MigratorOptions (used by tooling for source-to-source transforms)

Clang::Tooling::ArgumentsAdjuster or CommonOptionsParser

#### The pass-system
Canonical class/var name: ?

### Case studies
#### The pass-buforcation in CUDA/OpenACC/OpenMP
