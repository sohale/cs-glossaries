# My experience with micro-controller programming

## CPUs:
* ARM Cortex4
* ARM Cortex0

## Compiler command:

The command `arm-none-eabi-gcc` is a `gcc` for ...

See man page at [https://manned.org/arm-none-eabi-gcc/34fd6095](https://manned.org/arm-none-eabi-gcc/34fd6095)


### Commandline options:
* `-mthumb`
* `-adhln`
* `-mcpu=cortex-m0`
* `-mcpu=cortex-m4`

### Other options:
* `-g`
* `-Wa`
* `-Wa,-adhln`
* `-Wextra`
* `-Wall`
* `-Wpedantic`
Assembly code generation:
* `-S`
   * Stages are: preprocessing -> compilation -> assembly -> linking
   * `-c` : do not link
   * `-S` : do not assemble
   * `-E` : do not compile (only preprocessing). output will be the preprocessed source code.
* `-o ./build_arm/xyz.s`

C-language standards
* C99    `-std=c99` 
* GNU11  `-std=gnu11`


### Usage of build command
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

#### What is a thumb state?
```
# Uses Thumb state
#arm-none-eabi-gcc -S -mthumb -mcpu=cortex-m0 encoder_main.c      -o ./build_arm/encoder1_O3.s
```

`exit, read, lseek, getpid, kill, sbrk, write, isatty`

"ARM and Thumb are two different instruction sets supported by ARM cores with a “T” in their name"


* What is the ARM Thumb Instruction set? https://stackoverflow.com/questions/10638130/what-is-the-arm-thumb-instruction-set
* About ARM and Thumb Mode: http://www.icetech.com/appnotes/arm-thumb.pdf

*  traditional ARM set: the instructions are all 32-bit long,
*  the more condensed Thumb set, where most common instructions are 16-bit long (and some are 32-bit long).

Options: The Arm verus Thumb state:
* `-mthumb`
* `-marm`

From the man page:
```
       -mthumb
       -marm
           Select between generating code that executes in ARM and Thumb states.
           The default for most configurations is to generate code that executes
           in ARM state, but the default can be changed by configuring GCC with
           the --with-mode=state configure option.
```
