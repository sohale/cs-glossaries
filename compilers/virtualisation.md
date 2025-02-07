To solve confusion about vagrant and other virtualisation tools and their difference.

What is `vagrant` and what it is not?

* How vagrant versus qemu are different?
* What about those hardware facilities for emulation?

## Virtualisation and Emulation Softwares
### vagrant

Vagrant by HashiCorp

### qemu
* QEMU was before vagrant
* QEMU is for full-system emulation

### VirtualBox
VirtualBox is open-source.
is Hypervisor.

Originally written by:
* InnoTek Systemberatung GmbH (2007–2008)
* Sun Microsystems (2008–2010)
* now: Oracle

### Other: Tools
* "KVM" is a software too? No. It is the specific Lilnux's LVM implementaiton.
    * The "kernel-mode component of KVM"

### Other: GPU Emulation
For GPU Performance modelling

* gpgpu-sim: https://github.com/gpgpu-sim/gpgpu-sim_distribution

### Other: GPU containeralisaiton/Virtualisation

### Other: Softwares Products
* VMWare
* VirtualBox

* Linux-V server is an operating system-level virtualization

## VM Conceptology
### VM: Levels
(See deplendency/stack)
* Software product (full system): VMware, VirtualBox
* docker sub: marketplace
* docker: product (more than a CLI)
* tools: CLI tools: Vagrant
* backend
* KVM (Kernel-based Virtual Machine)  [[8]](#8)
    * What is KVM versus Linux namespaces (they are completely separate)
    * "The kernel-mode component of KVM"
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

From Docker [docs](https://docs.docker.com/build/buildkit/): "enable Hyper-V and Containers"

#### VM: Terms (types and levels)
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
* Linux KVM  [[8]](#8)
    * Not to be confused with NS system.
    * "Kernel-based Virtual Machine (KVM) is a free and open-source virtualization module in the Linux kernel that allows the kernel to function as a hypervisor" [[8]](#8)
    * What is KVM versus Linux Namespaces? They are separate.
    * The "kernel-mode component of KVM" = ?
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
* microVM ([1](https://ubuntu.com/server/docs/using-qemu-for-microvms))
* "containerization"
* "virtualization"
* "OS-level virtualization" := containerization ( as in [w:Borg](https://en.wikipedia.org/wiki/Borg_(cluster_manager)) and [w:OSVM](https://en.wikipedia.org/wiki/OS-level_virtualization) )
* KVM is full virtualization. NS+CG is lightweight virtualization
  * Lightweight process isolation
  * "KVM transforms the Linux kernel into a full-fledged hypervisor, allowing the creation and management of virtual machines (VMs) with complete **guest** operating systems"
  * KVM is Hardware-Assisted Virtualization
* vCPU [[8]](#8)
* "hot swappable vCPUs" [[8]](#8)
* "Virtualization Technology for Directed I/O" (see HAV, below)
* I/O MMU virtualization (see HAV, below)
* "logical processor" (see HAV, below)
* " hardware in-circuit emulators (ICE)" (see QEMU)

#### Ways to say it:
* "Virtualisation with QEMU"
* QEMU type is: Hypervisor, Emulator
* "the kernel-mode component of KVM"

### VM: Terminology: Related
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
* The Cloud Native Computing Foundation (CNCF) as part of Linux Foundaiton
* cluster manager
    * Borg (cluster manager) -- intrernally used in G since 2008
* Live Migration [[8]](#8)
* Hardware-Assisted Virtualization (see below)

### VM: Dependency:
Dependency struture:

QEMU is lower-level than Vagrant.

~~QEMU may be used as a backend for Vagrant to provision virtual machines~~

( This semi-incorrect sentence triggered all of this document )

Which VM technology does QEMU use?

#### Underlying technology
Virualisaiotn underlying technology in open-source software may rely on (typically):
* QEMU (Emulation)
* Linux (OS: NS or/and CG)
* KVM?  [[8]](#8) (separate from Linux NS, may use HAV)
* Processor (hardware) facilities for virtualisation. (Hardware-Assisted Virtualization)

#### Technology that use vitualisiton
(Overlying) technology that use virtualiziton
* Cloud Native Computing Foundation (CNCF)
* Cluster manager
* VPS and Cloud

#### Clear (logical) separation of layers
* Clear logical separation of layers:
    * ▢ Cluster manager or Cloud
    * ▢ Virtualizaiton Manager / Provider . (VM-system) (a VPS system, multiple instances, is here, since it needs to create and remove VMs+netw/resources) (CLuster management may have overlaps, but has more than this) (`dockerd` is here)
    * ▢ ? Contrainer (with resources: space; may share or has own resources; network?) (A VPS instance is this). A docker container is here (more than a raw VM).
    * ▢ Virtualizaiton (as an abstraction layer) (raw VM)
        * Itself may be in OS, or has underlyling OS, nested, etc, even may be separate dedicated hardware, but in VM capacity.
        * Nothing lower than VM. If a VM-system (docker, etc) is run nested inside a VM, that's a differnt story.

### Versus-ology: ns, cg, vm
cgroups vs Namespaces:
* cgroups: Control and limit resource usage
* ns: Isolate system resources.


### Timeline (history)
* 1960s: IBM (emulation backward compatibility) but was not cross-platform
* 1980s: PC Emulator(s) on Amiga [[1]](#1): Early PC Emulation (1980s)
    * 1986: Amiga Transformer (hardware)
    * 1987: PC-Task (1987) (A-Max (1987: Mac), Shapeshifter (1993, Mac), UAE (Unix Amiga Emulator: 1995))
    * The Amiga led the way with practical software and hardware-based solutions for everyday users.
* 1991: Earliest Linux release 
* 1992: "Plan 9" (ideas) 1992 (public release) used "wider namespace functionality" heavily throughout.
* 1993: Wine began in 1993 under the initial coordination of Bob Amstadt as a way to support running Windows 3.1 programs on Linux.
* 1999: pre-cloud: Salesforce (1999)
* 2000s: VPS: First VPSes (before AWS/cloud?) early 2000s. OpenVZ (2005), Xen (?)
* 2000: pre-cloud: IBM Computing on Demand (2000)
* 2002: **Linux NS started**: year: 2002, by Eric W. Biederman [[4]](#4). (suported by Google?, etc).
    * 2002: Linux: "mount" namespace (kernel 2.4.19) -- the first namespace
* 2003: **QEMU**
* 2006: Apple's "Rosetta 1" for (for transition from) PowerPC
* 2006: ☁️ First Cloud (AWS EC2)
* 2006: Linux more namespaces
* 2006: KVM surfaced (RedHat) (not to be confused with NS/CG system)
* 2007: KVM merged kernel 2.6.20 (Feb 2007)
* 2007: `cgroups` v1 (Control Groups): 2007 (had inconsistencies). Grouping of processes. "cgroup hierarchies".
* 2008: LXC: (Linux Containers) 2008. built on namespaces and cgroups. First Release of LXC on 2008.
* 2008: Chrome used "sandboxing", used namespaces to isolate its own processes (from attack risk)
* 2010: **Vagrant**: 2010 (HashiCorp)
* 2013: **Linux namespaces** completed: (Linux kernel 3.8, adepquate for "containers"); "User namespaces". User namespace support completed [[5]](#5). (Linux 3.8 was released on Mon, 18 Feb 2013)
    * The "User namespaces" on Linux
    * Started: redesigning cgroups (later as cgroups v2). The v1 had inconsistencies.
* 2013: 🐳 Docker first release (used LXC)
* 2014: LXD (Canonical; Feb 2014): "container hypervisor" built on LXC
* 2014: Docker eventually replaced LXC with its own runtime, `libcontainer`, in 2014.
* ~~2015: My work at Wide IO~~
* 2015: Kubernetes initial release July 21, 2015 (announced June 2014)
* 2016: Docker for Mac & Windows (Docker Desktop): 2016
* 2016: The `cgroup` namespace, introduced in (kernel 4.6), isolates the view of the "cgroup hierarchy".
* 2016: "cgroups v2" (kernel 4.5)
* 2018: Docker BuildKit `buildx` (new docker) (since Docker 18.06?) (a Low-Level Build ([LLB](https://docs.docker.com/build/buildkit/)) format) `builder`
    * ~~Docker BuildKit 2 (?)~~
    * ~~Docker new front-ends~~ `builder` , `buildx` , `docker buildx use`
* 2020: Apple's "Rosetta 2" for (for transition to) Arm


#### Linux LXC timeline

* 2002: Linux Namespaces began (Eric W. Biederman) [[4]](#4) and [...]
* 2006: Cgroups Introduced (Google engineers Paul Menage and Rohit Seth)
* 2008: Namespaces and Cgroups in Linux Kernel
* 2008: First Release of LXC
* 2010–2012: Early Adoption
* 2013: Linux NS completed (kernel 3.8) adepquate for "containers"; "User namespaces" [[5]](#5) (Kernel 3.8 released on 18 Feb 2013)

#### Linux Namespaces timeline

* 2002: `mnt`: "Mount" namespaces (Linux) (kernel 2.4.19)
    * `uts` (for hostname and NIS) [[6]](#6)
* 2013: `user`: "User" namespaces (Linux) (kernel 3.8)
     * considered completed: adepquate for "containers"
* 2015: The Cloud Native Computing Foundation (CNCF) was formed (for Kubernetes)
* 2016: `cgroup` namespace: Control group (kernel 4.6) -- isolates the view of the "cgroup hierarchy"
     * adepquate for Kubernetes
* Proposed:
   * journal namespace
   * syslog namespace

Linux (kernel 5.6) has 8 kinds of namespaces:
Mount,
Process ID,
Network,
Inter-process Communication,
Unix Time-Sharing,
User ID,
Control group,
Time
(`mnt`, `pid`, `net`, `ipc`, `uts`, `user`, `cgroup`, `time`).

* Mount (mnt)
* Process ID (pid)
* Network (net)
* Inter-process Communication (ipc)
* Unix Time-Sharing (uts)
* User ID (user)
* Control group (cgroup)
* Time

Linux syscalls: (see [[4]](#4))
* `clone`
* `unshare`
* `setns`

They are:
* (Why specified by FD?)
* Uniquely specified by `pid/ns/nskind`
* Are garbage collected
* Accessed via `/proc/<pid>/ns/<nskind>`

### Misc
* journal namespace
* syslog namespace

### KVM
KVM is a whole differnt beast.

KVM [[8]](#8) is separate from NS+CG.
<!-- NS, KVM [[8]](#8) and CNCF -->
* KVM uses Hardware-Assisted Virtualization.
* Runs separate Kernel instances (can be differnt kernels)
* Has a "KVM interface"

* vCPU
* hot swappable vCPUs

Applications:
* KVM is used by Virtual Machine Monitors (VMMs)

What is:
* KVM provides device abstraction "but no processor emulation." (???) [[8]](#8)
* What is "hardware emulation that is not handled by the kernel"? [[8]](#8)
* What is the relationship between KVM, QEMU and HAV?

### Hardware-Assisted Virtualization (HAV)
* CPU extensions like Intel VT-x, AMD-V, VIA VT for efficient virtualization. [[8]](#8) [[9]](#9)
* aka Accelerated Virtualization
* hardware virtual machine (HVM): (Xen calls it so)
* Native Virtualization (Virtual Iron calls it so)

Types:
* Intel VT-x [(wikipedia)](https://en.wikipedia.org/wiki/X86_virtualization#Intel-VT-x)
* AMD-V [(wikipedia)](https://en.wikipedia.org/wiki/X86_virtualization#AMD_virtualization_(AMD-V))
* VIA VT [(wikipedia)](https://en.wikipedia.org/wiki/VIA_Technologies)

Related:
* Intel "VT-d": I/O MMU virtualization (AMD-Vi and Intel VT-d), "Virtualization Technology for Directed I/O"
* AMD-Vi: (same)


#### Intel VTX
"VMX" stands for Virtual Machine Extensions.

"Virtual Execution Mode": Simulates a "ring 0" state.

In "virtual execution mode",
    the "guest OS" perceives itself as running with full privilege ("ring 0"),
    but the "host OS" remains protected. [wikipedia](https://en.wikipedia.org/wiki/X86_virtualization#Intel-VT-x)

Extended Page Tables (EPT) for "page-table virtualization".

"unrestricted guest" enables creation of "logical processor" to run directly (virtually?) in "real mode" (using EPT).


VTX adds 13 new instructions:
* VMPTRLD
* VMPTRST
* VMCLEAR
* VMREAD
* VMWRITE
* VMCALL
* VMLAUNCH
* VMRESUME
* VMXOFF
* VMXON
* INVEPT
* INVVPID
* VMFUNC

These enable:
* entering and exiting a "virtual execution mode"


## Refs
* <a id="1">[1]</a> See https://en.wikipedia.org/wiki/Emulation_on_the_Amiga
* <a id="2">[2]</a> [Types of Operating System Kernel Structures and VMs](https://www.josehu.com/technical/2021/05/24/os-kernel-models.html), by Guanzhou Hu (2021)
* <a id="3">[3]</a> For "Type 0 hypervisor" see: [types-of-virtual-machines-and-their-implementations](https://cse.poriyaan.in/topic/types-of-virtual-machines-and-their-implementations-50834/) poriyaan.in
* <a id="4">[4]</a> "[Linux namespaces](https://en.wikipedia.org/wiki/Linux_namespaces)" on Wikipedia
* <a id="5">[5]</a> User namespace support [completed](https://kernelnewbies.org/Linux_3.8#User_namespace_support_completed). (Linux 3.8 was released on Mon, 18 Feb 2013).
* <a id="6">[6]</a> UTS: Whats a uts namespace https://unix.stackexchange.com/questions/183717/whats-a-uts-namespace
* <a id="7">[7]</a> Promise theory: https://en.wikipedia.org/wiki/Promise_theory
* <a id="8">[8]</a> https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine
* <a id="9">[9]</a> HAV: Hardware Assisted Virtualization https://en.wikipedia.org/wiki/Virtualization#Hardware_assisted See above [[section]](#Hardware-Assisted Virtualization (HAV))
