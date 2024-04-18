# The Path to Compiler


Lessons I learned about how to make the path and the journey of transition to compiler engineer.

### Characterising Targets
#### Three paths/streams:
* C++ compilers ( gcc, clang )
* GPU compilation ( MLIR, etc )
* DL frameworks: XLA, TF, etc

#### ... focus:
* clang + LLVM -- Developer of 
* MLIR + LLVM -- ...
* CUDA + GPU tuning (PTX, CUDA, etc) -- Writer of kernels
* CGO + LLVM

#### Target teams:
* gcc/LLVM teams
   * (open-source contribution) ( MS, intel, google, etc)
   * proprietary products (MS, etc)
* DL accelerators: training ( ???, Unify, etc)
* DL accelerators: inference (Axelera, etc)
* DL companies: training ( OpenAI, DeepMind, ... )
* DL companies: inference ( TVM )
* AV companies ( Waymo, Oxa, etc)
* Semiconductor companies (NVidia, Qualcomm, intel, )
* Graphics (Vulkan drivers, 3D, Neural Radiance Fields)
* Lame GPU: (compute shaders, OpenGL for compute, OpenCL, etc) -- backwards facing

#### Skills (SME):
* Writing compiler optimisations
* Knowing clang / gcc well
* Dialects (Knowing MLIR / LLVM architecture well)
* Training
* Knowing specific repos:
   * TVM
   * Triton
   * Tensorflow or XLA (or TF ecosystem)
   * individual MLIR dialects
   * PyTorch ecosystem

#### Get to do these specific things:
* Write a compiler that gets a code and generates some LLVM ("Did you ...?")
* Parse something with ANTLR4

#### Means:
* Write a Project
* Open-source contribution
* Reading (source code, book, videos, courses, papers)
* Attending (conferences)
* Meeting / conversation with people
* Do a Post Doc.
* Use these in a paper (circular stats, etc)

## The How

* Key positive feedbacks:
   * Learn C++ (already ok)
   * MLIR is important, yes

#### Learned lessons: experiences
Key observations / experiences.
Times where I experienced acceleration

* Try directly coding in LLVM

* Try directly coding in PTX
   * Exposed me directly to many things

* Read Clang source code 🔥🔥🔥🔥
   * Also helps with itself
   * "Symbol table"

* Attended ACM CGO 🔥

* Unverified:
   * Open-source contribution to
      * XLA
      * MLIR dialect: xyz
      * TVM (no)
      * Triton (not sure)

#### Sources that accelerate
* NVidia's PDF on H100 (link here)
    * Also the CUDA (C++) manual
    * But the other one (that contained PTX) was much better

* Clang source code (verified)

* Lean4 source code

* (The Dragon book) (not verified)

* Particular videos
   * That video about CE career
   * That video for implementing Serene using LLVM

#### Useless / wasted time
Turned out to be not a good thing to do. Or not a good path / strategy, or wasted time

* Recruiters
* Some books
* TVM
* (not sure) Triton

#### Shall I?
* Modular Mojo
* Organise an event:
   * meetup
   * FEP
* .

Legend:
* 🔥 turned out to be good. Pushed me up.
* ? will be "compelling" (noteworthy)
