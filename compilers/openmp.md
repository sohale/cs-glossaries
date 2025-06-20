

"Introduction to OpenMP 02" - Tim Mattson (Intel):

* part 1. Module 1. [https://www.youtube.com/watch?v=cMWGeJyrc9w] : Power = CV²f.


* part 2 Module 1: [https://www.youtube.com/watch?v=6jFkNjhJ-Z4] Parallel vs Concurrency

*

#### Glossary of concepts (ToC)
* hyper-threading

* logical processors (CPUs)
* NUMA node
* Cores per socket
* Threads per core

* (explicit) "data-sharing clause" (`shared`, `private`, `firstprivate`, etc.).
* how a variable is shared

* every variable accessed inside the parallel region (there is such concept: begin onto and total)

* complicance: OpenMP 4.x compliance

* annotated (fully annotated, re-annotated) source file

* runtime behavior control options (is rich)


* Nested  i.e. Nested Parallelism control: (set, unset), runtime, code-time (`omp_set_nested()`)
* Thread Count (Custom): num-threads: `OMP_NUM_THREADS`: control: customisatble, runtime
* to Pin a thread (to a core): proc-bind: (`OMP_PROC_BIND`). controllable. runtime.
* Thread Placement x`PLACES`. controllable. runtime.
* verbose ( `OMP_DISPLAY_ENV`)
* debuggability: make serial


#### Concepts: items
The `shared(std::cout, data, total_sum, N)`

The ``default(none)`:
Using `default(none)` is strongly encouraged for safety


runtime behavior control options: a rich set of options to control runtime behavior

Nested
`omp_set_nested(1);`

* Custom Thread Count (`OMP_NUM_THREADS`) or serial (for debug)
* Disable Nested Parallelism (`OMP_NESTED`)
* Pin Threads to Cores (`OMP_PROC_BIND`)
* Thread Placement (`OMP_PLACES`)
* verbose ( `OMP_DISPLAY_ENV`)

```bash
./execfile
OMP_NUM_THREADS=2 ./execfile
OMP_NUM_THREADS=4 ./execfile
OMP_NUM_THREADS=8 ./execfile
OMP_NUM_THREADS=1 ./execfile # serial, for debug
OMP_NESTED=true ./execfile
OMP_PROC_BIND=true ./execfile
OMP_PROC_BIND=spread ./execfile
OMP_PROC_BIND=close ./execfile
OMP_DISPLAY_ENV=true ./execfile. # verbose
```

See some env (parameters):
```txt
OPENMP DISPLAY ENVIRONMENT BEGIN
   _OPENMP='201611'
  [host] OMP_AFFINITY_FORMAT='OMP: pid %P tid %i thread %n bound to OS proc set {%A}'
  [host] OMP_ALLOCATOR='omp_default_mem_alloc'
  [host] OMP_CANCELLATION='FALSE'
  [host] OMP_DEFAULT_DEVICE='0'
  [host] OMP_DISPLAY_AFFINITY='FALSE'
  [host] OMP_DISPLAY_ENV='TRUE'
  [host] OMP_DYNAMIC='FALSE'
  [host] OMP_MAX_ACTIVE_LEVELS='1'
  [host] OMP_MAX_TASK_PRIORITY='0'
  [host] OMP_NESTED: deprecated; max-active-levels-var=1
  [host] OMP_NUM_TEAMS='0'
  [host] OMP_NUM_THREADS: value is not defined
  [host] OMP_PLACES: value is not defined
  [host] OMP_PROC_BIND='false'
  [host] OMP_SCHEDULE='static'
  [host] OMP_STACKSIZE='8M'
  [host] OMP_TARGET_OFFLOAD=DEFAULT
  [host] OMP_TEAMS_THREAD_LIMIT='0'
  [host] OMP_THREAD_LIMIT='2147483647'
  [host] OMP_TOOL='enabled'
  [host] OMP_TOOL_LIBRARIES: value is not defined
  [host] OMP_TOOL_VERBOSE_INIT: value is not defined
  [host] OMP_WAIT_POLICY='PASSIVE'
OPENMP DISPLAY ENVIRONMENT END
```

### Practical

A sample program `openmp_features_1.cpp` :

```cpp
#include <iostream>
#include <vector>
#include <omp.h>
#include <chrono>

void demo_openmp_features() {
    constexpr int N = 100;

    std::vector<int> data(N, 1);
    int total_sum = 0;

    // Outer parallel region
    #pragma omp parallel default(none) shared(std::cout, data, total_sum)
    {
        int tid = omp_get_thread_num();
        int nthreads = omp_get_num_threads();

        // SINGLE (only one thread does this)
        #pragma omp single
        {
            std::cout << "[single] Total threads: " << nthreads << "\n";
        }

        // BARRIER is implicit here

        // REDUCTION with FOR
        #pragma omp for reduction(+:total_sum) schedule(dynamic, 10)
        for (int i = 0; i < N; ++i) {
            total_sum += data[i];
        }

        // ATOMIC example
        static int atomic_counter = 0;
        #pragma omp atomic
        atomic_counter++;

        // SECTIONS: each executed by one thread
        #pragma omp sections
        {
            #pragma omp section
            std::cout << "[sections] Hello from section 1 (thread " << tid << ")\n";

            #pragma omp section
            std::cout << "[sections] Hello from section 2 (thread " << tid << ")\n";
        }

        // TASKS: dynamic parallelism
        #pragma omp single
        {
            #pragma omp task
            std::cout << "[task] Executed in parallel (1)\n";

            #pragma omp task
            std::cout << "[task] Executed in parallel (2)\n";

            #pragma omp taskwait
            std::cout << "[taskwait] Tasks completed\n";
        }

        // CRITICAL section (serialization)
        #pragma omp critical
        {
            std::cout << "[critical] Thread " << tid << " entering critical section\n";
        }

        // NESTED PARALLELISM (must be enabled)
        #pragma omp parallel if(omp_get_thread_num() == 0)
        {
            std::cout << "[nested] Inner thread " << omp_get_thread_num() << " inside nested region\n";
        }
    }

    std::cout << "[main] Final total sum = " << total_sum << "\n";

    // ?
    #pragma omp parallel
    {
      int tid = omp_get_thread_num();
      printf("[info] Thread %d is alive\n", tid);
    }
}

int main() {
    // Enable nested parallelism
    omp_set_nested(1);

    // Print OpenMP environment info
    std::cout << "OMP_NUM_THREADS = " << omp_get_max_threads() << "\n";
    std::cout << "OMP_NESTED      = " << omp_get_nested() << "\n";

    demo_openmp_features();

    return 0;
}
```
Run
```bash

OMP_NUM_THREADS=4 ./openmp_features

```


Useful commands:

CPU Model name, total logical processors (CPUs), physical core count (Cores per socket and Threads per core), NUMA nodes.

```bash

lscpu


#If siblings > cpu cores, hyper-threading is on.
grep "^siblings" /proc/cpuinfo | uniq
#siblings	: 4
grep "^cpu cores" /proc/cpuinfo | uniq
#cpu cores	: 4

# clang++ ≥ 12.0
clang --version
# Ubuntu clang version 15.0.7

# g++ ≥ 9.0
g++ --version
# g++ (Ubuntu 12.3.0-1ubuntu1~22.04) 12.3.0

```

* Clang requires `libomp-dev`.
* Clang flags: needed: (`-fopenmp` `-lomp`).
* Clang ≥ 12.0
* g++: reliable OpenMP support out of the box
* g++ ≥ 9.0

clang++ -fopenmp -O2 -std=c++17 openmp_features_1.cpp -o openmp_features

Typical troubleshooting:
When `libomp-*dev` or its varianbt is not installed:
```txt
openmp_features_1.cpp:3:10: fatal error: 'omp.h' file not found
#include <omp.h>
         ^~~~~~~
1 error generated.
```

I ended up customising the version of (changing the name) `libomp-dev`.
```
sudo apt install libomp-15-dev libomp-15-doc
```

When ...:
```cpp
openmp_features_1.cpp:28:9: error: variable 'N' must have explicitly specified data sharing attributes
        for (int i = 0; i < N; ++i) {
        ^~~
openmp_features_1.cpp:13:34: note: explicit data sharing attribute requested here
    #pragma omp parallel default(none) shared(std::cout, data, total_sum)
                                 ^
1 error generated.
```
Reason:

* used `N` without declaring how it's "shared".

* N is used without being declared `shared` or `private`.

default(none) requires every variable accessed inside the parallel region to have an explicit "data-sharing clause" (shared, private, firstprivate, etc.).
