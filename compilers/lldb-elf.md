# The `lldb` debugger
On debuggers, and executable formats ( ELF, COFF, Mach-O )

Meta:
Also see:
* https://github.com/sohale/cs-glossaries/blob/master/compilers/MLIR-plunge.md
* https://github.com/sohale/cs-glossaries/blob/master/compilers/LLVM....md (to be created)

Why lldb? Despite same scope as gdb, and abilitiy to debug non-LLVM executables:
* Better with LLVM (better inrtegation)
* Better Integration with IDEs
* LLVM-Specific Needs: (like what?)
* multithreading
* modularity: (gdb is moolothic and not modular)
* extensibility
* Legacy Codebase: Why? "Updating GDB's old codebase would require substantial effort, potentially breaking compatibility with existing workflows."
* Integration with modern IDEs (like XCode). How?

### On ELF and Executables in gneral
`lldb` is for `ELF` (Unix/Linux), `COFF` (Windows), and `Mach-O` (macOS)

### Side notes

Don't confuse `lld` and `lldb'
* ⁍ lld : LLVM linker 
* ⁍ lldb : LLVM debugger (similar to gdb)
