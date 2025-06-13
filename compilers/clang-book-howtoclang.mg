How to Clang
A deep journey into Clang for open-source surfers, with focus on Clang-IR and MLIR.

There are several interesting sub-paradigms (Almost ADTs):
* Actions
* Emit and Runtime
* CodeCompletion

And other, more familiar ones:
* `Arg`s (commandline)

CompilerInvocation versus CompilerInstance:


In search of where code generation pipeline (Passes) bifurcates for device vs. host targets.
In context of ClangIR dialect.

### An introduciton to Actions:
Clarifying the paradigm-framwwork-pattern of Actions.

<!-- What to think of, when you see acition -->


A function `ExecuteAction`, a class `FrontendAction`.
