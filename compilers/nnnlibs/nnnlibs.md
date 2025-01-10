# Numerical & Neural Networks Performance Frameworks and libraries

Libraries and Frameworks that enhance numerical programming in specific or general purpose (mostlymatrices) or special purposes (Neural Networks & AI) for CPU, GPU, xPU (NPU, TPU, DPU), various specific or gneral architectures, and usually centered around linear algebra and matrix computing, and probabilistic programming

Key example: JAX

Key aspects:
* dependency (repliance), timeline, company

Key questions:
* What relies on what (Tensorflow is an engine? or does it reply on ...)
* OpenVINO has been around?
    * Their Timeline
    * Surprises about old packages keep happening: VTM, OpenVINO are surprisingly old


```mermaid
timeline
        title Numerical & Matrix calculaiton Frameworks
        section 2020s D <br> Release Personal Tier
          Bullet 1 : sub-point 1a : sub-point 1b
               : sub-point 1c
          Bullet 2 : sub-point 2a : sub-point 2b
        section 2015+ D <br> Release XYZ Tier
          Bullet 3 : sub-point <br> 3a : sub-point 3b
               : sub-point 3c
          Bullet 4 : sub-point 4a : sub-point 4b
        section 2010-2014 D <br> Release XYZ Tier
        section 2008-2010 D <br> Release XYZ Tier
        section 2000-2007 D <br> Release XYZ Tier
        # section 1990s D <br> Release XYZ Tier
        # section 1980s D <br> Release XYZ Tier
        section Pre-2000s D <br> Release XYZ Tier
          Bullet 1 : sub-point 1a : sub-point 1b
               : sub-point 1c
```

### Table 1

| lib.             | Year  | OSS          | c.   | Target            | Supported       | feat.         | depn.                | diff.                              |
|------------------|-------|--------------|--------|------------------|----------------|---------------|----------------------|-------------------------------------|
| Triton           | 2021  | ✔            | ❁     | 🟢𝔾               | 🟢𝔾               | 🧠 🔧          | CUDA                 | Optimized for GPUs                  |
| IREE             | 2019  | ✔            | 🅶     | 🟢𝔾 ⚪️c           | 🟢𝔾 ⚪️c 🟠js      | 🔧            | MLIR, TensorFlow     | Focus on deployment on various hardware|
| MLIR             | 2019  | ✔            | 🅶     | 🟢𝔾 🟤. ⚪️c      | 🟢𝔾 🟤. ⚪️c 🟠js  | 🔧            | -                    | Not tied to any specific framework  |
| JAX              | 2018  | ✔            | 🅶     | 🟢𝔾 🟤. ⚪️c      | 🟢𝔾 🟤. ⚪️c 🟠js  | 🏂 🔢𝕄 🧠          | NumPy, XLA           | Focuses on composable function transformations|
| OpenVINO         | 2018  | ✔            | ℹ️    | ⚪️c 🟢𝔾           | ⚪️c 🟢𝔾 🟠js      | 🧠 🔧          | TensorFlow, ONNX     | Optimized for Intel hardware        |
| TensorFlow JS    | 2018  | ✔            | 🅶     | 🟠js              | 🟠js              | 🧠              | TensorFlow           | TensorFlow for JavaScript           |
| TF Probability   | 2018  | ✔            | 🅶     | 🟢𝔾 🟤. ⚪️c      | 🟢𝔾 🟤. ⚪️c 🟠js  | 🏂 🎲𝒫         | TensorFlow           | Extension for probabilistic programming|
| OpenXLA          | 2017  | ✔            | 🅶     | 🟢𝔾 🟤. ⚪️c      | 🟢𝔾 🟤. ⚪️c 🟠js  | 🔧            | XLA, StableHLO, IREE | Unified compiler ecosystem for ML   |
| XLA              | 2017  | 2022         | 🅶     | 🟢𝔾 🟤. ⚪️c      | 🟢𝔾 🟤. ⚪️c       | 🏂 🔧            | TensorFlow, JAX      | TensorFlow's compiler backend       |
| ONNX             | 2017  | ✔            | 🅻     | 🟢𝔾 ⚪️c           | 🟢𝔾 ⚪️c 🟠js      | 🏂 🔧          | -                    | Model exchange format between frameworks|
| PyTorch          | 2016  | ✔            | 𝐹     | 🟢𝔾 ⚪️c           | 🟢𝔾 ⚪️c 🟠js      | 🧠 🏂 🔢𝕄         | NumPy                | Dynamic vs. static computation graph|
| TensorFlow       | 2015  | 2015         | 🅶     | 🟢𝔾 🟤. ⚪️c      | 🟢𝔾 🟤. ⚪️c 🟠js  | 🧠 🏂 🔢𝕄         | NumPy, Keras, XLA    | TensorFlow 2 has eager execution    |
| cuDNN            | 2014  | -            | 🅽     | 🟢𝔾               | 🟢𝔾               | 🧠 🔧          | CUDA                 | Optimized for NVIDIA GPUs           |
| cuBLAS           | 2010  | -            | 🅽     | 🟢𝔾               | 🟢𝔾               | 🔢𝕄 🔧         | CUDA                 | Optimized for NVIDIA GPUs           |
| BLAS             | 1979  | -            | 👀     | ⚪️c               | ⚪️c 🟠js          | 🔢𝕄            | -                    | -                                   |
| GEMMA            | -     | -            | 🅽     | 🟢𝔾 ⚪️c           | 🟢𝔾 ⚪️c 🟠js      | 🔢𝕄            | -                    | -            
| GEMM             | -     | -            | 🅽     | 🟢𝔾 ⚪️c           | 🟢𝔾 ⚪️c 🟠js      | 🔢𝕄            | -                    | General Matrix Multiplication       |

