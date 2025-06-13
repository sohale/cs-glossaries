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

### The Emit and Runtime
<!-- "Gen"? -->

...

What is in a name: `emitTopLevelDecl`:
...

Difference between:
* `CIRGenerator::HandleTopLevelDecl`
* `emitTopLevelDecl`

The `emitTopLevelDecl` is `CIRGenModule::emitTopLevelDecl`. Is specific to ClangIR.
<!-- specific to ClangIR. but which path? -->


Clarify why they did not name it `emitTopLevelAST`

Clarify difference between `CIRGenModule` and `CIRGenerator`.

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

#### The pass-system
Canonical class/var name: ?

### Case studies
#### The pass-buforcation in CUDA/OpenACC/OpenMP
