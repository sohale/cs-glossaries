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

### intel ISA chatacteristics:
* Stack grows downwards
* Little endian


Intel: Little-endian, Motorolla: Big-endian

Stack grows downwards:
Allocation: `RSP -= 6`.

#### intel assembly convensions:
* "Destination register", LHS, is written on right: `subq   $0x18, %rsp`
* `$` means decimal
* `()` mean indirect addressing (`PEEK`)
* `0x10(%rsp)` offsetting: `0x10(%rsp)` means RSP[+16]
* `%` means ...

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
