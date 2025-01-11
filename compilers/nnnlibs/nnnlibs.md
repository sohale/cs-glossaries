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
| Modular          | 2023  | ✔    | -    | 🔥   | 🔧 🧠        | 🟢𝔾 🟤     | intel, arm, R5           | Custom compiler, Python | OpenCL                               | High-performance ML and Python-like programming |
| OpenXLA          | 2022  | ✔    | -    | 👀   | 🔧           | 🟢𝔾 🟤     | intel, arm, R5           | TensorFlow, PyTorch, JAX | Vulkan                               | Unified compiler ecosystem for ML   |
| Triton           | 2021  | ✔    | -    | ❁   | 🔧 🧠        | 🟢𝔾 🟤     | NVIDIA                   | CUDA                  | CUDA                                | Optimized for GPUs                  |
| Modulus          | 2021  | -    | -    | 🅽   | 🧠           | 🟢𝔾 🟤     | NVIDIA                   | CUDA                  | CUDA                               | Physics-based NN                    |
| DeepSpeed        | 2020  | ✔    | -    | 🅼   | 🧠           | 🟢𝔾 🟤     | NVIDIA                   | PyTorch               | ROCm                                 | Large-scale model training          |
| IREE             | 2019  | ✔    | -    | 👀   | 🔧           | 🟢𝔾 🟤     | intel, arm, R5           | TensorFlow, ML frameworks | Vulkan, OpenCL                       | ML compilation & runtime; focus on deployment on various hardware |
| MLIR             | 2019  | ✔    | -    | 🅶   | 🔧           | 🟢𝔾 🟤     | intel, arm, R5           | - (LLVM)             | Vulkan, OpenCL                       | Not tied to any specific framework  |
| JAX              | 2018  | ✔    | -    | 🅶   | 🏂 🔢        | 🟢𝔾 🟤     | intel, arm, R5           | NumPy, XLA            | OpenCL, Vulkan                       | Composable function transformations; NN, autodiff, matrix ops |
| OpenVINO         | 2018  | ✔    | -    | ℹ️   | 🔧 🧠        | 🟢𝔾 🟤     | intel                    | Intel hardware        | OpenCL                               | Optimized for Intel hardware; inference framework |
| TensorFlow JS    | 2018  | ✔    | -    | 🅶   | 🧠           | 🟠js         | Browser                  | TensorFlow            | JS                                | TensorFlow for JavaScript; ML in-browser, training & inference |
| TF Probability   | 2018  | ✔    | -    | 🅶   | 🏂 🎲        | 🟢𝔾 🟤     | intel, arm, R5           | TensorFlow            | CUDA, CPU                             | Extension for probabilistic programming |
| XLA              | 2017  | 2022 | -    | 🅶   | 🔧 🏂        | 🟢𝔾 🟤     | intel, arm, R5           | TensorFlow, JAX       | Vulkan , CUDA, etc?                  | TensorFlow's compiler backend       |
| ONNX             | 2017  | ✔    | -    | 🐧   | 🔧           | 🟢𝔾 🟤     | intel, arm, R5           | -                    | N/A                                  | Model exchange format between frameworks |
| Caffe2           | 2017  | ✔    | 2020  | 𝐹   | 🧠           | 🟢𝔾 🟤     | intel, arm, R5           | PyTorch               | ROCm                                 | Production-ready deployment         |
| PyTorch          | 2016  | ✔    | -    | 𝐹   | 🧠 🏂        | 🟢𝔾 🟤     | intel, arm, R5           | NumPy, cuDNN, cuBLAS  | ROCm, Vulkan                         | Dynamic vs. static computation graph; NN, autodiff, matrix ops |
| PaddlePaddle     | 2016  | ✔    | -    | 🐾   | 🧠           | 🟢𝔾 🟤     | intel, arm               | Python                | OpenCL                               | Comprehensive DL framework          |
| TensorFlow       | 2015  | 2015 | -    | 🅶   | 🏂 🔢 🧠     | 🟢𝔾 🟤     | intel, arm, R5           | Keras, NumPy, XLA     | OpenCL, Vulkan, JS                   | TensorFlow 2 has eager execution; NN, autodiff, matrix ops, prob. programming |
| Keras            | 2015  | ✔    | -    | 🅶   | 🧠           | 🟢𝔾 🟤     | intel, arm, R5           | TensorFlow, Theano    | OpenCL                               | High-level NN API                   |
| Apache MXNet     | 2015  | ✔    | -    | 🐧   | 🧠           | 🟢𝔾 🟤     | intel, arm, R5           | Multi-lang support    | OpenCL                               | Scalable, flexible DL               |
| cuDNN            | 2014  | -    | -    | 🅽   | 🔧 🧠        | 🟢𝔾 🟤     | -                       | CUDA                  | N/A                                  | GPU-accelerated deep NN             |
| Caffe            | 2013  | ✔    | 2017  | 👀   | 🧠           | 🟢𝔾 🟤     | intel, arm               | NumPy, OpenCV         | OpenCL                               | DL, Vision, OpenVC, by BVLC, BAIR |
| [Intel Caffe](2)            |       |      |       |     |             | 🟢𝔾 🟤     |                     |                   |                                    | Optimized for CPU and support for multi-node), in particular Intel® Xeon processors.    |
| [OpenCL Caffe](3)            |       |      |       |     |             | 🟢𝔾 🟤     |                     |                   |                                    | e.g. for AMD or Intel devices    |
| Theano           | 2007  | 2008 | 2017  | 👀   | 🔢 🧠        | 🟢𝔾 🟤     | intel, arm, R5           | [OpenCL](1)                | OpenCL                               | Symbolic computation, pioneering DL |
| cuBLAS           | 2007  | -    | -    | 🅽   | 🔧 🔢        | 🟢𝔾 🟤     | -                       | CUDA                  | N/A                                  | GPU-accelerated linear algebra      |
| GEMM             | -     | -    | -    | 🅽   | 🔢           | 🟢𝔾 🟤     | intel, arm, R5           | -                    | N/A                                  | General Matrix Multiplication       |
| Torch            | 2002  | 2002 | 2018  | 👀   | 🔢 🧠        | 🟢𝔾 🟤     | intel, arm               | Lua, NumPy , CUDA?           | N/A                                  | Early DL framework with Lua         |
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

