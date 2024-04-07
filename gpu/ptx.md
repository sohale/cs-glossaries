
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

`.address_size 64`

####
* `local` -- off-chip memory, accessible only by the thread
* `reg`
* `shared`
* `global`
* `const`
* `tex`



* spill-over: `local` is used for spill-over storage when registers are full.
