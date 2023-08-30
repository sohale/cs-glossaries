My concurrency experience, also the way to conceptualise it

### My concurrency experience
MultiThread: C++(MultiThread: thread, mutex). Concurrent (Multi Process in Python and nodeJS). IPC (python). JS: (events, streams, async, generators, async). Async (JS, Python, c++promises). Coroutines (Python). C++ . GPU (CUDA). Some OpenCL.

### the way to conceptualise it
Consurrent
Distributed
Parallel

### Items
Things I implemented.
* WebWorkers
* Python IPC
* JavaScrip IPC
* JavaScript events
* JavaScript streams
* Java Threads
* zMQ: Python. Kafka
* JavaScript pthreads [see1](https://livebook.manning.com/book/webassembly-in-action/chapter-9/187)
* C++ MutltiThread (part 1)
* C++ promises (part 2)
* CUDA GPU
* OpenCL GPU
* GLSL GPU
* Python `threading`
* tensorflow gpu

* `ssh` !
* grpc
* python rpc

#### Orphan Concepts
* WebWorkers
* Coroutines
* Generators
* Async
* (Multi)process
* ns (process jail)
* Parallel GPU
* Parallel OpenMP

Need to know: (+ score)
* OpenMP ✔︎✔︎
* MPI
* OpenCL  ✔︎✔︎✔︎✔︎✔︎
* CUDA  ✔︎✔︎


See Boost sub-page on this:
Concurrent Programming
* Asio - Portable networking and other low-level I/O, including sockets, timers, hostname resolution, socket iostreams, serial ports, file descriptors and Windows HANDLEs, from Chris Kohlhoff
* Atomic - C++11-style atomic<>, from Helge Bahmann, Tim Blechmann and Andrey Semashev
* Beast - Portable HTTP, WebSocket, and network operations using only C++11 and Boost.Asio, from Vinnie Falco
* Compute - Parallel/GPU-computing library, from Kyle Lutz
* Context - (C++11) Context switching library, from Oliver Kowalke
* Coroutine - Coroutine library, from Oliver Kowalke
* Coroutine2 - (C++11) Coroutine library, from Oliver Kowalke
* Fiber - (C++11) Userland threads library, from Oliver Kowalke
* Interprocess - Shared memory, memory mapped files, process-shared mutexes, condition variables, containers and allocators, from Ion Gaztañaga
* Lockfree - Lockfree data structures, from Tim Blechmann
* MPI - Message Passing Interface library, for use in distributed-memory parallel application programming, from Douglas Gregor and Matthias Troyer
* Thread - Portable C++ multi-threading. C++03, C++11, C++14, C++17, from Anthony Williams and Vicente J. Botet Escriba
