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


Container versus Namespace?

LXD versus LXC

### Timeline (history)

* 1980s: PC Emulator(s): 1980s Amiga ( See https://en.wikipedia.org/wiki/Emulation_on_the_Amiga )
* 2003: QEMU: 2003
* 1992: "Plan 9" (ideas) 1992 (public release) used "wider namespace functionality" heavily throughout.
* 2000s: VPS: First VPSes (before AWS/cloud?) early 2000s. OpenVZ (2005), Xen (?)
* 2000: pre-cloud: IBM Computing on Demand (2000)
* 1999: pre-cloud: Salesforce (1999)
* 2002: Linux: "mount" namespace (kernel 2.4.19)
* 2006: Apple's "Rosetta 1" for (for transition from) PowerPC
* 2006: ☁️ First Cloud (AWS EC2)
* 2006: Linux more namespaces
* 2007: cgroups: v1: 2007
* cgroups v2: ...
* 2008: Linux Containers (LXC) 2008. built on namespaces and cgroups.
* 2010: Vagrant: 2010 (HashiCorp)
* 2002: Linux NS: started: year: 2002, by Eric W. Biederman. (suported by Google?, etc). "[Linux namespaces](https://en.wikipedia.org/wiki/Linux_namespaces)"
* 2013: Linux NS: completed: year: ... (Linux kernel 3.8, adepquate for "containers"); "User namespaces". User namespace support [completed](https://kernelnewbies.org/Linux_3.8#User_namespace_support_completed). (Linux 3.8 was released on Mon, 18 Feb 2013)
* LXC
* 2014: LXD: 2014 (Canonical)
* 2013: 🐳 Docker first release (used LXC)
* 2016: Docker for Mac & Windows (Docker Desktop): 2016
* 2018: Docker BuildKit (new docker)
* Docker BuildKit 2
* Docker new front-ends
* 2020: Apple's "Rosetta 2" for (for transition to) Arm
* Chrome used "sandboxing", used namespaces to isolate its own processes (from attack risk)

### Misc
* journal namespace
* syslog namespace
* 