[1]: https://stackoverflow.com/questions/38134951/theano-for-gpu-without-use-of-cuda-or-using-a-cuda-workaround
[2]: https://github.com/BVLC/caffe/tree/intel  via https://github.com/BVLC/caffe
[3]: https://github.com/BVLC/caffe/tree/opencl via https://github.com/BVLC/caffe

### Table 3: Inference-only vs. Training
Differentiation and Training Support Table

| Framework  | Differentiation | DL Training | Inference-only? |
|------------|------------------|-------------|----|
| IREE       | No               | ✘           | ✔                |
| Modular    | Yes              | ✔           |                 |
| XLA        | Yes              | ✔           |                 |
| ONNX       | No               | ✘           | ✔                |
| MXNet      | Yes              | ✔           |                 |
| Theano     | Yes              | ✔           |                 |

### Table 3: Inference-only vs. Training
Differentiation and Training Support Table

| Framework       | Differentiation | DL Training | Inference-only? |
|-----------------|------------------|-------------|------------------|
| **Modular**     | Yes              | ✔           |                  |
| *OpenXLA*       | No               | ✘           | ✔                |
| **Triton**      | Yes              | ✔           |                  |
| *Modulus*       | No               | ✘           | ✔  (wrong?)      |
| **DeepSpeed**   | Yes              | ✔           |                  |
| *IREE*          | No               | ✘           | ✔                |
| *TVM*           | No               | ✘           | ✔                |
| *MLIR*          | No               | ✘           | ✔                |
| **JAX**         | Yes              | ✔           |                  |
| *OpenVINO*      | No               | ✘           | ✔                |
| *TensorFlow JS* | No               | ✘           | ✔                |
| **TF Probability** | Yes           | ✔           |                  |
| **XLA**         | Yes              | ✔           |                  |
| *ONNX*          | No               | ✘           | ✔                |
| **Caffe2**      | No               | ✔           |                  |
| **PyTorch**     | Yes              | ✔           |                  |
| **PaddlePaddle** | Yes             | ✔           |                  |
| **TensorFlow**  | Yes              | ✔           |                  |
| **Keras**       | Yes              | ✔           |                  |
| **Apache MXNet** | Yes             | ✔           |                  |
| *cuDNN*         | No               | ✘           | ✔                |
| *Caffe*         | No               | ✘           | ✔                |
| **Theano**      | Yes              | ✔           |                  |
| *cuBLAS*        | No               | ✘           | ✔   not DL       |
| *GEMM*          | No               | ✘           | ✔                |
| **Torch**       | No               | ✔           |                  |
| *BLAS*          | No               | ✘           | ✔   not DL       |



