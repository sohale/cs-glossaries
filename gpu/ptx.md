
# Teach Yourself PTX
Hard-core GPU / CUDA programming

Let's start with simple
```ptx
.version 7.0
.target sm_30
.address_size 64

// Kernel function to add two integers
.global .entry add_numbers(
    .param .u64 ptrA,
    .param .u64 ptrB,
    .param .u64 ptrResult
)
{
    // takes pointers to two input values and a pointer to the result location ^

    // a,b, result
    // C = A + B
    .reg .u64 A;
    .reg .u64 B;
    .reg .u64 C;

    ld.param.u64 A, [ptrA];
    ld.param.u64 B, [ptrB];
    
    add.u64 C, A, B;

    st.global.u64 [ptrResult], C;
    // or:
    // st.param.u64 [_result], result;

}
```

`.target sm_30`

* `st.global.u64 [ptrResult], C;`

* `st.param.u64 [_result], result;`

`.address_size 64`
