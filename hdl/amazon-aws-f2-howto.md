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
      alias python3=python
      alias pip3=python
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

    # to verify
    fpga-describe-local-image -S 0 -R

    # every time?
    cd ~/aws-fpga/ && source sdk_setup.sh && source hdk_setup.sh && source vitis_setup.sh
    # read iunstruciotns written in the end
        echo $AWS_PLATFORM_202410_0
        echo $XILINX_VITIS
        # todo: install XRT
        # install_xrt
    ```
    * `aws` cli
    ```bash
    sudo apt update
    apt list --upgradable
    # subject to update of insallation instrucitons by Aws, but here are the steps I took:
    curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
    unzip awscli-bundle.zip
    sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws


    # set up
    aws region  # take note of the region, don't confuse with zone.
    # key step: see below
    aws configure
    aws region

    # check you IAM user role(s)
    aws sts get-caller-identity
    ```
    * Add role/policiy/permissions to your "user".
    * You will need a "user".
## Getting physical
* ** Now use them**
   * ```bash

     # ...
     sudo fpga-describe-local-image -S 0 -R
     
     # Strangely, specific to "region". It shows a list of AFIs that people have created. Publicly available, but ... but ....
     aws ec2 describe-fpga-images --query "FpgaImages[*].[FpgaImageId, Name]" --output table
     ```

## Some more details
### Setting up `aws` cli
Setting up aws has ambiguities, here I clarify.
Part of above steps involves this command:
```bash
aws configure
```
It asks question and here is how to answer: Look them up on aws
```
AWS Access Key ID [None]: A......
AWS Secret Access Key [None]: cNJ....
Default region name [None]: eu-west-2
Default output format [table]: table
```
* Access key = `AWS Access Key ID` (look it up; you need to have a user created, and these are about that. ref.)
* Secret access key = `AWS Secret Access Key` ( look up on web, but it is shown once. If your "user" doesn't have it, click on add secret key. (Can have multiple).
* Don't leave anything as `None` or default.
* Don't confuse region with zone. Use command `aws region`.
   * For example: Region: `eu-west-2`, zone: `eu-west-2a`.

Verificaiton:
``bash
aws ec2 describe-fpga-images --query "FpgaImages[*].[FpgaImageId, Name]" --output table
```
