# Compilers in Age of AI, Cloud & Autonomy
<!-- of AI, AV & ML . LLM? edge (power) -->

* metanotes [^meta]
[^meta]: *  **Meta:** Four possibilities:
   A "textbook" (Aho), A tutorial book (for Floyles),  a teaching book (textbook + exercises + transcribed after the course: tech yourself, share the path, more lab than a pure textbook), a talk, a book about it (to read, be convinced, etc: less of tutorials and steps, why they need to rethink or we need to write another book, making people up to date about the recent trends. also that talk ). <sub><sup> small </sup></sub>
   <sub><sup>
   [p:cpath(w/refs)](https://github.com/sohale/proposals-cs/blob/master/compilers/compiler-path.md),
   [the-book(this)](https://github.com/sohale/cs-glossaries/blob/master/compilers/compiler-book.md),
   [the-path](https://github.com/sohale/cs-glossaries/blob/master/compilers/the-path-to-compile.md)
   </sup></sub>.
   

### Preface
While looking from fantastic shoulder of giants, in the new era,
in 2024, we need a new Compiler Design text book that is more about 2024 than 1986,
and is able to get students up to working know-how as well as an academic vision for the new era.

All of these appeared after 2006:
LLVM, MLIR
Rust, Zig, Jai, Hare, Odin, Modular Mojo, C++23, and even GoLang.
Large Language Models, transformers, deep learning.
DevOps, infrastructure as code.
Small Language Models and NN-inspired compilers.
Heterogeneous computing and heterogeneous cloud.
multi-cloud, hybrid cloud (heterogeneous)
Itanium died a thousand deaths [ref].

More modern approaches to concurrent.

C++20 is not caught up.
Javascript ...
Docker.

ownership, 

ANTLR4, 
Lean4,

Erlang, BEAM, or Elixir

virtualisation & Q.

* program model
* machine model
* memory model
* network model (or interconnect model)
* performance model


##### Preface: Timeline
A brief history of post-2006 CS/CE:
```mermaid
%%  forrest color theme
%%{init: { 'logLevel': 'debug', 'theme': 'forest' } }%%

timeline
        title Compiler Engineering post 2006 Timeline
        section Pre LLVM <br> JVM Hotspot
          Bullet 1 : sub-point 1a : sub-point 1b
               : sub-point 1c
          Bullet 2 : sub-point 2a : sub-point 2b
        section LLVM <be> ...
          Bullet 3 : sub-point <br> 3a : sub-point 3b
               : sub-point 3c
          Bullet 4 : sub-point 4a : sub-point 4b
        section SLM <be> ...
          Bullet 5 : sub-point <br> 3a : sub-point 3b
               : sub-point 3c
          Bullet 6 : sub-point 4a : sub-point 4b

```
* 1986
   * HotSpot, JIT (2011)
* 2006
* 2006 : Hotspot license?
   * ?:ajax
   * Death of Sun ?
   * ? LLVM
* 2008:
   * private cloud (2008)
   * iPhone
   * Vulkan
   * Clang: rewrite of gcc
   * Namespaces were implemented in Linux
   * Arm taking over
* 2014
   * 2014: SyCL
* 2015
   * 2015: SPIR
   * ?: MLIR
* 2023
   * Mojo

Timeline: todo: academic mainstream terms shifts (lingo) (& paradigms).
* More items: security.
* Maybe architecture?

Another attempt:
```mermaid
%%  forrest color theme
%%{init: { 'logLevel': 'debug', 'theme': 'forest' } }%%

timeline
        title Compiler Engineering Post 2005 Timeline
        section Early Developments <br> 2005 - 2010
          Rise of LLVM : late 2000s : Modular compiler approach boosts innovation
          Just-In-Time Compilation Expands : Early 2010s : Runtime optimizations for web technologies
          Security-Oriented Compiler Technologies : Early to Mid-2010s : Focus on code security enhancements
        section Expansion and Integration <br> 2011 - 2015
          Hardware-Software Co-Design : Early 2010s : Optimizing software for GPUs and FPGAs
          Polyglot Compilation Environments : Late 2000s to Early 2010s : Support for multiple languages in .NET, JVM
        section Advanced Innovations <br> 2016 - 2023
          Integration of Machine Learning in Compilers : Mid-2010s onwards : ML algorithms optimize compiler decisions
          Open Source Dominates : Late 2000s to Early 2010s : GCC, LLVM foster global collaboration
          Security Features Enhance : Mid-2010s : Implementing stack protectors, code sanitization
```

#### Lab-work
It is about craft. (But also giving academic insights & geography)
* Setup ( LLVM installation, ANTLR, MLIR, etc): all must bea ble to do it (by prepared docker containers. on university cloud? automatic removing)
* Write an ANTLR4 parser
* (Some compiler patterns)
* Design your own language (or follow the standard one)
* Write in raw LLVM (also assembly?)
* template / generative / Macro expansion / pattern matching / string matching
* AST
* control flow analysis
* Write a CGO
* Write an LTO
* Write an MLIR dialect
* Write an HDL
* Test concern
* Measure compile time (and runtime)
* Write a JIR
* A cloud-related
* A preprocessor / postprocessor/skin (JS, Golang, C++, etc)
* A syntax highlighter
* A language server
* hypothesis examination (search space)
* "register pressure" (exercise on paper)
* polyhedral magic
* ELF analysis & link (multi-)
* Core generates LLVM for a toy language
* Evaluating a CGO
* A functional / NN example
* Core classic: loop unrolling, etc


Note: This is not a course in design of programming languages
More Computer Architecture.

#### Final projects
* A language: produce LLVM
* A new optimisation pattern
* An HDL Compiler (use some synthesis & simulation tool)
* Something about Clang or gcc
* Explore internal representations of Lean4, or to reuse
* trans-piling (from one language to another)
* A DSL framework (?) -- attach ANTLR4 visitors
* Niche projects: (Quantum if they know), or specific DSLs (bioinformatics). NN/DL is a differnt topic.
* IR to something else.
* A GPU (for LLVM). Test using "GPGPU-Sim".
* Security/ vulnerability ...
* Some bug detectors. (or code smell, syntactic analyser, sanitiser(?), etc)
* Optimiser for game (OpenGL pipelline-like)
* Optimiser for physics
* Optimiser for DL training
* OpenGL to compute
* Something for Web (e.g. use GPU using WebGL, or use Emsripten, born shader, etc)
* Compressor-generator (or something like that)
* TBC.

* each, focus on one part / aspect / pass
   * symbolic, autodiff, (see Lean4 above), ...

* Pool of particular points of focus
IR: delaying the compilation to link-time 🔥 * object files store IR (the intermediate representation) 🔥

* fat object: An LTO object containing both IR and machine code is known as a 

Tools that enable quick finding of pattern matching (of control flow, etc)
