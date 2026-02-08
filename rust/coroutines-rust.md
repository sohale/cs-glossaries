
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


The example yields plain integers (i32)
created fresh at each yield,
"captures no references that live across yield",
and doesn’t "borrow from an outer owner".


now this: (without making changes), explain this error:


error[E0277]: `{static coroutine@liblisa-synth/src/search/mod.rs:2021:43: 2021:52}` cannot be unpinned
    --> liblisa-synth/src/search/mod.rs:2116:42
     |
2116 |         return std::iter::from_coroutine(coroutine3);
     |                ------------------------- ^^^^^^^^^^ the trait `Unpin` is not implemented for `{static coroutine@liblisa-synth/src/search/mod.rs:2021:43: 2021:52}`
     |                |
     |                required by a bound introduced by this call
     |
     = note: consider using the `pin!` macro
             consider using `Box::pin` if you need to access the pinned value outside of the current scope
note: required by a bound in `from_coroutine`
    --> /dataneura/dothome/dot.rustup/toolchains/nightly-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/core/src/iter/sources/from_coroutine.rs:27:51
     |
  27 | pub fn from_coroutine<G: Coroutine<Return = ()> + Unpin>(coroutine: G) -> FromCoroutine<G> {
     |                                                   ^^^^^ required by this bound in `from_coroutine`

error[E0277]: `{static coroutine@liblisa-synth/src/search/mod.rs:2021:43: 2021:52}` cannot be unpinned
    --> liblisa-synth/src/search/mod.rs:2018:47
     |
2018 |     fn exprs_from_encoding_coroutine<'a>() -> impl Iterator<Item = Expression> {
     |                                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ the trait `Unpin` is not implemented for `{static coroutine@liblisa-synth/src/search/mod.rs:2021:43: 2021:52}`
     |
     = note: consider using the `pin!` macro
             consider using `Box::pin` if you need to access the pinned value outside of the current scope
     = note: required for `FromCoroutine<{static coroutine@liblisa-synth/src/search/mod.rs:2021:43: 2021:52}>` to implement `Iterator`



### The `from_coroutine`:

```rust
use std::iter::from_coroutine;
```
needs `#![feature(iter_from_coroutine)]`
at create-level.

See https://doc.rust-lang.org/beta/unstable-book/language-features/coroutines.html
See https://doc.rust-lang.org/std/iter/fn.from_coroutine.html


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
      };
      return from_coroutine(coroutine2b);
  }
  for v in gen_to_iter() {
      println!("{}", v);
  }
}
```



and why in some miniature examples, like below, , we could return from_coroutine, but not in above error's case.
