# Assembly language
x86 and general, assembly language


### Key terms:
#### "Destination register" means "LHS".
USe "destination register" instead of "LHS".


#### What was `rsp`?
As in:
```asm
subq   $0x18, %rsp
leaq   0x10(%rsp), %rdi
leaq   0x8(%rsp), %rsi
movq   %rsp, %rdx
```

### Register `RSP`


SP = 16-bit "Stack Pointer"

* `R*`: 64-bit (Stack Pointer)
* `E*`: 32-bit; Extended ... (Stack Pointer)
* `L*`: Lowest 8 bits of ... (Stack Pointer)

`RSP` > `ESP` > `SP` > `SPL`

RSP
ESP
SP
SPL
