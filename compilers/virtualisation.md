To solve confusion about vagrant and other virtualisation tools and their difference.

What is `vagrant` and what it is not?

* How vagrant versus qemu are different?
* What about those hardware facilities for emulation?

## Them
### vagrant

Vagrant by HashiCorp

### qemu
* QEMU was before vagrant
* QEMU is for full-system emulation

### Other: Tools
### Other: GPU
simGPUGPU

## Conceptology
### Levels
* Software product (full system): VMware, VirtualBox
* docker sub: marketplace
* docker: product (more than a CLI)
* tools: CLI tools: Vagrant
* backend
* KVM (Kernel-based Virtual Machine)
* (library): e.g. `Libvirt`
* NS (OS-level: Linux)
* CPU facilities (instructions)

where to put this in above stack? "Hyper-V"

### Terminology:
* **provision**: "QEMU can be used as a backend for Vagrant to provision virtual machines"

### Dependency:
Dependency struture:

QEMU can be used as a backend for Vagrant to provision virtual machines"

### Timeline (history)
* PC Emulator(s): 1980s Amiga ( See https://en.wikipedia.org/wiki/Emulation_on_the_Amiga )
* QEMU: 2003
* Plan 9 (ideas) 1992 (public release)
* VPS: First VPSes (before AWS/cloud?) early 2000s. OpenVZ (2005), Xen (?)
* pre-cloud: IBM Computing on Demand (2000)
* pre-cloud: Salesforce (1999)
* First Cloud: 2006 (AWS EC2)
* Vagrant: 2010 (HashiCorp)
* Linux NS started: year: ... (by Google, etc)
* Linux NS completed: year: ...
* LXC, LXD
* Docker first release: year
* Docker Build (new docker)
* Docker new front-ends
* Arm/Apple's Rosetta(?)

