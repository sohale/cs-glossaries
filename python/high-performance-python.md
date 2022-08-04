High performance computing solutions in Python:


List:
* JAX
* Numexpr
* Numba
* Pyjion
* Classic:
   * Numpy
   * Cython

* Nympy binding
   * CUDA
   * openMP
   * OpenCL

List of some software that use them
* https://annarchy.github.io/

Explanation:
* **Numba**:  [link](https://numba.pydata.org/)
   * "Numba is an open source JIT compiler that translates a subset of Python and NumPy code into fast machine code."
   *  Uses LLVM
   *  `@njit`
* **Pyjion**: [link](https://pyjion.readthedocs.io/en/latest/)
   * Pyjion drop-in JIT compiler for CPython 3.10.
   * "Pyjion can make your Python code execute faster without any code changes." "Pyjion is a JIT compiler. It compiles native CPython bytecode into machine code. Without Pyjion, CPython uses a master evaluation loop (called the frame evaluation loop) to iterate over opcodes The Pyjion compiler has 3 main stages:"
      * "Build a “stack table” of the abstract types at each opcode position"
      * "Compile CPython opcodes into IL (ECMA335 CIL) instructions"
      * "Emit the CIL opcodes into the .NET EE compiler to convert to native machine code/assembly"

   * requires dot net ".net"
   * sandbox: [trypyjion.com](trypyjion.com)
   * Commandline: `pyjion`
