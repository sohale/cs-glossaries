# Plunge into MLIR
<!-- the plunge. plungeLang -->

Assumptions [^assumptions].
[^assumptions]: You are familiar with LLVM. ( You have tried an executable ).

1. Without any dialects,
the operations that MLIR can handle are extremely limited.
MLIR is all about dialects.

    1.1. You cannot even have 'func'

    1.2. Core dialects: builtin, func, arith, and memref.

    1.3. Think of minimalism of C, vs its standard library and (Linux's) stdlib.


### Concept Injection:
Concepts you need to add once you decide to get into it.

* The "Before":
MLIR is good for making dialects, new targets, and vectorisation.

   * Enter TableGen. (See below for steps/knowhow)

### Steps, hand on:

Get your hands dirty: 🫵🤌🫰🤜: 🪚 🧱
1. **Set up** the environment & project: (may take a few days!)
Build, setup, installation, compilation, project setup, tools, configuration, and a sample code: Everything can be found in my experiment below:
* https://github.com/sohale/gpu-experimentations/blob/main/experiments/7_mlir/in-mlir.bash
* https://github.com/sohale/gpu-experimentations/blob/main/experiments/7_mlir/tablegen-example-1/run_build.bash
* The whole "experiment" project: [experiments/7_mlir](https://github.com/sohale/gpu-experimentations/tree/main/experiments/7_mlir)

2. Enter TableGen:
Make a tutorial on TablGen. [project: tablegen-example-1](https://github.com/sohale/gpu-experimentations/tree/main/experiments/7_mlir/tablegen-example-1)

3. Enter ...
