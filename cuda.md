
Some of my old code and writings copywritten in [patent](https://patents.google.com/patent/US10210518B2/en)

* A kernel: a piece of code executed by each GPU instace.
* A kernel instance: each execution with its own input (variables) and parameters
* Number of Kernel instances:


### Parameters:
* Parameters that have similar value across all kernel instances
* Inputs specific to each kernel instance

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

