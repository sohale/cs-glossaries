## Installing JAX:

```bash
pip install jax jaxlib

python -c "import jax; print(jax.numpy.array([1, 2, 3]))"
# [1 2 3]
```

To enable GPU on JAX: (TBC)
```bash
# NOT tested
pip install -f jax jaxlib
```

## Installing OpenVINO (deprecated)
in my style.
* Decisions:
   * I use `conan`
* My sitution: I use Linux, CPU (non-GPU), intel `x86_64`.
* I already have: `conan`, `pyenv`.
    * Conan does not support NPU inference
* Key places:
   * `docs/articles_en/get-started/install-openvino/install-openvino-linux.rst`
   * `docs/articles_en/get-started/install-openvino/install-openvino-conan.rst`
   * `docs/articles_en/about-openvino/release-notes-openvino/system-requirements.rst`

* Overall steps:
    * Decisions, Check requirements
    * python
    * clone
    * apt dependencies + jax (excludes opencv, clang, etc)
    * cmake build (not conan?)
         * req: update opencv, use clang 15 (but cause warnings only on the "cmake" build if they are not there)
    * run the test
        * req: pip install pytest

Three dependencies. But the C++ itself has dependencies, which conan can help. The cmake itself needs conan, or is it vice versa?

Prepare python
```bash
pyenv install 3.12.9
python local 3.12.9
python --version
python -m venv veonv_ov
```

```bash
git clone git@github.com:openvinotoolkit/openvino.git
cd openvino
# fetch submobules: 🗝️
git submodule update --init --recursive
```

Install dependenceies: 
First, comment some python installations here
```bash
sudo bash install_build_dependencies.sh
# Install JAX
pip install jax jaxlib
# Install pytest
pip install pytest defusedxml numpy
```

```bash
# Make sure you have fetched git submodules  🗝️
cmake -DCMAKE_BUILD_TYPE=Release ..
make -j1
# check success
```

See `src/frontends/jax/src/op/reshape.cpp`

Run that test
```bash
# run test
# Make sure installed: pytest defusedxml numpy
cd /myvol/openvino/openvino/tests/layer_tests/jax_tests
export TEST_DEVICE=CPU
export JAX_TRACE_MODE=JAXPR
export
pytest test_reshape.py
```

Error:
```txt
E   ModuleNotFoundError: No module named 'openvino
```

Issue:
* `OpenCV ver.  3.0+ is not found`
* clang-15 version 15 is needed

(TBC)

## Installing OpenVINO for development


```bash

history |grep -E '151[0-9]{2}' ; history |grep -E '152[0-4][0-9]'


# MYOPENVINO -> MYVINO
export MYVINO="/dataneura/openvino/openvino"


# chwon $USER:$USER  /dataneura/openvino
pyenv update
pyenv install --list
pyenv install 3.13.1
cd /dataneura/openvino
pyenv local 3.13.1
find . |grep python-version


# 3.12.3
# 3.13.1

python --version
# eval "$(pyenv init -)"

cd /dataneura/openvino/
python -m venv venv_ov
# 3.13.1

# clone ...



source /dataneura/openvino/venv_ov/bin/activate

pip install jax jaxlib pytest defusedxml numpy
# NOT: pip install opencv-python

# bash install_build_dependencies.sh
# # (may need sudo)

# Before installing (pip / dev-requirements) and build (cmake), somw apt packages need to be there


# sudo apt update
# sudo apt install sysstat

sudo apt update

sudo apt install    clang-15 libclang-15-dev clang-format-15
sudo update-alternatives --install /usr/bin/clang clang /usr/bin/clang-15 100
sudo update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-15 100

gcc --version  # is good? 11.4.0


deactivate

# huge
sudo apt install   libopencv-dev python3-opencv

source $MYVINO/../venv_ov/bin/activate

python -c "import cv2; print(cv2.__version__)"
# 4.11.0


cd $MYVINO
cd /dataneura/openvino/openvino

# git submodule update --init --recursive
git fetch origin
git pull origin master







export PATH=$MYVINO/tools/ovc/openvino/tools/ovc:$PATH
# source $MYVINO/../venv_ov/bin/activate


# see clang, gcc

cd $MYVINO
cd /dataneura/openvino/openvino
# conan profile detect --force

# first, cleanup: rm -rf the "build" of $MYVINO
mkdir build
cd build
cd $MYVINO/build
cd /dataneura/openvino/openvino/build

export TEST_DEVICE=CPU
export JAX_TRACE_MODE=JAXPR
echo $TEST_DEVICE $JAX_TRACE_MODE  # Should be "CPU" "JAXPR"

Original instructions:
```bash
export TEST_DEVICE=CPU
export JAX_TRACE_MODE=JAXPR
cd openvino/tests/layer_tests/jax_tests
pytest test_gather.py
```

```bash
# for `cmake` and its consequent `make`:


# for dev-requirements:

uname -m # x86_64
# host_cpu=$(uname -m)
# x86_64_specific_packages+=(gcc-multilib g++-multilib)
test -f  /etc/lsb-release
command -v cmake


# before, or, after make/cmake? (May be unrelated? Don't? wrong. Do install it. It is required)
# yes, DO. Do install it. It is required.
# You should install it before building OpenVINO. (for tests)
pip install -r $MYVINO/src/bindings/python/wheel/requirements-dev.txt

# Before CMake:

source $MYVINO/../venv_ov/bin/activate
pip install -r $MYVINO/src/frontends/tensorflow/tests/requirements.txt
pip install -r $MYVINO/src/frontends/onnx/tests/requirements.txt
pip install -r $MYVINO/src/frontends/tensorflow_lite/tests/requirements.txt
# No Paddle, for, PaddlePaddle:
# NO: pip install -r $MYVINO/src/frontends/paddle/tests/requirements.txt


