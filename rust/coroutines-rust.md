
notes on mkaing sense of rust-coroutines for practical troubleshooting and writing coroutines
(conceptual shredding: bite-size notes)

## Bite-size conceptual shreds

### Property: "is `Unpin`"
One of key properties in coroutines:

an object is either:

* is `Unpin`
* is `!Unpin`

Context:
For coroutine compile-fixing.

### Property: capturing "references to locals"
* and "keeping those borrows alive across a yield"
* and "captures references that live across yield"


### Property: "borrows tied to external data"
Yielding borrows tied to external data (e.g., `&Expr<'a>` that borrows from enc).

* aka "borrows from an outer owner"



borrowed" views tied to an outer owner

### Example error

The example yields plain integers (i32)
created fresh at each yield,
"captures no references that live across yield",
and doesn’t "borrow from an outer owner".


### The `from_coroutine`:

```rust
use std::iter::from_coroutine;
```
needs `#![feature(iter_from_coroutine)]`
at create-level.

See https://doc.rust-lang.org/beta/unstable-book/language-features/coroutines.html
See https://doc.rust-lang.org/std/iter/fn.from_coroutine.html


### Unnamed in error messages

Example:
```txt
required for `FromCoroutine<{static coroutine@liblisa-synth/src/search/mod.rs:2021:43: 2021:52}>` to implement `Iterator`
```
or
```txt
for `{static coroutine@liblisa-synth/src/search/mod.rs:2021:43: 2021:52}
```

```txt
error[E0277]: `{static coroutine@liblisa-synth/src/search/mod.rs:2021:43:
```


### A bound in x
Example from error message:
```txt
bound in `from_coroutine`
```

## Examples:

### A minimal `from_coroutine` example:


Features:
* `from_coroutine` use
* returns an iterator
* (Is correct)
```rust
{
  fn gen_to_iter() -> impl Iterator<Item = i32> {
      // mutable
      let mut coroutine2b = #[coroutine] || {
          yield 3;
          // to have some minimal state (hence, "Mut"):
          for i in 1..5 {
              yield i;
          }
          // return (); // implied
      };
      return from_coroutine(coroutine2b);
  }
  for v in gen_to_iter() {
      println!("{}", v);
  }
}
```
Simplistic:
* captures no (references that (live across yield)),
* and doesn’t (borrow from an outer owner)
Hence,
* We can return `from_coroutine`, but not if lifetimes were involved.

This would have failed if: `Iterator<Item = &'a str>`.
*  ERROR: `coroutine2b` is `!Unpin`

<!-- Limitations: -->

You need to ensure the generator (`coroutine2b`) is `Unpin`:
Only yield "owned values".
"end any borrows" before yield.
To own `_to_owned()` or `.close()` inside a block.

Abandon `from_coroutine` if you must "yield borrowed":
If you must "yield borrowed" views tied to an outer owner, don’t use from_coroutine. Pin and drive manually:

Typical compiler errors:
* `cannot be unpinned`
* `the trait `Unpin` is not implemented`

* required by "a bound" in `from_coroutine`

> note: required by a bound in `from_coroutine`

Typical compiler suggestions:

> note: consider using the `pin!` macro
>       consider using `Box::pin` if you need to access the pinned value outside of the current scope

Reasoning (from standard library):
```rust
pub fn from_coroutine<G: Coroutine<Return = ()> + Unpin>(coroutine: G) -> FromCoroutine<G>
```
