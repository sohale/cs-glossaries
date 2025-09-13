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

Segmentation-concern/axis:
* `*S`: The `CS`, `DS`, `SS`, `ES`, `FS`, `GS`: are for Code, Data, Stack, Extra (E,F,G)
* `[ES:DI]`

Natural pairs:
* `CS:IP`

Confusions: Confusing naming apparent patterns:
* `DS`, `ES` : they don't get connected (are diagonal!) (axis/concern)

Funny names:
* `RIP`

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
Names:
* Address semantics
* pointer arithmetics
* memory addressing modes


#### Segment-offser
See below (history)

Example `mov [es:di], ax`


### Instructions
#### Instrucitons naming and historical legacy 
<!-- lineage -->

`subq`, `sub`, etc

* Examples: `subq`, `movq`, `leaq`
|  - | *q |   |  |
|----|----|----|----|
|  `sub` | `subq` | subxx  | subxxx |
|  `mov` | `movq` | movxx  | movxxx |
|  `lea` | `leaq` | leaxx  | leaxxx |

Good, proper commands:
* `adc`: add with carry
* main: `add`, `and`, `dec`, `div`
* high level: `call`, `iret`
* loop

Popular ones:
* `adc`, `call`
* `ret`
Modern ones: (popular+ modern)
`loope`, `loopne`, `loopna`, `loopz`

Weird names and their interpretations:
`aaa`, `dar`, `ter`, `das`, `aas`, `daa`
Legacy:
* `aaa` -- ASCII Adjust After Addition
* `aas` -- ASCII adjust AL after subtraction
* `daa` -- Decimal Adjust AL after Addition
* `dar`
* `das`
* `ter`

Deprecated: Dont worry about these:
`aaa`, `aas`, `daa`.

An instuction can be in XT (Real), Protcted mode, etc
Implicit hiddent context.

Legacy baar: example:
```asm
subq   $0x18, %rsp
```

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

See: Ring modes and Timescales of changing modes.

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
     * More details:
        * The 4-level paging system:
            * Canonical 48-bit virtual address
            ```txt
            [ 47 ......... 39 ] PML4 index (9 bits) = CR3.
            [ 38 ......... 30 ] PDPT index (9 bits)
            [ 29 ......... 21 ] PD index (9 bits)
            [ 20 ......... 12 ] PT index (9 bits)
            [ 11 ............ 0 ] Page offset (12 bits)
            ```
            * j
               * The top-level is page table (PML4):
            * **PML4E** (Page Map Level 4 Entry) → pointer to a PDPT (Page Directory Pointer Table).
            * **PDPTE** → pointer to a Page Directory (PD).
            * **PDE** → pointer to a Page Table (PT) or (if “PS”=1) maps a 2 MB large page directly.
            * **PTE** → pointer to a 4 KB physical page.
        * PTE: (Page Table Entry:
            “this 4 KB of virtual space maps to this physical 4 KB frame, with these permissions.”
        * PTE 0-7:
            * Bit 0: P (Present).
            * Bit 1: RW (1 = writable).
            * Bit 2: US (1 = user-mode accessible, 0 = kernel-only).
            * Bit 3: PWT (write-through).
            * Bit 4: PCD (cache disable).
            * Bit 5: A (accessed).
            * Bit 6: D (dirty; only in PTE).
            * Bit 7: PS (Page Size).
        * PTE 12-51:
            * Bits 12..51: Physical frame address (aligned).
        * PTE 52-63: Higher bits:
            NX (No-execute), ignored/reserved depending on CPU.
    * Example:
        `0x 7fff 1234 5678`
        Has 48 bits.
        * 9: (47:39)
        * 9: (38:30)
        * 9: (29:21)
        * 9: (20:12): ``
        * 12: (11:0): offset: `678`
    * TLB: (Translation Lookaside Buffer)
        * cached in the TLB (Translation Lookaside Buffer).
    * "Translation Walk"
    * `#PF (Page Fault, vector 14)`
        * Condition:
            * (Present=0): "invalid"
            * (US=0): "disallopwed adddress" while ring3
            * (RW=0): "disallopwed adddress" while writing
            * (NX=1): "disallopwed adddress" while executing.
    * IDT handler.
    * kernel (or libLISA’s bare-metal observer) p-process


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

Some modern representative CPUs: and where they are mentioned:
* Haswell microarchitecture [2]
* 3900X [4]
* 7700X [4]
* i9-13900-p [4]
* i9-13900-e [4]
* Intel-Xeon-Silver-4110 [4]
* AMD Ryzen R9 3900X [2]
* Intel Core i9-13900 [2]



The Clock domains in modern CPUs:
* 
Timescales
* Timescale of instructions
* Timescale of clock

Timescales of changing modes

Ring modes:
* 0
* 1
* 2
* 3


Some sampe

### Glossary of disambiguaitons
* "x86-64 architecture": (unverified) a mode in CPUs?
* microarchitecture (e.g. Haswell microarchitecture)
* "x86-64 long mode (64-bit), ring 0": (difference in each)

### References
Some references
* [1] Lyashko, Alexey. Mastering Assembly Programming: From instruction set to kernel module with Intel processor (p. 17). (Function). Kindle Edition. 
* [2] libLISA paper. OOPSLA24.
    * [3] libLISA program.
        * https://github.com/libLISA/liblisa
        * https://github.com/liblisa
        * https://github.com/libLISA/liblisa-emulate
    * [4] liBLISA website https://explore.liblisa.nl/instruction/0FBA2418B1

* [5] Dasgupta. PLDI'19 paper: https://doi.org/10.1145/3314221.3314601
    * Paper (ref 8 of [2]): Sandeep Dasgupta, Daejun Park, Theodoros Kasampalis, Vikram S. Adve, and Grigore Roşu. 2019. A Complete Formal Semantics of X86-64 User-Level Instruction Set Architecture. In Proceedings of the 40th ACM SIGPLAN Conference on Programming Language Design and Implementation (Phoenix, AZ, USA) (PLDI ’19). Association for Computing Machinery, New York, NY, USA, 1133–1148. https://doi.org/10.1145/3314221.3314601
* [6] Heule PLDI'16.
    * Paper (ref 15 of [2]): Stefan Heule, Eric Schkufza, Rahul Sharma, and Alex Aiken. 2016. Stratified synthesis: automatically learning the x86-64 instruction set. In Proceedings of the 37th ACM SIGPLAN Conference on Programming Language Design and Implementation (Santa Barbara, CA, USA) (PLDI ’16). Association for Computing Machinery, New York, NY, USA, 237–250. https://doi.org/10.1145/2908080.2908121
* [7] STOKE: ASPLOS'13.
    * Paper (ref 25 of [2]): Eric Schkufza, Rahul Sharma, and Alex Aiken. 2013. Stochastic superoptimization. In Proceedings of the Eighteenth International Conference on Architectural Support for Programming Languages and Operating Systems (Houston, Texas, USA) (ASPLOS ’13). Association for Computing Machinery, New York, NY, USA, 305–316. https://doi.org/10.1145/2451116.2451150
