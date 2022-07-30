
* https://github.com/sohale/GPU-CUDA-mnc
* Some of my old code and writings copywritten in [patent](https://patents.google.com/patent/US10210518B2/en)

is a form of "massively parallel computation"

### Some terms and concepts
* A kernel: a piece of code executed by each GPU instace.
   * A kernel is in fact shared between many (single)
* A kernel instance: each execution with its own input (variables) and parameters
* Number of Kernel instances
* Their execusion is async

* GPU cores

* Warp, block, kernel, a process.
   * "processes" within a "block" =?
   * processes within a "warp" =?
   * vs (all)  kernels
   * kernel instance = thread (?)
   * task (finished its task)

Physical (core) versus logical (thread?).

* Warp, block, kernel, a process, gpu core, thread, task.

*

* GPU global memory

Other memories:
* host memory
* GPU global memory

Term: host

Basic operations:
* transferring data from the GPU to the CPU
   * by kernel
   * or by CPU?
* transferring data from the CPU to the GPU
   * to memory?
   * not to kernel?
   * by CPU only?
* Loading of GPU kernels
* (waiting for last one)
* warp execusion
* Assigning of indices (?) (Is this a separate step? or as part of kernel loading? or automatically and implicitly done by hardware (scheduler) and massive execusion/launch of kernels: launch. Are they started together? or after loadin gof each?)

Agents: Things are done by?
* GPU (kernels)
* GPU Scheduler
* CPU (progamming)
* CPU (transferring)
   * to GPU global memory
   * to others?

Usual bottlenecks:
* GPU-CPU data trasnfers (and message passing)
   * transfer is slow
   * Is serial (sequential)
   * Bandwidth is small
   * Compared to GPU-cores with memory or eachother
   * Compares to data transfer within GPU (between which part of the architecture?)
* Use of shared memory
...

You cannot:
   * no recursive programming ( no stack)
   * recursion is removed from CUDA

Amdahl's law:
* $p * T + (1-p) * T/s$

### Typical dimensions
* 32 threads in a warp
* 2880 cores in K40c
* block, grid, etc.
* shared memory size
* global memory size (K40)
* cache sizes of K40

### The architecture

#### The architecture of K40c
* Multiprocessor = ? (15)
* 12 Gb
* Constant Memory (64k)
* Shared Memory per Block (49k = $1024 * 16 * 3$ = 48 * 1024)
* Registers per block 64k
* Threads per block: 1024
* Block dims: 1024, 1024, 64
* Grid dims: 2'147'483'647 x 65'535 x 65'535
* Memory pitch = ? (2 G B)
* Memory has clock: 3 GHz
* Memory bus: 384

* Cache: L2= 1'572'864. (1 MB)
* SMP
* Thread per SMP
* Some strange terms:
   * SP (SP Cores)
   * SMP

### I (on input)
* Stages/modes:
   * fully parallel
   * combining
   * seeding or populating:
      * RNG
      * copy
      * count? (derived from indices?)

(const? recursive across G? (not L). chain. See skip-ahead)

### IO
Types of input (IO) values
Parameters, variables (input), variables (output), kernel/execution indices (input)

#### Parameters:
* Parameters that have similar value across all kernel instances
* Inputs specific to each kernel instance


Ways parameters and variables are given:
* passed on (specific element: indexed) memory locations (on GPU global memory): predesignated indices
   * Specific (and unique) to each kernel instance
   * Global and shared by (all) instances (matrix L) (is this a bottleneck?). (It is read directly from the global memory in each access. Can we put it in registers somehow?)
   * Write access to specific global-gpu mempry location (no racing condition)
* Pointers: Locations on GPU global memory
* the address of (head of) some array that all values are there but need to be indexed. (not the actual location that is accessed, but the beginning)
* Unique values to each kernel (not in memory): index, etc

* Explicit input (from CPU), explicit input (left on GPU memory), const, chain (sequential formula: induction/recursion in G direction. G=across kernels instances. (logical. not number of gpu-cores))
* The Skip-ahead formula calculations. Used for "Chain" calculations. (See bove section "Stages/modes")


### Ways of GPU-GPU communications
* By memory (coordinated,, i.e. no data race)
* by sychronisation (simple events): See synchrization section. All of them apply.
* (is other event passing possible?)

### Synchronisation
Synchronisation means waiting for previous ones to finish.

There are multiple ways to do synchronisation. It may be not straightforward.

* sync within a "block"
* sync within a "warp"
* sync between all the parallel kernels
* process: (Sync between processes(?) within a "block")

#### Coordination:
* Minimize time lost
   * the idle time
* balance the workload (between the GPU cores)
* Slowest process (before a sync) (determins the overall speed) (idle time)
* Comparison of processes vs means time
* warp execution
   * individual instructions are synchronized
   * (all) GPU cores participate in a warp
   * the waiting time is not obvious. It is divided between individual instructions
   * the waiting time for this synchronization can be near zero
   * Used in random number generators (RNG)
   * A warp normally consists of 32 threads
* Coordination between grid, block, etc?

#### Synch techniques
Two main techniques: barrier, mem-copy, Warp:
* "Barrier Synchronization"
   * Serial sequence: kernel-1 end, offload, kernel2-load, kernel2-start, kernel-2 execution, kernel2-end, ...
   * Serial sequence: kernel-1 end, offload, **WAIT-FOR CPU**, kernel2-**load FROM CPU**, kernel2-start, kernel-2 execution, kernel2-end, ...
   * Is an "implicit synchronization"
   * implicit = no separate function is called only for sake of synchronization
   * CPU is notified by the barrier mechanism immediately "after" the last parallel kernel instance (last thread)
   * From outside (CPU), and is not done explicitly launched by kernels
* Synchronization Using the `cudaMemcpy` Function
   * Also implicit synchronization
   * transfers data from the GPU to the CPU
   * "A `cudaMemcopy` function waits until the kernel is completed before it begins its copy operation on memory." (?)
   * Somehow from data (control flow follows data flow)
* Warp synchronization
   * term: "warp execution"
   


### CUDA
#### Typical CUDA functions:
```cpp
__device__	size_t	calculateGlobalIndex( );
__global__	void	processMonteCarloSample(...);
__device__	double	executeTransformation(...);
```

##### Explanations:
* `__device__	size_t	calculateGlobalIndex( );` calculates memory locations of the variables in the local memory andwhere the the global parameters are allocated
* `__global__	void	processMonteCarloSample(...);` parameters and variables fetched from GPU global memory
* `__device__	double	executeTransformation(...);` execute each transformation, in parallel with others

The `__global__` specifier indicates a function that runs on "device" (GPU). aka "kernels". [1ref](https://cuda-tutorial.readthedocs.io/en/latest/tutorials/tutorial01/)

When a kernel is "called", its "execution configuration" is specified using `<<...>>`. For example: `cuda_hello<<<1,1>>>();`. aka "kernel launch".
The `(m,k)` is parameters of "kernel execution configuration".

* "Threads" are grouped into "thread block". Multiple thread blocks, organized into a "grid" structure. [T2](https://cuda-tutorial.readthedocs.io/en/latest/tutorials/tutorial02/)

thread block -> threads

* `threadIdx.x` = the index of the thread within the block
* `blockDim.x` = the size of thread block (number of threads in the thread block).

* $0 <$ `threadIdx.x` $<$ `blockDim.x`

* An "iteration" ~ a block = one round of parallel execusion of kernels.

## Potential bottlenecks:
* Matrix `L` is accessed by all kernels.
   * Mitigation: copy for all kernels. Copy for every few of them. etc.
   * Mitigation: (cont.) Using shared memory for them?
   * Mitigation: (cont.) Using somehow local memory. Also check vectorised: Somehow local access.
   * Mitigation: (vague): Somehow using Cache
   * Mitigation: (vague): Somehow using registers of each kernel? Can we preload them? Does L fit in them?
   * Mitigation: (cont.): The input (w) vector elements may not be contiguous, but strided.
   * No racing condition, but it may not be fast. 

## NVCC guide
* `.ptx` is PTX intermediate assembly file
* `.cu` CUDA source file, containing host code and device functions

## Read
* [T1]: A [tutorial](https://cuda-tutorial.readthedocs.io/en/latest/tutorials/tutorial01/)

## Appendix
* Implementation of the Gamma Incomplete Inverse function in Cephes Mathematical Library (version 2.7) in C (is nested. Also recursive?)
