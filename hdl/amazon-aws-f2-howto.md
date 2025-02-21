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
      history -w ~/.bash_history
      export PROMPT_COMMAND="history -a; history -r; $PROMPT_COMMAND"
      sudo apt install neovim
      sudo apt bat  # batcat
      
      dd
      ```
* Install pyenv (for peace of mind)
    * .
    * Involves a manual step
    * ```bash
      # Let's pyenv
      sudo apt update
      curl -fsSL https://pyenv.run | bash
      # manual step:
      nvim ~/.bashrc
      exit # !
      pyenv


      # python insallation will require building, which will require some packages
      sudo apt install openssl
      sudo apt install make build-essential libssl-dev xz-utils tk-dev libffi-dev liblzma-dev \
         python3-openssl  libssl-dev \
         make build-essential \
         zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev \
         llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev libffi-dev liblzma-dev \
         wget curl git
      # you already probably have those

      pyenv update
      pyenv install -l
      # now you can do anything you want

      # this will require some of those apt packages for building your desired version of python
      pyenv install 3.13.2
      pyenv install pypy3.11-7.3.18
      pyenv versions
      cd ...
      pyenv local 3.13.2
      # hey, pyenv, is done

      python --version
      pip --version
      pip install --user --upgrade pip
      ```
* Install a few things: (Amaranth chain of tools)
    * `pyenv` (my style)
    * amaranth (use pip)
    * ```bash
      pip install --upgrade --reinstall 'amaranth[builtin-yosys]'
         # no: --user
      pip install amaranth-boards

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
    ```bash
    git clone https://github.com/aws/aws-fpga.git ~/aws-fpga
    cd ~/aws-fpga
    source sdk_setup.sh
    source hdk_setup.sh
    source vitis_setup.sh
    ```
    * `aws` cli
    ```bash
    aws region
    ```
    * 
