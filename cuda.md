
Some of my old code and writings copywritten in [patent](https://patents.google.com/patent/US10210518B2/en)

* A kernel: a piece of code executed by each GPU instace.
* A kernel instance: each execution with its own input (variables) and parameters
* Number of Kernel instances

* GPU global memory

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
   * Write access to specific global-gpu mempry location
* Pointers: Locations on GPU global memory
* the address of some array that all values are there but need to be indexed. (not the actual location that is accessed, but the beginning)
* Unique values to each kernel (not in memory): index, etc

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
   *  Mitigation: (cont.): The input (w) vector elements may not be contiguous, but strided.
