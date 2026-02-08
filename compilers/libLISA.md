Understanding libLISA
======================
Technical definitions for understanding the code.


Tool for exploring and automated discovery of ISA of the given CPU.

`CPU State` versus `SystemState`: System State. Unlike the paper, the CPU State does not contain memory contents. But it has the memory mappings. The `SystemState` is `MemoryState` + `CPUState`.  Actual code excerpt:
```rust
/// A CPU state consisting of the architecture-specific state part and memory mappings.
pub struct SystemState<A: Arch> {
    cpu: Box<A::CpuState>,
    memory: MemoryState,

    /// True if the trap flag should be used to observe this system state.
    pub use_trap_flag: bool,

    /// True if the state's memory mapping contains valid addresses.
    pub contains_valid_addrs: bool,
}
```
debt: `use_trap_flag`, `contains_valid_addrs`.
This may be about pre- or post- observation.

`MemoryState` is pure contents: an array of entries of tuple: `Addr, Permissions, Vec<u8>`. Actual code:
```rust
/// A memory mapping in a [`MemoryState`].
pub type MemoryEntry = (Addr, Permissions, Vec<u8>);

/// Memory state of a CPU.
pub struct MemoryState {
    data: Box<[MemoryEntry]>,
}
```

CpuState
--------
Paper: `CpuState` is only 769 bytes.

The concrete type is `X64State`. (not: `CpuState<X64Arch>`)

```rust
/// The CPU state of the x86-64 architecture.
pub struct X64State {
    /// General purpose registers
    pub regs: Align32<[u64; NUM_GPREGS]>,

    /// XMM registers
    pub xmm: Xmm,

    /// X87 registers
    pub x87: X87,

    /// XMM exception flags.
    /// Defined as a separate field for better alignment.
    pub xmm_exception_flags: u64,

    /// XMM Denormals-are-zero flag.
    /// Defined as a separate field for better alignment.
    pub xmm_daz: u8,
}
```
(NUM_GPREGS=20) * 8 + Xmm=( 32*16 ) + X87=(8*10+1+8+4+1) + 8+1 =
160+512+94+9 = 672+103 = 775.
Paper: 769 ?
