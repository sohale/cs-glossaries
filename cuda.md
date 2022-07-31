is a form of "massively parallel computation"

See work:
* https://github.com/sohale/GPU-CUDA-mnc
* Some of my old code and writings copywritten in [patent](https://patents.google.com/patent/US10210518B2/en)
* strides, etc: [See this nicely documented version](https://github.com/sohale/GPU-CUDA-mnc/blob/28b74d86d7bc644136f6975bf388c9fc6fa80fa5/practice/host.cu#L81)



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

Term: host

Other memories: "host memory" versus "device memory"
* host memory
* GPU global memory

See pointers.




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


Pointers: host pointer and device pointer.

Workflow: allocate, load, compue, gather.

allocation "device pointer":
* `cudaMalloc(void **, size_t);`
* `cudaFree(void *);`
First args are gpu pointers.

Transfer: Using `cudaMemcpy()`:

* `cudaMemcpy(dst, src, count, kind)`
where `cudaMemcpyKind kind`, and `void *dst`, `void *src`.

The kind arg is of type `cudaMemcpyKind`:
* `cudaMemcpyHostToDevice` : Host `->` Device
* `cudaMemcpyDeviceToHost` : Device `->` Host

So far, we have this: [source](https://github.com/sohale/GPU-CUDA-mnc/blob/4bbaa2a84a38e54387d90e73a6c063396852a8d9/practice/host.cu)
for simple gpu usage wwith transfer but without actuall parallelization (one thread on gpu).

However, the `<<<1,1>>>` is not yet parallel.


### Three classes of arguments:

[See this nicely documented version](https://github.com/sohale/GPU-CUDA-mnc/blob/28b74d86d7bc644136f6975bf388c9fc6fa80fa5/practice/host.cu#L81)

1. Class **I**. Explicit arguments (common values across all kernels: pointers, count): input args to all kernel executions -- (gpu_ptr, n)
2. Class **II**. Implicit instance-specific  (explicit variables inside)  -- (`threadIdx.`, `blockIdx.`)
3. Class **III**. Implicit `<<<,>>>` args (explicit in call, implicit inside the function) -- (`blockDim.`, `gridDim.`)

4. `strcutural`: All above are different to `strcutural`. Use to fine-tune hardware (to select and fine-tune class III)


#### From comments:

`stride`: One level beyond the call <<,>> args : The shortcomings have to be compensated by single kernel-threads using `stride`:

... These are not the hardware strucutres, but the "call" (execusion/orchestration) structure ie <<,>>

Coordinate executions: Find your share of execution (your scope)

The scope of this (current) kernel / gpu core thread: (also region of interest or gpu memory)
```
const int tid = yi * nx + xi;
...
```

### (re) Three (four) classes of arguments
Class I: `(gpu_ptr,n)`:

Class II:
```cpp
    const int xi   = threadIdx.x;
    const int yi   = blockIdx.x;
    // const int zi = gridIdx.x = 0;  // undefined
    // 0
    // 0
```

class III: The `<<<,>>>` args:
```
    // threadDim.x = 1         // always
    const int nx = blockDim.x; // 256
    const int ny = gridDim.x;  // 4
    // const int nz = nextDim.x;  // 1  // undefined
    // 1
    // 1
```
^ These (I,II,III) are not the hardware strucutres, but the "call" (execusion/orchestration) structure ie <<,>>

#### Index coordination: Invariants, meanings, dimentions, blocs, tensors, `tid`
Invariants:
```
        threadIdx.x < blockDim.x = 256
        xi < nx
        blockIdx.x < gridDim.x = 4
        yi < ny
```
Meaning:
```
       (xi, yi)  ∈  256 × 4

       (xi, yi)  ∈  nx × ny
```
Generalization:
```
       0,(xi, yi),0,0, …  ∈  ℝ^[  1 × nx × ny × 1 × … ]
                                  1 × 256 × 4 × 1 × …
    or:
       `…,0,0,(xi, yi),0,0,…    ∈    𝕝 ^ [… 1 × 1 × nx × ny × 1 × 1 …]`
       
    For:  4 × 256 = … × 1 × 1 × 4 × 256 × 1
```

Coordinate executions: Find your share of execution (your scope)

The scope of this (current) kernel / gpu core thread: (also region of interest or gpu memory)
```cpp
const int tid = yi * nx + xi;
```

```cpp
    const int tid =
                                                                             yi * nx + xi;
                                                    blockIdx.x * blockDim.x + threadIdx.x;
                               ( (0) * gridDim.x + blockIdx.x) * blockDim.x + threadIdx.x;
                  ( ( 0 + gridIdx.x) * gridDim.x + blockIdx.x) * blockDim.x + threadIdx.x;
    ( ( (0) * nextDim.x + gridIdx.x) * gridDim.x + blockIdx.x) * blockDim.x + threadIdx.x * 1
    1 * (threadIdx.x +  blockDim.x * (  blockIdx.x + gridDim.x * ( gridIdx.x +  nextDim.x * (0) ) 
    
((( (0 + 0) * nextDim.x + gridIdx.x) * gridDim.x + blockIdx.x) * blockDim.x + threadIdx.x) * 1
                                         ( ( ( (0 + iw=0) * nz + iz) * ny + iy) * nx + ix) * 1
```

Only if single-block (ny==1): `int begin = xi, stride = nx;`

`stride`: One level beyond the call <<,>> args : The shortcomings have to be compensated by single kernel-threads using `stride`:
```cpp
int stride = nx * ny;
int begin = tid;
```


```cpp
    if (begin < n)
    for (int i = begin; i < n; i += stride)
    {
        // Execute a single logical thread's process
        gpu_ptr[i] *= 1.5f;


        // process1<float, int>(gpu_ptr, i);
        // A unit of work, most fine-grained parallelisable unit of execusion:
    }
```


A unit of work, most fine-grained parallelisable unit of execusion:
```cpp
template <typename ElemType, typename SizeT>
void process1(ElemType *gpu_ptr, SizeT i)
{
    gpu_ptr[i] *= 1.5f;  // inplace
}
```
Howerver, causes a problem:
>    identifier "process1<float, int> " is undefined in device code
    
#### Diagram
For confusions regarding `tid`:

`(ix, iy)` in `[nx × ny]` matrix

in fact, a `1 × nx × ny` tensor.

Then show the `stride` (residue).

## Potential bottlenecks:
* Matrix `L` is accessed by all kernels.
   * Mitigation: copy for all kernels. Copy for every few of them. etc.
   * Mitigation: (cont.) Using shared memory for them?
   * Mitigation: (cont.) Using somehow local memory. Also check vectorised: Somehow local access.
   * Mitigation: (vague): Somehow using Cache
   * Mitigation: (vague): Somehow using registers of each kernel? Can we preload them? Does L fit in them?
   * Mitigation: (cont.): The input (w) vector elements may not be contiguous, but strided.
   * No racing condition, but it may not be fast. 

## Commands
### NVCC guide
* `.ptx` is PTX intermediate assembly file
* `.cu` CUDA source file, containing host code and device functions
### nvcc
Usage:
`nvcc mysourcefile.cu -o outputfile`

```bash
docker run --rm -it -v $(pwd):$(pwd) -w $(pwd)   nvidia/cuda:11.7.0-devel-ubuntu20.04    nvcc     mysource.cu    -o x.out
```
### nvprof

### nvidia-smi
NVIDIA-SMI

## Read
* [T1]: A [tutorial](https://cuda-tutorial.readthedocs.io/en/latest/tutorials/tutorial01/)
* [2]: [Ref used in T1](https://developer.nvidia.com/blog/even-easier-introduction-cuda/)

## Appendix
* Implementation of the Gamma Incomplete Inverse function in Cephes Mathematical Library (version 2.7) in C (is nested. Also recursive?)
