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

### Intel ISA chatacteristics:
* Stack grows downwards
* Little endian

#### Details
* Endian-ness
    * Camps: Intel: Little-endian, Motorolla: Big-endian
        * x86, PowerPC, MIPS, SPARC, EE, Cell SPUs

* Stack growth direction:
    * Stack grows downwards:
    * Allocation: `RSP -= 6`.
        * Names: Stack Allocation, `alloca`

#### intel assembly convensions:
* "Destination register", LHS, is written on right: `subq   $0x18, %rsp`
    * The assembly syntax is "source" → "destination": `leaq src, dst`
        * Discoursive note: Is a `cp` (copy) mindset. Also same as `ln` command.
* `$` means ~~decimal~~ literal number
    * As opposed to?
        * "indirect" offset(?) (Offset in indirect adressing)
        * ...
    * Why did I think it is hexa? `$234` was hexa in Simons' Basic. `A$` meant variables of type string (`AB$(X,Y)`, `CHR$()`).
* `()` mean indirect addressing (`PEEK`)
    * Isn't it odd? Should have used `[]`
* `0x10(%rsp)` offsetting: `0x10(%rsp)` means RSP[+16]
* `%` means ... (see SSA-ness)

Intel assembly lingo / jargon
* Indirect addressing
* Destination
* offset

Modern lingo:
* "Stack growth direction", can be considerd a function of: ISA, ABI, brand, "calling convention", "compiler and architecture", "platform"
* SSA

#### "Typical modes" (Mnemonical Precedence)
My previous understanding as I remember: Typical modes
* "flat memory mode with 64-bit addressing". `R--` registres are used: RSP, etc.
* "16-bit mode" (e.g., 8086, XT)
* "16-bit mode" (e.g., 8086, XT)
* TBC

### Registers
#### On Naming of registers:
##### Register `RSP`

SP = 16-bit "Stack Pointer"

* `R*`: 64-bit (Stack Pointer)
* `E*`: 32-bit; Extended ... (Stack Pointer)
* `L*`: Lowest 8 bits of ... (Stack Pointer)
* `*X`: e.g. `AX`

##### Naming (sub-)systems in Intel assembly:
Naming 1: For Stack Pointer (SP): `RSP` > `ESP` > `SP` > `SPL`
* RSP
* ESP
* SP
* SPL: No support for 8-bit stack pointer in x86. Akin to `AL`.

Naming 2: For ...:
* `AL` (also see `SPL`)
* `AH`
* `AX`
* No Such thing as `A`?

Naming 3: Indexing registers: (for SI, DI)
For `SI`, `DI`:
* DS, DI
* ES, SI

Segmentatoin-concern/axis:

Confusions: Confusing naming apparent patterns:
* `DS`, `ES` : they don't get connected (are diagonal!) (axis/concern)

#### List of Registers
Using `(lldb)` command: `re read`:
```
General Purpose Registers:
       rax = 0x00005555555551a0  MYEXE`main
       rbx = 0x0000000000000000
       rcx = 0x0000555555557e20  MYEXE`__do_global_dtors_aux_fini_array_entry
       rdx = 0x00007fffffffe028
       rdi = 0x0000000000000001
       rsi = 0x00007fffffffe018
       rbp = 0x0000000000000001
       rsp = 0x00007fffffffdef0
        r8 = 0x00007ffff7f95f10
        r9 = 0x00007ffff7fc9040
       r10 = 0x00007ffff7fc3908
       r11 = 0x00007ffff7fde660
       r12 = 0x00007fffffffe018
       r13 = 0x00005555555551a0  MYEXE`main
       r14 = 0x0000555555557e20  MYEXE`__do_global_dtors_aux_fini_array_entry
       r15 = 0x00007ffff7ffd040
       rip = 0x00005555555551a4  MYEXE`main + 4
    rflags = 0x0000000000000206
        cs = 0x0000000000000033
        fs = 0x0000000000000000
        gs = 0x0000000000000000
        ss = 0x000000000000002b
        ds = 0x0000000000000000
        es = 0x0000000000000000
