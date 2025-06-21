#!/bin/bash
set -euo pipefail

export EXECUTABLE="./openmp_features"
# THREAD_COUNTS=(1 1 2 4 8 16 32 64 128 256 1024)
# THREAD_COUNTS=(1 1 2 4 8 2 16 4 32 8  64 16 128 32 256 64 1024 128 256 512 1024 2028 8192 16000 32678 2 1 )
THREAD_COUNTS=(1 1 2 4 8 2 16 4 32 8  64 16 128 32 256 64 1024 128 256 512 1024 2028 8192  2 1 )

# Output header
echo "threads, real_sec, user_sec, sys_sec"

for t in "${THREAD_COUNTS[@]}"; do



    # OMP_NUM_THREADS=$t /usr/bin/time  2>&1 -f "%e, %U, %S" $EXECUTABLE >/dev/null
    # OMP: Info #276: omp_get_nested routine deprecated, please use omp_get_max_active_levels instead.

    # exit 1234

    # Run and capture timing info using `time`, redirecting all output
    # `command time` is needed to capture the time info instead of shell builtin
    output=$( { OMP_NUM_THREADS=$t  /usr/bin/time 2>&1 -f "%e %U %S" $EXECUTABLE >/dev/null ; } 2>&1 )

    # Parse the 3 values
    read -r real user sys <<< "$output"

    # Print CSV-style line
    echo "$t, $real, $user, $sys"
done

