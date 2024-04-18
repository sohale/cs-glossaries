# The Path to Compiler


Lessons I learned about how to make the path and the journey of transition to compiler engineer.

Three paths/streams:
* C++ compilers ( gcc, clang )
* GPU compilation ( MLIR, etc )
* DL frameworks: XLA, TF, etc

... focus:
* clang + LLVM -- Developer of 
* MLIR + LLVM -- ...
* CUDA + GPU tuning (PTX, CUDA, etc) -- Writer of kernels
* CGO + LLVM

Target teams:
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

Skills (SME):
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

Means:
* Project
* Open-source contribution
* Reading (source code, book, videos, courses, papers)
* Attending (conferences)
* Meeting / conversation with people

* Learn C++

* Read Clang source code
   * Also helps with itself

