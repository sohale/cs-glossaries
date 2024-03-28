# Lean4

C?: lake, elan, toml

The package manager is lake, elan, toml, etc

I recommend you know the following concepts:
* **De Bruijn indices**:
   * Consider `λx.λy.x` or `λx·λy·x`.
   * [[a](https://www.pls-lab.org/en/de_Bruijn_indices)] "A number denoting how much further up in its syntax tree the binding construct occurs, counting from the inside out"
   * `λx.x(λy.yx)` is represented as `λ.0(λ.0 1)`
   * `λx. λy. x` ->  `λ λ 2`
   * ` λx. λy. λz. x z (y z)` ->  `λ λ λ 3 1 (2 1)`

* **Alpha-conversion**: renaming variables to avoid name clashes

* Other curious terms: [a](https://en.wikipedia.org/wiki/De_Bruijn_index) K combinator, S combinator.
