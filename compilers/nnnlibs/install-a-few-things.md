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

## Installing OpenVINO
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