### Legend:
- **🅶**: Google
- **𝐹**: Meta (Facebook)
- **ℹ️**: Intel
- **🅻**: Linux Foundation 🐧
- **🅽**: NVIDIA
- **❁**: OpenAI
- **👀**: Open Source
- **✔**: Open-source from inception
- **🟢𝔾**: GPU
- **🟤.**: TPU
- **⚪️c**: CPU
- **🟠js**: JavaScript
- **🧠**: Neural networks
- **🔢𝕄**: Matrix operations
- **🏂**: Auto-differentiation (Differential Programming)
- **🔧**: Compiler or JIT
- **🎲𝒫**: Probabilistic programming

### Headings Legend:
- **lib.**: Framework/Library
- **Year**: Year the project started
- **👀 OSS **: Open-Source
- **c.**: Company
- **Target**: Target Platform originally intended
- **Supported**: Supported Platforms later added
- **feat.**: Features
- **depn.**: Dependencies
- **diff.**: Differences

### Table 2

| lib.             | Year  | OSS  | dis. | c.   | feat.         | Target        | Supported                | depn.                | Special Platforms                     | diff.                              |
|------------------|-------|------|------|------|---------------|--------------|--------------------------|----------------------|---------------------------------------|------------------------------------|
| Modular          | 2023  | ✔    | -    | 🔥   | 🔧 🧠        | 🟢𝔾 🟤T     | intel, arm, R5           | Custom compiler, Python | OpenCL                               | High-performance ML and Python-like programming |
| OpenXLA          | 2022  | ✔    | -    | 👀   | 🔧           | 🟢𝔾 🟤T     | intel, arm, R5           | TensorFlow, PyTorch, JAX | Vulkan                               | Unified compiler ecosystem for ML   |
| Triton           | 2021  | ✔    | -    | ❁   | 🔧 🧠        | 🟢𝔾 🟤T     | NVIDIA                   | CUDA                  | N/A                                  | Optimized for GPUs                  |
| Modulus          | 2021  | -    | -    | 🅽   | 🧠           | 🟢𝔾 🟤T     | NVIDIA                   | CUDA                  | N/A                                  | Physics-based NN                    |
| DeepSpeed        | 2020  | ✔    | -    | 🅼   | 🧠           | 🟢𝔾 🟤T     | NVIDIA                   | PyTorch               | ROCm                                 | Large-scale model training          |
| IREE             | 2019  | ✔    | -    | 👀   | 🔧           | 🟢𝔾 🟤T     | intel, arm, R5           | TensorFlow, ML frameworks | Vulkan, OpenCL                       | ML compilation & runtime; focus on deployment on various hardware |
| MLIR             | 2019  | ✔    | -    | 🅶   | 🔧           | 🟢𝔾 🟤T     | intel, arm, R5           | -                    | Vulkan, OpenCL                       | Not tied to any specific framework  |
| JAX              | 2018  | ✔    | -    | 🅶   | 🏂 🔢        | 🟢𝔾 🟤T     | intel, arm, R5           | NumPy, XLA            | OpenCL, Vulkan                       | Composable function transformations; NN, autodiff, matrix ops |
| OpenVINO         | 2018  | ✔    | -    | ℹ️   | 🔧 🧠        | 🟢𝔾 🟤T     | intel                    | Intel hardware        | OpenCL                               | Optimized for Intel hardware; inference framework |
| TensorFlow JS    | 2018  | ✔    | -    | 🅶   | 🧠           | 🟠js         | Browser                  | TensorFlow            | JS                                   | TensorFlow for JavaScript; ML in-browser, training & inference |
| TF Probability   | 2018  | ✔    | -    | 🅶   | 🏂 🎲        | 🟢𝔾 🟤T     | intel, arm, R5           | TensorFlow            | N/A                                  | Extension for probabilistic programming |
| XLA              | 2017  | 2022 | -    | 🅶   | 🔧 🏂        | 🟢𝔾 🟤T     | intel, arm, R5           | TensorFlow, JAX       | Vulkan                               | TensorFlow's compiler backend       |
| ONNX             | 2017  | ✔    | -    | 🐧   | 🔧           | 🟢𝔾 🟤T     | intel, arm, R5           | -                    | N/A                                  | Model exchange format between frameworks |
| Caffe2           | 2017  | ✔    | 2020  | 𝐹   | 🧠           | 🟢𝔾 🟤T     | intel, arm, R5           | PyTorch               | ROCm                                 | Production-ready deployment         |
| PyTorch          | 2016  | ✔    | -    | 𝐹   | 🧠 🏂        | 🟢𝔾 🟤T     | intel, arm, R5           | NumPy, cuDNN, cuBLAS  | ROCm, Vulkan                         | Dynamic vs. static computation graph; NN, autodiff, matrix ops |
| PaddlePaddle     | 2016  | ✔    | -    | 🐾   | 🧠           | 🟢𝔾 🟤T     | intel, arm               | Python                | OpenCL                               | Comprehensive DL framework          |
| TensorFlow       | 2015  | 2015 | -    | 🅶   | 🏂 🔢 🧠     | 🟢𝔾 🟤T     | intel, arm, R5           | Keras, NumPy, XLA     | OpenCL, Vulkan, JS                   | TensorFlow 2 has eager execution; NN, autodiff, matrix ops, prob. programming |
| Keras            | 2015  | ✔    | -    | 🅶   | 🧠           | 🟢𝔾 🟤T     | intel, arm, R5           | TensorFlow, Theano    | OpenCL                               | High-level NN API                   |
| Apache MXNet     | 2015  | ✔    | -    | 🐧   | 🧠           | 🟢𝔾 🟤T     | intel, arm, R5           | Multi-lang support    | OpenCL                               | Scalable, flexible DL               |
| cuDNN            | 2014  | -    | -    | 🅽   | 🔧 🧠        | 🟢𝔾 🟤T     | -                       | CUDA                  | N/A                                  | GPU-accelerated deep NN             |
| Caffe            | 2013  | ✔    | 2017  | 👀   | 🧠           | 🟢𝔾 🟤T     | intel, arm               | NumPy, OpenCV         | OpenCL                               | Image processing, DL                |
| Theano           | 2007  | 2008 | 2017  | 👀   | 🔢 🧠        | 🟢𝔾 🟤T     | intel, arm, R5           | -                     | OpenCL                               | Symbolic computation, pioneering DL |
| cuBLAS           | 2007  | -    | -    | 🅽   | 🔧 🔢        | 🟢𝔾 🟤T     | -                       | CUDA                  | N/A                                  | GPU-accelerated linear algebra      |
| GEMM             | -     | -    | -    | 🅽   | 🔢           | 🟢𝔾 🟤T     | intel, arm, R5           | -                    | N/A                                  | General Matrix Multiplication       |
| Torch            | 2002  | 2002 | 2018  | 👀   | 🔢 🧠        | 🟢𝔾 🟤T     | intel, arm               | Lua, NumPy            | N/A                                  | Early DL framework with Lua         |
| BLAS             | 1979  | -    | -    | 👀   | 🔢           | ⚪️c         | intel, arm               | -                    | N/A                                  | Foundational linear algebra library |