### Model zoos for each framework
No model zoo for: Theano? XLA
Python files are not models. I use `·`, but you can save model, etc (tensorboard, etc)
#### Model Zoos for Each Framework
No model zoo for: Theano, XLA  
Python files are not models. I use `·`, but you can save model, etc (tensorboard, etc).

| Framework       | Model File Format(s)                | HuggingFace? | Model Zoo              |
|-----------------|-------------------------------------|--------------|------------------------|
| **Modular**     | `.modular`, ONNX (planned)          | No           | No                     |
| *OpenXLA*       | None                                | No           | No                     |
| **Triton**      | Python scripts                      | No           | No                     |
| *Modulus*       | `.mod`                              | No           | Yes (NVIDIA NGC)       |
| **DeepSpeed**   | `.pt`, JSON                         | No           | Yes (DeepSpeed Model Zoo) |
| *IREE*          | VMFB (IREE Module)                  | No           | No                     |
| *TVM*           | `.tvm`                              | No           | No                     |
| **JAX**         | `.npz`, `.pkl`, ONNX (via exporters)| No           | No                     |
| *OpenVINO*      | `.xml`, `.bin`                      | No           | Yes (OpenVINO Toolkit) |
| *TensorFlow JS* | JSON                                | No           | No                     |
| **TF Probability** | `.pb`, `.ckpt`, `.out`, TensorBoard | No           | No                     |
| **XLA**         | None                                | No           | No                     |
| *ONNX*          | `.onnx`                             | Yes          | Yes (ONNX Model Zoo)   |
| **Caffe2**      | `.pb`, `.caffemodel`                | No           | No                     |
| **PyTorch**     | `.pt`, `.pth`                       | Yes          | Yes (TorchHub, HuggingFace) |
| **PaddlePaddle** | `.pdmodel`, `.pdparams`            | No           | Yes (PaddleHub)        |
| **TensorFlow**  | `.pb`, `.ckpt`, `.tflite`, TensorBoard | Yes          | Yes (TF Hub, HuggingFace) |
| **Keras**       | `.h5`, `.json`, TensorBoard         | Yes          | Yes (TF Hub)           |
| **Apache MXNet** | `.params`, `.json`                 | No           | No                     |
| *Caffe*         | `.prototxt`, `.caffemodel`          | No           | No                     |
| **Torch**       | `.t7`                               | No           | No                     |
| **scikit-learn** (scipy/numpy) | `.pkl`, `.joblib`    | No           | No                     |



[4]: Tensorboard file format: via https://stackoverflow.com/questions/37304461/tensorflow-importing-data-from-a-tensorboard-tfevent-file
[5]: https://stackoverflow.com/questions/61116190/what-are-all-the-formats-to-save-machine-learning-model-in-scikit-learn-keras


#### Table 6: Model Zoos:

##### Table: Model Zoos and Supported Frameworks

