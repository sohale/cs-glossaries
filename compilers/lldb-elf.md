# The `lldb` debugger
On debuggers, and executable formats ( ELF, COFF, Mach-O )

Meta:
Also see:
* https://github.com/sohale/cs-glossaries/blob/master/compilers/MLIR-plunge.md
* https://github.com/sohale/cs-glossaries/blob/master/compilers/LLVM....md (to be created)

Why lldb? Despite same scope as gdb, and abilitiy to debug non-LLVM executables:
* Better with LLVM (better inrtegation)
* Better Integration with IDEs
* multithreading
* modularity
* extensibility

### On ELF and Executables in gneral
`lldb` is for `ELF` (Unix/Linux), `COFF` (Windows), and `Mach-O` (macOS)

### Side notes

Don't confuse `lld` and `lldb'
* ⁍ lld : LLVM linker 
* ⁍ lldb : LLVM debugger (similar to gdb)