# DO:
pip install -r $MYVINO//src/bindings/python/wheel/requirements-dev.txt

# OpenVINO’s naming convention checks (NCC) require extra dependencies:
pip install -r $MYVINO/cmake/developer_package/ncc_naming_style/requirements_dev.txt


# clean up:
#   form build:
# find .. |grep Release
# careful: rm -rf ../bin/intel64/Release

rm -rf build
mkdir build && cd build

# be careful: not "release"
# cmake -DENABLE_PYTHON=ON -DPYTHON_EXECUTABLE=$(which python) ..
# cmake -DENABLE_PYTHON=ON -DPYTHON_EXECUTABLE=$(which python) ..
# cmake -DENABLE_PYTHON=ON -DPYTHON_EXECUTABLE=$(which python) ..
# cmake -DCMAKE_BUILD_TYPE=Debug -DENABLE_PYTHON=ON -DPYTHON_EXECUTABLE=$(which python) ..

# Dont:       -DCMAKE_POLICY_DEFAULT_CMP0148=NEW \

cmake -DCMAKE_BUILD_TYPE=Debug \
      -DENABLE_PYTHON=ON \
      -DPYTHON_EXECUTABLE=$(which python) \
      \
      -DCMAKE_CXX_FLAGS="-stdlib=libstdc++" \
      \
      -DENABLE_OV_JAX_FRONTEND=ON \
      -DENABLE_TESTS=ON \
      -DENABLE_FUNCTIONAL_TESTS=ON \
      -DENABLE_DEBUG_CAPS=ON \
      -DENABLE_OPENVINO_DEBUG=ON \
      -DENABLE_PROFILING_ITT=ON \
      -DENABLE_CLANG_FORMAT=ON \
      -DENABLE_SANITIZER=ON \
      -DENABLE_UB_SANITIZER=ON \
      -DENABLE_FASTER_BUILD=ON \
      -DENABLE_INTEL_CPU=ON \
      -DENABLE_INTEL_GPU=OFF \
      -DENABLE_INTEL_NPU=OFF \
      -DENABLE_JS=OFF \
      -DENABLE_ONEDNN_FOR_GPU=OFF \
      \
      -DENABLE_CPPLINT=ON \
      -DENABLE_LTO=OFF \
      -DENABLE_SYSTEM_TBB=OFF \
      -DENABLE_SYSTEM_PUGIXML=OFF \
      -DENABLE_SYSTEM_PROTOBUF=OFF \
      -DENABLE_SYSTEM_OPENCL=ON \
      -DENABLE_SYSTEM_SNAPPY=OFF \
      -DENABLE_CPPLINT_REPORT=OFF \
      -DENABLE_FUZZING=OFF \
      \
      -DENABLE_OV_PADDLE_FRONTEND=OFF \
      \
      ..

# ENABLE_OV_TF_FRONTEND
# ENABLE_OV_TF_LITE_FRONTEND
# ENABLE_OV_IR_FRONTEND
# ENABLE_OV_PYTORCH_FRONTEND

;
# -DENABLE_INTEL_GPU=ON \  # Enable Intel GPU support (optional)
# -DENABLE_SYSTEM_OPENCL=OFF \
# ENABLE_CPU_DEBUG_CAPS = OFF
# DENABLE_INTEL_GPU
# ENABLE_OPENVINO_DEBUG = OFF
# ON!



cmake --build . --parallel
make -j1

# test
python -c "from openvino.runtime import Core; print(Core())"

# After BUILD

ls $MYVINO/build/wheel/

# after building, I suppose
echo $PYTHONPATH
export LD_LIBRARY_PATH=$MYVINO/bin/intel64/Release:$LD_LIBRARY_PATH
export PATH=$MYVINO/tools/ovc/openvino/tools/ovc:$PATH


# some older notes:
#     from: Jan 17 01:17
# 16481  cmake -DCMAKE_BUILD_TYPE=Release ..
# 16528  cmake -DENABLE_PYTHON=ON -DPYTHON_EXECUTABLE=$(which python) ..
# 16592  cmake -DCMAKE_BUILD_TYPE=Debug -DENABLE_PYTHON=ON -DPYTHON_EXECUTABLE=$(which python) ..
# 16499  make -j$(nproc)
# 16500  make -j1
# 16555  cmake --build . --parallel

cat $MYVINO/src/bindings/python/requirements_test.txt


cd $MYVINO/tests/layer_tests/jax_tests

pytest test_reshape.py

cd $MYVINO/tests/layer_tests/jax_tests

```


Install OpenVINO Python Bindings (if necessary)

( if exists:)
```bash
pip install $MYVINO/build/wheel/*.whl
```
then
```bash
export TEST_DEVICE=CPU
export JAX_TRACE_MODE=JAXPR
cd $MYVINO/tests/layer_tests/jax_tests
pytest test_gather.py
```

Some typical warnings:

* Supported clang-format-15 is not found!
* Cannot suggest clang package for python 3.13
* clang- libclang--dev are not found (required for ncc naming style check)
* OpenCV ver. 3.0+ is not found, benchmark_app will be built without OpenCV support
* Policy CMP0148 is not set: The FindPythonInterp and FindPythonLibs modules are removed.

* Set OpenCV_DIR

Installtion
```bash
sudo apt update
sudo apt install clang-15 libclang-15-dev clang-format-15
```

Provisional (pre)build script
```bash
# rm -rf build
# mkdir build && cd build
cmake -DCMAKE_BUILD_TYPE=Debug \
      -DENABLE_PYTHON=ON \
      -DPYTHON_EXECUTABLE=$(which python) ..
```
