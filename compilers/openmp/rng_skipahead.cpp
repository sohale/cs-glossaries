
#include <cstdint>
#include <utility>
#include <iostream>

#include <cassert>
#define assertm(exp, msg) assert((void(msg), exp))

typedef uint32_t rng_state_t;
typedef uint32_t rng_value_t;

constexpr std::pair<rng_value_t, rng_state_t> lcg_rand(rng_state_t seed) {
    rng_state_t next = (1103515245u * seed + 12345u) & 0x7fffffff; // mod 2^31
    rng_value_t val = next % 10000; // Example: limit to 0-99 range
    return {val, next};
}

// template<uint32_t M=15>

// compile-time repear M times
template<int M=15>
constexpr std::pair<rng_value_t, rng_state_t> lcg_rand_skipahead(rng_state_t seed) {
    if constexpr (M > 1) {
        auto [_, next] = lcg_rand_skipahead<M - 1>(seed);
        return lcg_rand(next);
    } else {
        return lcg_rand(seed);
    }
}

void openmp_rng_serial(rng_state_t seed, int N, rng_value_t* array) {

  rng_state_t next = seed;  // 0 ≤ seed < 2^31
  for (int i = 0; i < N; ++i) {
        auto [random_number, next_] = lcg_rand(next);
        *array = random_number;
        next = next_;
        array++;
  }
}
template<int M=15>
void openmp_rng_skipahead(rng_state_t seed, int N, rng_value_t* array) {

  rng_state_t next = seed;
  rng_state_t nexts[M];
  rng_value_t *array_slots[M];
  for (int i = 0; i < M; ++i) {

    auto r1 = lcg_rand_skipahead<1>(next);
    auto [random_number, next_] = r1;

    assertm( r1 == lcg_rand(next), "error");
    *array = random_number;
    next = next_;
    nexts[i] = next_;
    array++;
    // i++
    array_slots[i] = array;
  }

  // parallel:
  for (int i = 0; i < M; ++i) {

    // serial:
    for (int j = 1, jM = M; j < N/M; ++j) {

      auto [random_number, next_] = lcg_rand_skipahead<M>(nexts[i]);

      // std::cout << "i = " << i << ", j = " << j << ", jM = " << jM << std::endl;

      assertm( jM == j * M , "j*M consistency failed");
      if (i + jM < N) {
         // *array = random_number;
         *array_slots[i] = random_number;
      } else {
        //
      }
      nexts[i] = next_;
      // array += M; // j
      array_slots[i] += M; // j
      // array += 1; // i
      jM += M;
    }
  }

  /*
  rng_state_t next = seed;  // 0 ≤ seed < 2^31
  for (int i = 0; i < M; ++i) {
    #pragma omp parallel
    {
      rng_state_t local_next = next;
      // Each thread gets its own local copy of next
      for (int j = 0; j < 10; ++j) { // Each thread generates 10 numbers
        rng_value_t random_number = lcg_rand(seed, local_next);
        #pragma omp critical
        {
          std::cout << "Thread " << omp_get_thread_num() << ": " << random_number << "\n";
        }
      }
    }
  }
  */

}

void print_values(rng_value_t* array, int N) {
  auto array_end = array + N;

  for (auto p = array; p<array_end; ++p) {
    std::cout << " " << *p << " ";
  }
  std::cout << "\n" << std::flush;
}

int main() {
  const int N = 100;
  rng_value_t array[N];
  openmp_rng_serial(42, N, array);
  print_values(array, N);

  rng_value_t array2[N];
  openmp_rng_skipahead<1>(42, N, array2);
  print_values(array2, N);

  return 0;
}

