
Some of my old code and writings copywritten in [patent](https://patents.google.com/patent/US10210518B2/en)

* A kernel: a piece of code executed by each GPU instace.
* A kernel instance: each execution with its own input (variables) and parameters

```cpp
__device__	size_t	calculateGlobalIndex( );
__global__	void	processMonteCarloSample(...);
__device__	double	executeTransformation(...);
```



* `__device__	size_t	calculateGlobalIndex( );` calculates memory locations of the variables in the local memory andwhere the the global parameters are allocated
* `__global__	void	processMonteCarloSample(...);` parameters and variables fetched from GPU global memory
* `__device__	double	executeTransformation(...);` execute each transformation, in parallel with others


Parameters:
* Paraeters that have similar value across all kernel isntances
* 
