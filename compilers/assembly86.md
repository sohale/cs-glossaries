# Assembly language
x86 and general, assembly language


### Key terms:
#### "Destination register" means "LHS".
Use "destination register" instead of "LHS".
#### "immediate value" (a constant).
`$` will mean immediate value.

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

#### Typical modes
* "flat memory mode with 64-bit addressing". `R--` registres are used: RSP, etc.
* "16-bit mode" (e.g., 8086, XT)
* "16-bit mode" (e.g., 8086, XT)
### Register `RSP`


SP = 16-bit "Stack Pointer"

* `R*`: 64-bit (Stack Pointer)
* `E*`: 32-bit; Extended ... (Stack Pointer)
* `L*`: Lowest 8 bits of ... (Stack Pointer)

`RSP` > `ESP` > `SP` > `SPL`

* RSP
* ESP
* SP
* SPL: No support for 8-bit stack pointer in x86.

### History
* The Intel 8008 (1972) did not have a dedicated stack pointer register!
Instead, stack management was manual.
* The Intel 4004 (1971) used the "4-level hardware stack".
* The "4-level hardware stack " of 4004, ...
* Modes:
* Real mode
    * Protected Mode
    * Virtual 8086 Mode (Emulates real mode inside protected mode)
    * 32-Bit Protected Mode (flat, multitasking)
    * Long Mode (64-bit)
