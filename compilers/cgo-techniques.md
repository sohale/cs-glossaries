# CGO Techniques
List of CGO & CPU techniques, and the categories of each.

Meta: What it is about[^whatabout] vs genuine[^genuine-cgo] techniques.

[^whatabout]:
      ## What it is about
      1. In a LS[^leansystem] with macro & generative, do we miss them? beyond dev-comfort.
      2. The programming languages like C++, what will we miss in terms of speed (other than abstractions). (They are better than assembly, I know)
      
      About 1:
      <!-- current-stack-only --> (todo) <!-- (also written below) As consequences of current "Design". The Design = the currnt design, done deentralised by distributed efforts, each one for themselves, in competiion, and by market forces, ... -->
      1. The wont miss cases (wont be missed by LS)
          * to trick CPU from the narrow compressed-code (ISA). (e.g. cache)
          * MLIR: streamlining of the
          * the instruciton-level paralelism?
          * legacy code
          * automatic optimisaiton so that the user does not have to "think".
                * <!-- (alternatuve: use multiple realisaitons! one can be used to test antoher! test-level latching, runtime-level latching, etc) -->
                * They want to have one reference of truth. <!-- nope. OO can do better. -->
          * Making old code, optimised for the new architecture (FORTRAN approach)
          * Or the mmodule that connects to it does not have to think

      As consequence of the current design of the rest:
      * decided to use stack
      * decide to use ISA s in certain style (nonRISC, etc)
      * decided to use dynamic bidning in OOP
      * decided to use (in C++): preallocated
      * decided to use global allocator (C)
      * decide to use this pattern of smart pointers
      * decided to use flat-global garbage collector (GC) and opaque mechanism (i.e. replacable)
      


      About 2:
      2. The beyond-...., .... .
      
      HW:
      * Pipelining. Without that?

[^genuine-cgo]: Genuine CGO:
    * trying multiple "performance hypothesis" lines (equivalent to speculations?)
    * wrewer
    * (note that these items on this list are not individual techniques, but themse, and more abstract technuiques)

## CGO
### CGO Authentic Techniques
### Meta CGO: Few abstract techniques
#### Enable multiple hypothesis lines
### CGO CSO[^current-stack-only] Techniques
[^current-stack-only]: (todo) <!-- As consequences of current "Design". The Design = the currnt design, done deentralised by distributed efforts, each one for themselves, in competiion, and by market forces, -->


## HW (CPU/GPU) Performance
ISA vs Authentic.
This includes hot-spot & runtime-profileing.

### ISA PU Performance
### Authentic PU Performance

[^leansystem]: -
