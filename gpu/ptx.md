
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


`.target sm_30`

#### The `ld`
In the `ld.param.u64 a, [ptrA];`: the *param*, could be:
* `local`
* `reg`
* `shared`
* `global`
* `const`
* `tex`

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
