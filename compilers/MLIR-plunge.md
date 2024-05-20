# Plunge into MLIR
<!-- the plunge. plungeLang -->

Assumptions [^assumptions].
[^assumptions]: You are familiar with LLVM. ( You have tried an executable ).

1. Without any dialects,
the operations that MLIR can handle are extremely limited.
MLIR is all about dialects.

    1.1. You cannot even have 'func'

    1.2. Core dialects: builtin, func, arith, and memref.

    1.3. Think of minimalism of C, vs its standard library and (Linux's) stdlib.

