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

where to put this in above stack?
* "Hyper-V"
* "container hypervisor" (LXD, by Canonical)
    * "virtual machine"-like experience with "containers".

"virtual machine" versus "container"

"virtual machine"-like versus "virtual machine"


Container versus Namespace?

LXD versus LXC

"container hypervisor" built on LXC


### Terminology:
* **provision**: "QEMU can be used as a backend for Vagrant to provision virtual machines"

### Dependency:
Dependency struture:

QEMU can be used as a backend for Vagrant to provision virtual machines"




### Timeline (history)
* 1960s: IBM (emulation backward compatibility) but was not cross-platform
* 1980s: PC Emulator(s): 1980s Amiga ( See https://en.wikipedia.org/wiki/Emulation_on_the_Amiga ) Early PC Emulation (1980s)
    * 1986: Amiga Transformer
    * 1987: PC-Task (1987) (A-Max (1987: Mac), Shapeshifter (1993, Mac), UAE (Unix Amiga Emulator: 1995))
    * The Amiga led the way with practical software and hardware-based solutions for everyday users.
* 1991: Earliest Linux release 
* 1992: "Plan 9" (ideas) 1992 (public release) used "wider namespace functionality" heavily throughout.
* 1993: Wine began in 1993 under the initial coordination of Bob Amstadt as a way to support running Windows 3.1 programs on Linux.
* 2000s: VPS: First VPSes (before AWS/cloud?) early 2000s. OpenVZ (2005), Xen (?)
* 2000: pre-cloud: IBM Computing on Demand (2000)
* 1999: pre-cloud: Salesforce (1999)
* 2002: Linux: "mount" namespace (kernel 2.4.19)
* 2003: QEMU
* 2006: Apple's "Rosetta 1" for (for transition from) PowerPC
* 2006: ☁️ First Cloud (AWS EC2)
* 2006: Linux more namespaces
* 2007: cgroups: v1: 2007
* cgroups v2: ...
* 2008: LXC: (Linux Containers) 2008. built on namespaces and cgroups. First Release of LXC on 2008.
* 2010: Vagrant: 2010 (HashiCorp)
* 2002: Linux NS: started: year: 2002, by Eric W. Biederman. (suported by Google?, etc). "[Linux namespaces](https://en.wikipedia.org/wiki/Linux_namespaces)"
* 2013: Linux NS: completed: year: ... (Linux kernel 3.8, adepquate for "containers"); "User namespaces". User namespace support [completed](https://kernelnewbies.org/Linux_3.8#User_namespace_support_completed). (Linux 3.8 was released on Mon, 18 Feb 2013)
* 2014: LXD: 2014 (Canonical): "container hypervisor" built on LXC
* 2013: 🐳 Docker first release (used LXC)
* 2014: Docker eventually replaced LXC with its own runtime, `libcontainer`, in 2014.
* 2016: Docker for Mac & Windows (Docker Desktop): 2016
* 2018: Docker BuildKit (new docker)
* Docker BuildKit 2
* Docker new front-ends
* 2020: Apple's "Rosetta 2" for (for transition to) Arm
* Chrome used "sandboxing", used namespaces to isolate its own processes (from attack risk)


Linux LXC timesline:
* 2002: Namespaces began (Eric W. Biederman)
* 2006: Cgroups Introduced (Google engineers Paul Menage and Rohit Seth)
* 2008: Namespaces and Cgroups in Linux Kernel
* 2008: First Release of LXC
* 2010–2012: Early Adoption

* 2002: Linux NS: started: year: 2002, by Eric W. Biederman. (suported by Google?, etc). "[Linux namespaces](https://en.wikipedia.org/wiki/Linux_namespaces)"
* 2013: Linux NS: completed: year: ... (Linux kernel 3.8, adepquate for "containers"); "User namespaces". User namespace support [completed](https://kernelnewbies.org/Linux_3.8#User_namespace_support_completed). (Linux 3.8 was released on Mon, 18 Feb 2013)


### Misc
* journal namespace
* syslog namespace
* 
