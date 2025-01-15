## Installing JAX:

```bash
pip install jax jaxlib

python -c "import jax; print(jax.numpy.array([1, 2, 3]))"
```
output:
```
[1 2 3]
```

to enable GPU on JAX: (TBC)


## Installing OpenVINO:


Prepare python
```
pyenv install 3.12.9
python local 3.12.9
python --version
python -m venv veonv_ov
```

```
git clone ...
cd openvino
# fetch submobules
git submodule update --init --recursive
```


Install dependenceies: but comment some python
```bash
sudo bash install_build_dependencies.sh
```
Install JAX
```bash
pip install jax jaxlib
```

(TBC)
