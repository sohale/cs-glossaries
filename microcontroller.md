My experience with micro-controllers

CPUs:
* ARM Cortex4
* ARM Cortex0

Compiler command:

The command `arm-none-eabi-gcc` is for ...

Commandline options:
* `-mthumb`
* `-adhln`
* `-mcpu=cortex-m0`
* `-mcpu=cortex-m4`

Other options:
* `-g`
* `-Wa`
* `-Wa,-adhln`
* `-Wextra`
* `-Wall`
Assembly code generation:
* `-S`
* `-o ./build_arm/xyz.s`

C-language standards
* C99    `-std=c99` 
* GNU11  `-std=gnu11`

See [https://manned.org/arm-none-eabi-gcc/34fd6095](https://manned.org/arm-none-eabi-gcc/34fd6095)

Build commands: [from](https://github.com/sohale/huffman-bitstream-c/blob/master/rebuild.sh)

```bash
# ======================
# DECODER: ARM Cortex0
# ======================
# Uses Thumb state
#arm-none-eabi-gcc -S -mthumb -mcpu=cortex-m0 encoder_main.c      -o ./build_arm/encoder1_O3.s
arm-none-eabi-gcc -S -mthumb -mcpu=cortex-m0 -O3  -DNDEBUG   -DRELEASE=0 encoder_main.c      -o ./build_arm/encoder_main.s
arm-none-eabi-gcc -S -mthumb -mcpu=cortex-m0 -O3  -DNDEBUG   -DRELEASE=0 decoder_main.c      -o ./build_arm/decoder_main.s

# ======================
# DECODER: ARM Cortex4
# ======================
#arm-none-eabi-gcc -fverbose-asm -Wa,-adhln -g -S -mthumb -O2 -mcpu=cortex-m0 encoder_main.c    -o ./build_arm/encoder2.s
arm-none-eabi-gcc -fverbose-asm -Wa,-adhln -g -S -mthumb -O3 -Os -mcpu=cortex-m4 -DNDEBUG  -DRELEASE=1  encoder_main.c    -o ./build_arm/encoder_main_verbose.s
arm-none-eabi-gcc -fverbose-asm -Wa,-adhln -g -S -mthumb -O3 -Os -mcpu=cortex-m4 -DNDEBUG  -DRELEASE=1  decoder_main.c    -o ./build_arm/decoder_main_verbose.s
```

What is a thumb state?
```
# Uses Thumb state
#arm-none-eabi-gcc -S -mthumb -mcpu=cortex-m0 encoder_main.c      -o ./build_arm/encoder1_O3.s
```

`exit, read, lseek, getpid, kill, sbrk, write, isatty`
