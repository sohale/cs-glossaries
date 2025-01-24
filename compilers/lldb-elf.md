# The `lldb` debugger
On debuggers, and executable formats ( ELF, COFF, Mach-O )

Meta:
Also see:
* https://github.com/sohale/cs-glossaries/blob/master/compilers/MLIR-plunge.md
* https://github.com/sohale/cs-glossaries/blob/master/compilers/LLVM....md (to be created)

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


### On ELF and Executables in gneral
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

### Side notes

Don't confuse `lld` and `lldb'
* ⁍ lld : LLVM linker 
* ⁍ lldb : LLVM debugger (similar to gdb)