| Model Zoo            | Supported Frameworks                  | File Format(s)                       | URL                                     |
|-----------------------|---------------------------------------|---------------------------------------|-----------------------------------------|
| NVIDIA NGC           | Modulus, PyTorch                     | `.mod`, `.pt`, `.pth`                | [NVIDIA NGC](https://ngc.nvidia.com/)   |
| DeepSpeed Model Zoo   | DeepSpeed, PyTorch                   | `.pt`, JSON                          | [DeepSpeed Model Zoo](https://github.com/microsoft/DeepSpeedExamples) |
| OpenVINO Toolkit      | OpenVINO                             | `.xml`, `.bin`                       | [OpenVINO Toolkit](https://www.intel.com/content/www/us/en/developer/tools/openvino-toolkit.html) |
| ONNX Model Zoo        | ONNX                                 | `.onnx`                              | [ONNX Model Zoo](https://github.com/onnx/models) |
| TorchHub             | PyTorch                              | `.pt`, `.pth`                        | [TorchHub](https://pytorch.org/hub/)    |
| PaddleHub            | PaddlePaddle                         | `.pdmodel`, `.pdparams`              | [PaddleHub](https://www.paddlepaddle.org.cn/hub) |
| TensorFlow Hub       | TensorFlow, Keras, TF Probability     | `.pb`, `.ckpt`, `.tflite`, `.h5`     | [TensorFlow Hub](https://www.tensorflow.org/hub) |
| HuggingFace          | PyTorch, TensorFlow, Keras           | `.pt`, `.pb`, `.h5`                  | [HuggingFace](https://huggingface.co/)  |
| Apache MXNet Zoo     | Apache MXNet                         | `.params`, `.json`                   | [MXNet Model Zoo](https://mxnet.apache.org/model_zoo/index.html) |
| TensorFlow JS Models | TensorFlow JS                        | JSON                                 | [TensorFlow JS Models](https://www.tensorflow.org/js/models) |
| Caffe Model Zoo      | Caffe                                | `.prototxt`, `.caffemodel`           | [Caffe Model Zoo](https://github.com/BVLC/caffe/wiki/Model-Zoo) |
| None                 | IREE, Modular, OpenXLA, MLIR         | None                                 | -                                       |



##### Table: Model Zoos, Supported Frameworks, and File Formats

| Model Zoo             | Frameworks Supported                  | File Formats                          | URL                                   | Textual URL                          |
|------------------------|---------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|
| TorchHub              | PyTorch                               | `.pt`, `.pth`                         | [TorchHub](https://pytorch.org/hub/)  | https://pytorch.org/hub/             |
| TF Hub                | TensorFlow, Keras                    | `.pb`, `.ckpt`, `.tflite`, `.h5`      | [TF Hub](https://www.tensorflow.org/hub/) | https://www.tensorflow.org/hub/      |
| ONNX Model Zoo        | ONNX                                  | `.onnx`                               | [ONNX Model Zoo](https://github.com/onnx/models) | https://github.com/onnx/models       |
| PaddleHub             | PaddlePaddle                         | `.pdmodel`, `.pdparams`               | [PaddleHub](https://www.paddlepaddle.org.cn/hub) | https://www.paddlepaddle.org.cn/hub  |
| DeepSpeed Model Zoo   | DeepSpeed                            | `.pt`, JSON                           | [DeepSpeed Model Zoo](https://www.deepspeed.ai/modelzoo/) | https://www.deepspeed.ai/modelzoo/   |
| NVIDIA NGC            | Modulus, PyTorch, TensorFlow, ONNX   | `.mod`, `.pt`, `.onnx`, `.pb`         | [NVIDIA NGC](https://catalog.ngc.nvidia.com/) | https://catalog.ngc.nvidia.com/      |
| OpenVINO Toolkit      | OpenVINO                             | `.xml`, `.bin`                        | [OpenVINO Toolkit](https://docs.openvino.ai/latest/) | https://docs.openvino.ai/latest/     |
| HuggingFace Model Hub | PyTorch, TensorFlow, Keras, ONNX     | `.pt`, `.pb`, `.onnx`, `.h5`          | [HuggingFace Model Hub](https://huggingface.co/models) | https://huggingface.co/models        |
| None                  | IREE, Modular, OpenXLA, MLIR         | None                                  | -                                     | -                                    |

---

##### Notes: (Legend)
1. **TorchHub**: PyTorch-specific model repository.
2. **TF Hub**: TensorFlow and Keras pre-trained models, often in TensorFlow file formats.
3. **ONNX Model Zoo**: A library of ONNX pre-trained models compatible with multiple frameworks.
4. **PaddleHub**: PaddlePaddle's model repository, optimized for its framework.
5. **DeepSpeed Model Zoo**: Focused on large-scale model training with DeepSpeed.
6. **NVIDIA NGC**: Hosts models for various NVIDIA-supported frameworks like Modulus, PyTorch, and TensorFlow.
7. **OpenVINO Toolkit**: Contains optimized models for Intel hardware.
8. **HuggingFace Model Hub**: A unified platform for PyTorch, TensorFlow, and ONNX models.


### Model file formats
(for model repositories, model zoo s, kernel zoo(!)s, etc)

File Formats for Frameworks

| File Format       | gs | Framework(s)           | Description                                                                                     | Notes                          |
|-------------------|--------|------------------------|-------------------------------------------------------------------------------------------------|-------------------------------|
| `.pt`            | s      | PyTorch,<br> DeepSpeed,<br> HuggingFace | PyTorch model file format for saving the state dictionary of a model.                         | Common for training models.   |
| `.pth`           | s      | PyTorch                | Similar to `.pt`, typically used for saving checkpoints during training.                       | May include optimizers.       |
| `.modular`       | gs     | Modular                | Native Modular AI file format.                                                                | High-performance ML files.    |
| `.mod`           | gs     | Modulus                | Native NVIDIA Modulus format for ML models.                                                   | Specific to Modulus models.   |
| `.pb`            | g      | TensorFlow,<br>  ONNX,<br>  HuggingFace | Protocol Buffers used for TensorFlow saved models.                                             | Serialized model format.      |
| `.ckpt`          | s      | TensorFlow             | Checkpoint files for TensorFlow models.                                                       | Contains model weights only.  |
| `.tflite`        | s      | TensorFlow,<br>  HuggingFace | TensorFlow Lite file format optimized for mobile and edge devices.                            | For inference only.           |
| `.h5`            | gs     | Keras,<br> TensorFlow,<br>  HuggingFace | HDF5 format used for storing Keras models.                                                    | Includes architecture and weights. |
| `.onnx`          | gs     | ONNX,<br> HuggingFace      | Open Neural Network Exchange format for interoperability.                                      | Widely supported for export.  |
| `.pdmodel`       | g      | PaddlePaddle           | PaddlePaddle's format for model architecture.                                                 | Part of a pair with `.pdparams`. |
| `.pdparams`      | s      | PaddlePaddle           | PaddlePaddle's format for model parameters (weights).                                         | Part of a pair with `.pdmodel`. |
| `.xml` (OpenVINO)| g      | OpenVINO               | Model definition file used in OpenVINO.                                                       | Paired with `.bin`.           |
| `.bin`           | s      | OpenVINO,<br> HuggingFace  | Binary file containing weights for OpenVINO and Hugging Face Transformers models.             | Paired with `.xml`.           |
| `.json`          | g      | TF JS,<br> TVM,<br> HuggingFace | JavaScript Object Notation for TensorFlow JS models and Hugging Face Transformers metadata.   | Used for in-browser models.   |
| `.prototxt`      | g      | Caffe                  | Text file defining the architecture of a Caffe model.                                         | Paired with `.caffemodel`.    |
| `.caffemodel`    | s      | Caffe                  | Binary file containing trained weights for Caffe models.                                      | Paired with `.prototxt`.      |
| `.params`        | s      | Apache MXNet           | MXNet's format for model parameters.                                                          | Paired with `.json`.          |
| `.t7`            | gs     | Torch                  | Torch's file format for saving models in Lua.                                                 | Deprecated.                   |
| `.out`           | g      | TensorFlow             | Textual or binary representation of saved TensorFlow models.                                  | Less commonly used.           |
| `.joblib`        | s      | scikit-learn           | Python-based serialization format for scikit-learn models.                                    | Efficient for saving models.  |
| `.pkl`           | s      | scikit-learn,<br> JAX,<br> HuggingFace | Pickle format for saving Python objects, including models.                                    | General-purpose format.       |
| `VMFB`           | s      | IREE                   | Virtual Machine Flatbuffer for compiled IREE models.                                          | For deployment only.          |
| `.tvm`           | gs     | TVM                    | Native TVM model format.                                                                      | For optimized inference.      |

---

##### Notes:

- **`gs`**:  
  - `g`: Graph-only format.  
  - `s`: State-only format.  
  - `gs`: Contains both graph and state.  
- **`.pt` vs `.pth`**: While both are used in PyTorch, `.pth` is often associated with checkpoints, while `.pt` is more general-purpose for model saving.
- **XMLs**: OpenVINO uses `.xml` for defining model architecture and `.bin` for the corresponding weights.
- **Grouped Extensions**: Formats like `.pdmodel` and `.pdparams` are split into separate rows as they serve distinct purposes.
- **Hugging Face**: Supports `.pt`, `.pb`, `.onnx`, `.h5`, `.bin`, and `.json` for models and metadata.
---


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