```

### Address semantics
* pointer arithmetics

#### Segment-offser
See below (history)

Example `mov [es:di], ax`



### History
* History of Stack pointers:
    * The Intel 8008 (1972) did not have a dedicated stack pointer register!
Instead, stack management was manual.
    * The Intel 4004 (1971) used the "4-level hardware stack", no stack.
* History of 4004
    * The "4-level hardware stack" (4004):
        * For storing return addresses (for `ret`, `call`)
        * depth was 4 ! (stack overflow!)
        * width = 12-bit (width of `PC`)
        * Stack was fixed-size ! (depth)
        * It was a "hardware stack"
            * Yet, Pioneered stack-based control (in microprocessors).
        * No overflow handling!
    * More on 4004:
        * Had 2,300 transistors
        * Program was on ROM (4096 bytes!)

* Modes:
    * **Real** mode
    * **Protected** Mode: 16-bit
        * **Virtual** 8086 Mode (Emulates real mode inside protected mode)
        * ("extended Protected Mode")
    * **Protected** Mode: 32-Bit (flat, multitasking)
    * **Long** Mode (64-bit)
* Years:
    * Real: XT, 8086
    * Protected-16: AT, 80286
        * Virtual
    * (extended Protected Mode)
    * Protected-32: 386
    * Long: Pentium 4

* **Memory Protection** (in context of 80286; AT; "Protected Mode")
    * Separeted memory of programs, or OS (processes)
    * prevent one program from interfering with the memory of another program
    * stability, security, and reliability, of multitasking. versus. crashes, corruption, or security vulnerabilities.
    * No protection = "Real Mode"
    * Types of protection:
        * "No protection" ("Real Mode")
        * "Segmentation Based" "Protected Mode"
        *     ? "Privilege-Based Protection" (rings)
        * extended Protected Mode (virtual memory)
        * Paging-Based Protection (80386+)
    * Clarification:
        * `Segment:Offset` is NOT "Segmentation"
        * Segmentation is not Paging
        * Real mode: `Segment:Offset`, NOT "Segmentation", NOT "Paging"
        * Protected mode: NOT `Segment:Offset`, YES: NOT "Segmentation", YES: "Paging"
        * Timeline of clusters:
            * 8086: No protection, `Segment:Offset`
            * 80286: "segmentation-based protection"
            * 80386: "paging" for projeciton, paging for virtual
            * P4+: "paging" for projeciton, paging for virtual
        * address space:
            * pre-8086: 64 KB
            * 8086: 1 MB    (to extend the 64 KB! Still  16-bit registers! )
            * 80286: 16 MB
            * 80386: 4 GB
            * P4+: ? GB
    * "General Protection Fault (GPF)"
        * access permissions:
            * Read-only or read/write
            * write-only (what?)
            * Executable or non-executable
            * `R`, `W`, `X`
        * virtual memory space
            * for each process
            * paging mechanism
                * map (ogical addresses to physical addresses)
        * Privilege levels: 4
            * 0--3: Kernel (0) to User (3) ;  `=>` are four.
            * Ring 0, Ring 1, Ring 2, Ring 3
            * Ring 0 can access all memory and hardware
        * "Segment Descriptor"s
            * one SD for each segment
            * in GDT: Global Descriptor Table (GDT)
            * in LDT: Local Descriptor Table (LDT)
            * Attributes: (Base address, size (limit), access rights)
        * "segment selector"
            * Each "memory access" uses a "segment selector" to reference a "Segment Descriptor"
            * Segment selectors:
                * `CS`
                * `DS`
                * `SS`
     * Paging-Based Protection (80386+)
         * fixed-size blocks called "pages" (4 KB)
         * Each proces: Page Table
         * Modes: Read-Only, Read/Write, or No Execute
         * State: Present or Not present (for virtual memory)
             * If accessed "Not Present" => causing a page fault (if not loaded in RAM)
    * "Segments", various meanings:
        * overlap (16-byte base)
        * segment registers
        * 80286: segmentation was redefined
            * Descriptor: base, lmit, permissions(`R,W,X`). Also: "Privilege Levels", also paging (not 80286), also LDT (multi-tasking)
                * Local Descriptor Table (LDT) -- for multi-tasking
                * "Descriptor Tables" <---> Only for "Memory Isolation"
                    * What is "Memory Isolation" versus "memory protection"?
            * Yet, flat memory model?
            * "Protected Mode" was "still cumbersome"
        * 80386:
            * Optional segmentation!
            * added Paging
            * Paging: flat (non-segmentation)
            * Segmentation (optional): non-flat
            * "segmentation" was largely minimized in favor of "paging".
* "PAE": Physical Address Extension

### References
Some references
* [1] Lyashko, Alexey. Mastering Assembly Programming: From instruction set to kernel module with Intel processor (p. 17). (Function). Kindle Edition. 
