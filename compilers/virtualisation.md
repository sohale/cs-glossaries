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
### Other: Softwares Products
* VMWare
* VirtualBox

* Linux-V server is an operating system-level virtualization

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

"virtual machine" verus Emulator

LXD versus Docker: scopes/focuses (API, CLI/UI, Volume, images)

#### Terms (types and levels)
As usually explained on internet: (pool, to be sorted)
* "Lightweight virtual machines"
* "hypervisor" (hypervisor vs VM)
* "container hypervisor"
* "virtual machine"
* "emulator"
* "container"
* "cloud vm" (VMs hosted in the cloud) -- abstract, too general, e.g. "Azure Virtual Machines"
    * instance ("Reserved Instances", Reservations, etc)
    * provision
* process VM (process vs system VMs)
* system VM (process vs system VMs)
* "virtualisation"
* "hosted virtualisation"
* "bare metal virtualisation"
* virtualising software
* VMM
* Type 1 hypervisor
   * Type 1- VM or HV
   * Native- VM or HV
   * Bare metal- VM or HV
* Type 2 hypervisor
   * Hosted VM or HV
* Type 0 hypervisor [[3]](#3)
* Paravirtualization (see Xen)
* Linux KVM
* operating system-level virtualization (OS-level)
* a "virtualization technology"
* "virtual hardware system"
* "Hardware virtual machines" (Emulates a physical computer's components, such as the processor, memory, and storage) (system VM?)
    * "Virtual Driver" = ?
* "Full virtualisation"
* "Virtual Server" (software that "runs" VM)
* Type-1a VM (Hypervisor Has Full Control & Drivers) [[2]](#2)
* Type-1b VM (Hypervisor + Dom0 Kernel for Drivers) [[2]](#2)
* Type-2 VM (Hypervisor as an Extension to Host OS) [[2]](#2)
* "full-system emulation" (e.g. QEMU)

### Terminology:
* **provision**: "QEMU can be used as a backend for Vagrant to provision virtual machines"
* **Ring** (See intel assembly)
* **Ring 0**
* Container Engine
* Infrastructure (context: [Lambda](https://www.lambdatest.com/blog/virtual-machines/))
* "Host Hardware Platform"
* VM Type in terms of optimisaiotn: Compute-optimised, memory-optimised, storage-, GPU-, high-performance computer-*
* Virtual Network
* VM Monitor
* "Physical Machine" (when you want to ...)
   * Industrial PC
   * Rack
* "VM Control"
* "Virtual Environment"
* "OS Kernel Structure Type"s (OS-Kernel models) [[2]](#2)
   * Monolithic Kernel
   * Microkernel
   * Semi-Microkernel
   * Exokernel
   * Kernel Bypassing (Direct-Access Library for Certain Subsystems)
   * Disaggregated Kernel
* Minor relevance:
   * VPS (also see: "Virtual Network")
   * Host OS

### Dependency:
Dependency struture:

QEMU can be used as a backend for Vagrant to provision virtual machines"



### Timeline (history)
* 1960s: IBM (emulation backward compatibility) but was not cross-platform
* 1980s: PC Emulator(s) on Amiga [[1]](#1): Early PC Emulation (1980s)
    * 1986: Amiga Transformer (hardware)
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
* 2002: Linux NS: started: year: 2002, by Eric W. Biederman [[4]](#4). (suported by Google?, etc).
* 2013: Linux NS: completed: year: ... (Linux kernel 3.8, adepquate for "containers"); "User namespaces". User namespace support completed [[5]](#5). (Linux 3.8 was released on Mon, 18 Feb 2013)
    * "User namespaces" on Linux
* 2014: LXD: 2014 (Canonical): "container hypervisor" built on LXC
* 2013: 🐳 Docker first release (used LXC)
* 2014: Docker eventually replaced LXC with its own runtime, `libcontainer`, in 2014.
* 2016: Docker for Mac & Windows (Docker Desktop): 2016
* 2018: Docker BuildKit (new docker)
* Docker BuildKit 2
* Docker new front-ends
* 2020: Apple's "Rosetta 2" for (for transition to) Arm
* Chrome used "sandboxing", used namespaces to isolate its own processes (from attack risk)


#### Linux LXC timeline
* 2002: Linux Namespaces began (Eric W. Biederman) [[4]](#4) and [...]
* 2006: Cgroups Introduced (Google engineers Paul Menage and Rohit Seth)
* 2008: Namespaces and Cgroups in Linux Kernel
* 2008: First Release of LXC
* 2010–2012: Early Adoption
* 2013: Linux NS completed (kernel 3.8) adepquate for "containers"; "User namespaces" [[5]](#5) (Kernel 3.8 released on 18 Feb 2013)

#### Namespaces timeline
* 2002: `mnt`: "Mount" namespaces (Linux) (kernel 2.4.19)
* 2013: `user`: "User" namespaces (Linux) (kernel 3.8)
* 2016: `cgroup`: Control group (kernel 4.6)
* Proposed:
   * journal namespace
   * syslog namespace

Linux (kernel 5.6) has 8 kinds of namespaces:
Mount,
Process ID,
Network,
Inter-process Communication,
UTS,
User ID,
Control group (cgroup),
Time
(`mnt`, `pid`, `net`, `ipc`, `uts`, `user`, `cgroup`, `time`).

* Mount (mnt)
* Process ID (pid)
* Network (net)
* Inter-process Communication (ipc)
* UTS
* User ID (user)
* Control group (cgroup)
* Time.

Linux syscalls: (see [[4]](#4))
* `clone`
* `unshare`
* `setns`

(why specified by FD?)

### Misc
* journal namespace
* syslog namespace

## Refs
* <a id="1">[1]</a> See https://en.wikipedia.org/wiki/Emulation_on_the_Amiga
* <a id="2">[2]</a> [Types of Operating System Kernel Structures and VMs](https://www.josehu.com/technical/2021/05/24/os-kernel-models.html), by Guanzhou Hu (2021)
* <a id="3">[3]</a> For "Type 0 hypervisor" see: [types-of-virtual-machines-and-their-implementations](https://cse.poriyaan.in/topic/types-of-virtual-machines-and-their-implementations-50834/) poriyaan.in
* <a id="4">[4]</a> "[Linux namespaces](https://en.wikipedia.org/wiki/Linux_namespaces)" on Wikipedia
* <a id="5">[5]</a> User namespace support [completed](https://kernelnewbies.org/Linux_3.8#User_namespace_support_completed). (Linux 3.8 was released on Mon, 18 Feb 2013).
