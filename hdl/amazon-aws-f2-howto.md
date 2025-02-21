Instructions, which include "Lessons Learned":

* Create an Instance:
    * `f2.6xlarge`
    * Image (AMI): Use a pre-existing one for FOGA
         * (I used Ubuntu, but unfortunately it is Ubuntu 20).
         * LL: Avoid OSS...
         * LL: Don't try to install Vivado manually. Use an image that has Vitis preinstalled (KEY).
         * LL: You will need Xilinx software, becuase the FPGAs on AWS (F2) are Xilinx UltraScale+ ... . But your (my) development will remain open-source.
    * set the keypair ( see `.pem` instrucitons below)
    * Other:
        * User
        * assign role to user
        * 
* Install: (Ubuntu)
    * gh cli
    * ...
    * ```bash
      dd
      dd
      ```
* Install a few things: (Amaranth chain of tools)
    * `pyenv` (my style)
    * amaranth (use pip)
    * ```bash
      pip3 install --upgrade --reinstall 'amaranth[builtin-yosys]'
         # no: --user

* Install Yosys:
    * yosys (git pull, and build it using `make`)
        * avoid OSS-... (it is too specific about Ubuntu version, its python, etc. It crashes your Ubuntu and you may be locked out)
    ```bash
    sudo apt install -y build-essential clang bison flex libreadline-dev gawk tcl-dev libffi-dev git graphviz xdot pkg-config cmake libboost-all-dev
    ...
    git clone --recurse-submodules https://github.com/YosysHQ/yosys.git
    cd yosys
    make -j$(nproc)
    yosys --version
    # yosys -p "read_verilog perceptron.v; synth; show"
    ```
* (KEY) Install: for FPGA deploying and gnerating AFI/AFGI.
    * `aws-fpga`
    * `aws` cli
```bash
git clone https://github.com/aws/aws-fpga.git ~/aws-fpga
cd ~/aws-fpga
source sdk_setup.sh
source hdk_setup.sh
source vitis_setup.sh
```
