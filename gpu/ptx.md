# Teach Yourself PTX
Hard-core GPU / CUDA programming

### Dive into the first simple example: The `add_numbers` kernel
Let's start with simple trivial example:
```ptx
.version 7.0
.target sm_30
.address_size 64

.global .entry add_numbers(
    .param .u64 ptrA,
    .param .u64 ptrB,
    .param .u64 ptrResult
)
{
    .reg .u64 a;
    .reg .u64 b;
    .reg .u64 result;

    ld.param.u64 a, [ptrA];
    ld.param.u64 b, [ptrB];

    add.u64 result, a, b;

    st.global.u64 [ptrResult], result;
    // or:
    // st.param.u64 [ptrResult], result;

}
```

`add_numbers`: Kernel function to add two integers.

Takes pointers to two input values and a pointer to the `result` location.

#### The `.target`
The `.target` directive, specifies the "**virtual architecture**" = "**compute capability**".

`.target sm_30`

"compute capability":
defines/impacts the feature set and capabilities of the GPU architecture, including aspects like 
* the number of threads per block,
* warp size,
* memory architecture,
* available instructions,
* available optimizations,
* etc

Possible targets:
`sm_30`, `sm_35`, `sm_37`; `sm_50`, `sm_52`, `sm_53`; `sm_60`, `sm_61`, `sm_62`; `sm_70`, `sm_72`; `sm_75`; `sm_80`, `sm_86`; `sm_90`

Multiple targets: makes it compatible with all specified (not recommended).

#### The `ld`
In the `ld.param.u64 a, [ptrA];`: the *param*, could be:
* `local`
* `reg`
* `shared`
* `global`
* `const`
* `tex`
(See below for explanations of each)

Note: `ld.reg.*` & `st.reg.*` will be meaningless (registers).

It can be
* `ld.*.*`
* `st.*.*`

#### The `st`
In above example, we could write either:
* `st.global.u64 [ptrResult], result;`
* `st.param.u64 [ptrResult], result;`

What difference does it make?
What is the difference / impact?


#### Memory spaces
* `reg`
* `shared` -- On-chip memory shared among threads in the "same block". limited size.
* `local` -- off-chip memory, accessible only by the thread
* `global` -- Largest and slowest memory, (all threads across all blocks)
* `const` -- On-chip read-only memory, suitable for data that does not change over the course of a kernel execution and is shared across threads
* `tex` -- (read-only, cached and optimized for texture fetching)

Notes:
* Sorted by speed. `local` memory is slower than `shared` memory.
* spill-over: `local` is used for spill-over storage when registers are full.

Speed:

* reg > shared > const > tex > global > local*

Q:
* `grid`-shared?
* is `local` slower than `shared`?
* sizes?
* on-chip: which chip?
* const is "shared across threads"? all blocks? all grid? all SM?

The "same"-ness table:
* `local` -- same thread
* `reg`
* `shared` -- same block
* `global`
* `const`
* `tex`

The size limit table:
* `local` -- ?
* `reg` -- very few
* `shared` -- limited size
* `global`
* `const`
* `tex`

#### address size
`.address_size 64`


### kernel arguments

```ptx
.global .entry add_numbers( ... )
{
    // Thread index (in x,y,z) (Thread Index in a Block)
    mov.u32 %r1, %tid.x;
    
    // Block index (in x,y,z) (Block Index in a Grid)
    mov.u32 %r4, %ctaid.x;
    
    // Number of threads in block (x,y,z) (Block Dimension (Size))
    mov.u32 %r7, %ntid.x;
    
    // Number of blocks in grid (x,y,z) (Grid Dimension (Size))
    mov.u32 %r10, %nctaid.x;
    
    // Kernel-time parameter, aka kernel parameter(s)
    // Load 64-bit value from first kernel parameter
    .param .u64 param0;
    ld.param.u64 %rd1, [param0];
    
    // // Define floating-point registers
    .reg .f32 %f1, %f2, %f3;
    
    add.f32 %f3, %f1, %f2;

}
```

## DPX Instrucitons


```ptx
arch = sm_90a
```

## References

### References for PTX Instructions

### References for DPX Instructions
- [DPX Instruction in PTX - NVIDIA Developer Forums](https://forums.developer.nvidia.com/t/dpx-instruction-in-ptx/278809)
- [CUDA C Programming Guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/)
