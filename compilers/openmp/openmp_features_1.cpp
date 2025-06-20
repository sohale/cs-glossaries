#include <iostream>
#include <vector>
#include <omp.h>
#include <chrono>

void demo_openmp_features() {
    constexpr int N = 100;
    // Even though N is constexpr, OpenMP doesn’t assume it’s globally visible in this context.

    std::vector<int> data(N, 1);
    int total_sum = 0;

    // Outer parallel region
    #pragma omp parallel default(none) shared(std::cout, data, total_sum, N)
    // N was missing ^. It is added now.
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
            // ^ need to declare how it's shared (all vriables)

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
