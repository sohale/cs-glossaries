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
      * `.td`, `myops.cpp`

### Steps, hand on:

Get your hands dirty: 🫵🤌🫰🤜: 🪚 🧱
1. **Set up** the environment & project: (may take a few days!)
Build, setup, installation, compilation, project setup, tools, configuration, and a sample code: Everything can be found in my experiment below:
* https://github.com/sohale/gpu-experimentations/blob/main/experiments/7_mlir/in-mlir.bash
* https://github.com/sohale/gpu-experimentations/blob/main/experiments/7_mlir/tablegen-example-1/run_build.bash
* The whole "experiment" project: [experiments/7_mlir](https://github.com/sohale/gpu-experimentations/tree/main/experiments/7_mlir)

2. Enter TableGen:
Make a tutorial on TablGen. [project: tablegen-example-1](https://github.com/sohale/gpu-experimentations/tree/main/experiments/7_mlir/tablegen-example-1)

* What is a `dag`?
```cpp
  class MyOp<dag operands, type resultType> : Op<"mydialect.MyOp", []> {
```
* class `type`?
* What is `[]`?
* Is this C++?

* what is `myops.td` vs `mydialect.cpp` vs `myops.cpp`? (vs `test/test.mlir`)

      * `myops.cpp.inc` and `myops.h.inc`

Why this apparent redundancy?

What is a module?

The TD world: has its own includes and dependencies and lineage:
```cpp
#include "mlir/IR/OpBase.td"
```
* What is this `"mlir/IR/OpBase.td`? Let's look at its content.s
* Where is it physically?
   * `/mlir/llvm-project/mlir/include/mlir/IR/OpBase.td`
       * Break down this path: `/mlir/llvm-project/mlir/include/mlir/IR/OpBase.td` (build vs install, output (MLIR's build's) "include" s of MLIR, etc)
   * on github: [OpBase.td](https://github.com/llvm/llvm-project/blob/main/mlir/include/mlir/IR/OpBase.td)


3. Enter ...

## MLIR Concepts Reference

#### memref

Preconception (incorrect):
I started thinking it is like C pointers (a repeated `struct` or antoher fixed-size type, where adding an integer can derive the pointer to skip (next) location in memory). But it is Not that.

##### Core statements and ideas defining it
* `memref` is not a (C-like) simple pointer. It is a full "tensor" !
     * However, MLIR has a `tensor`, which is different.
     * So, there are three concepts
* `memref` a (1) multi-dimensional array (2) stored in contiguous memory (similar to C-poointers).
*  (3) with additional metadata about shape, layout, and memory space. (surprise: It has even the shape)
* Is higher-level abstraction than raw pointers in C.

##### Table
Types are:
* C-like pointers
* MLIR `memref`
* MLIR `tensor`
* (LLVM's C-like allocated chunk(?))

##### Features:
contiguous
memory
has +i ( stride or next or `+= i`)
has shape ( not just linear)
has layout
has memory space
all allocated in one piece (not just continuous)
is allocatd by itself (like tensor, matrix), or outside (like C pointers)? (part of constructor)
    Methods for allocating belong to it, or outside?
    and deallocated by who (and explicit? and outside? and belong to it?)


#### tensor