### Legend:
- **🅼**: Microsoft
- **ℹ️**: Intel
- **🅽**: NVIDIA
- **❁**: OpenAI
- **🔥**: Modular AI
- **🅶**: Google
- **𝐹**: Meta (Facebook)
- **🐧**: Linux Foundation
- **🐾**: Baidu
- **👀**: Independent Open Source

### Headings Legend:
- **lib.**: Framework/Library
- **Year**: Year the project started
- **OSS**: Open-Source (✔ if from inception, year otherwise)
- **dis.**: Discontinued in year (`Discont.?`). Indicates whether the project is discontinued (Year if discontinued, `-` if active)
- **c.**: Supporting Company
- **feat.**: Features (symbols only, e.g., 🔧, 🧠, etc.)
- **Target**: Target Platform (symbolic labels: GPU, TPU, NPU, etc.)
- **Supported**: Additional supported platforms (text descriptions of hardware like Intel, ARM, RISC-V)
- **depn.**: Dependencies (required or optional libraries/frameworks)
- **Special Platforms**: Unique or notable supported platforms (e.g., Vulkan, OpenCL, JS)
- **diff.**: Differences and special-purpose features (textual descriptions of unique aspects)




### Pool:
* ONNX
* Triton
* OpenVINO
* JAX
* IREE
* MLIR itself (not LLVM)
* Tensorflow (especially linear algebra)
    * TFJS
* Tensorflow Probbility Distributions
* PyTorch
* GEMMS
* cuX (various)

CPU Numerical / matrix: (Numpy-extensons)
* Numpy

#### Also see overlapping lists: (mention JAX)
* https://github.com/sohale/cs-glossaries/blob/f250c3531b84a80e0c147cb43aa3de96c1009318/probabilistic-programming/probabilistic-programming.md?plain=1#L45
* https://github.com/sohale/cs-glossaries/blob/f250c3531b84a80e0c147cb43aa3de96c1009318/python/high-performance-python.md?plain=1#L5
