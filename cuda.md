
Some of my old code and writings copywritten in [patent](https://patents.google.com/patent/US10210518B2/en)

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


* Stages/modes:
   * fully parallel
   * combining
   * seeding or populating:
      * RNG
      * copy
      * count? (derived from indices?)


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
* the address of some array that all values are there but need to be indexed. (not the actual location that is accessed, but the beginning)
* Unique values to each kernel (not in memory): index, etc

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
* Coordinaiton between grid, block, etc?

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


## Potential bottlenecks:
* Matrix `L` is accessed by all kernels.
   * Mitigation: copy for all kernels. Copy for every few of them. etc.
   * Mitigation: (cont.) Using shared memory for them?
   * Mitigation: (cont.) Using somehow local memory. Also check vectorised: Somehow local access.
   * Mitigation: (vague): Somehow using Cache
   * Mitigation: (vague): Somehow using registers of each kernel? Can we preload them? Does L fit in them?
   * Mitigation: (cont.): The input (w) vector elements may not be contiguous, but strided.
   * No racing condition, but it may not be fast. 


## Appendix
* Implementation of the Gamma Incomplete Inverse function in Cephes Mathematical Library (version 2.7) in C (is nested. Also recursive?)
