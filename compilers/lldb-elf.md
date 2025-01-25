# The `lldb` debugger
On debuggers, and executable formats ( ELF, COFF, Mach-O )

Meta:
Also see:
* https://github.com/sohale/cs-glossaries/blob/master/compilers/MLIR-plunge.md
* https://github.com/sohale/cs-glossaries/blob/master/compilers/LLVM....md (to be created)

### Why LLDB
Why lldb? Despite same scope as gdb, and abilitiy to debug non-LLVM executables:

(Why also happen to invent a new debugger? this time, right? for a reason independent of LLVM? and at most, LLVM guiding it in a differnt mindset? It seems not enough )

* Basically doing GDB again in a fresh way
   * Better integration with modern IDEs (like XCode). How?
   * multithreading (non llvm-specific)
   * tailored for modern toolchains (and IDEs)
* LLVM-Specific Needs, Integration and Extention:
   * LLVM-Specific Needs: (like what?)
      * multithreading (LLVM needs)
      * Debugging applications built with LLVM/Clang toolchains.
      * Debugging modern features like multithreaded (Already said) or vectorized code with LLVM IR support.
   * LLVM-Specific Integation
      * Better with LLVM (better inrtegation)
         * (Like what?)
   * LLVM-Specific Extention:
      * modularity: (gdb is moolothic and not modular)
      * extensibility
      * Legacy Codebase: Why? "Updating GDB's old codebase would require substantial effort, potentially breaking compatibility with existing workflows."

### LLDB Usage
Overview
```python
target create	# Load an executable into LLDB: UNLOADED (i.e. Loadable)
breakpoint set	# by: "function name" or "line number"
run	# LOAD and START the program execution.
frame variable	# List all variables in the current frame.
memory read <address>
step	# Step into (function call)
next	# Step over (the current line/instruction).
continue
```

More specific:
```
breakpoint list
```
output:
```
Current breakpoints:
1: name = 'vector_calc', locations = 1
  1.1: where = MYEXE`vector_calc, address = loop_vector_computation[0x0000000000001130], unresolved, hit count = 0

2: name = 'main', locations = 1
  2.1: where = MYEXE`main, address = loop_vector_computation[0x00000000000011a0], unresolved, hit count = 0
```

```
frame variable
```

### On debugging
In general
#### Debugging States
In general, but based on `lldb`
* - : nothing loaded yet
* targeted : specified the Loaded file and raw-loaded into memory: Loadable ( not loaded)
* Loaded (not run)
* running (not paused)
* running: paused
* (finished?)
* (core dump-ed?)

#### DAP = Debug Adapter Protocol

DAP: protocol through which various IDEs interact with debuggers.

"LLDB-DAP"

------

## On ELF and Executables in gneral
`lldb` is for `ELF` (Unix/Linux), `COFF` (Windows), and `Mach-O` (macOS)

* ELF (Executable and Linkable Format)
* Mach-O (Mach Object File Format)
* PE/COFF (Portable Executable / Common Object File Format)

LLDB support for windows is not as good as MacOS and Linux.


### Core Dump
One can debug a Core Dump!
```bash
lldb -c core.dump ./my_program
```
What makes it possible? Does it conatain the PC?

Core Dump in general.

### Attaching a process
Can one attach any pid that is running? or it has to be paused?
```bash
lldb --attach-pid <PID>
```

#### Call Frame Information (CFI)

Such lines in `.s` assembly source files:
```asm
    .cfi_startproc
    .cfi_endproc
    .cfi_startproc
    .cfi_def_cfa_offset 32
    .cfi_def_cfa_offset 8
    .cfi_endproc
```
Metadata for
* exception handling
* debugger "lldb"
to understand the "stack layout"
at different points during program execution.

### Side notes

Don't confuse `lld` and `lldb'
* ⁍ lld : LLVM linker 
* ⁍ lldb : LLVM debugger (similar to gdb)
