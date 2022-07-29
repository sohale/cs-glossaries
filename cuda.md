
Some of my old code and writings copywritten in [patent](https://patents.google.com/patent/US10210518B2/en)

is a form of "massively parallel computation"

### Some terms and concepts
* A kernel: a piece of code executed by each GPU instace.
* A kernel instance: each execution with its own input (variables) and parameters
* Number of Kernel instances
* Their execusion is async

* GPU cores

* Warp, block, kernel, a process.
   * "processes" within a "block" =?
   * processes within a "warp" =?
   * vs (all)  kernels

* Warp, block, kernel, a process, gpu core.

* GPU global memory

* You cannot:
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

### Synchronisation
Synchronisation means waiting for previous ones to finish.

There are multiple ways to do synchronisation. It may be not straightforward.

* sync within a "block"
* sync within a "warp"
* sync between all the parallel kernels
* process: (Sync between processes(?) within a "block")

Coordination:
* Minimize time lost
   * the idle time
* balance the workload (between the GPU cores)
* Slowest process (before a sync) (determins the overall speed) (idle time)
* Comparison of processes vs means time

Synch techniques:
* "Barrier Synchronization"
   * Serial sequence: kernel-1 end, offload, kernel2-load, kernel2-start, kernel-2 execution, kernel2-end, ...
   * Serial sequence: kernel-1 end, offload, **WAIT-FOR CPU**, kernel2-**load FROM CPU**, kernel2-start, kernel-2 execution, kernel2-end, ...
   * Is an "implicit synchronization"
   * implicit = no separate function is called only for sake of synchronization

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
