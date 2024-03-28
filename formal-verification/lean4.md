# Lean4: Learn Lean4 from inside out

C?: lake, elan, toml

The package manager is lake, elan, toml, etc


Learn internal representaiton: `expr`.



I recommend you know the following concepts:
* The "De Bruijn indices" notation
* Alpha-conversion


Glossary / Reference:

* The `expr`
Learn `expr`, the internal representation Lean4 uses for symbolic formulas:
* [src/kernel/expr.h](https://github.com/leanprover/lean4/blob/master/src/kernel/expr.h) in Lean4
```cpp
enum class expr_kind {
   BVar,
   FVar,
   MVar,
   Sort,
   Const,
   App,
   Lambda,
   Pi,
   Let,
   Lit,
   MData,
   Proj
};
```

* **De Bruijn indices**:
   * `λx.λy.x` -> `λ.λ.2`: "The variable `x` is now two lambdas away from its binding site". Me: parent.
   * `λx.λy.y` -> `λ.λ.1`
   * `λx.(λy.x(yx))`-> `λ.(λ.2(1 2))`
   * Consider `λx.λy.x` or `λx·λy·x`.
   * [[a](https://www.pls-lab.org/en/de_Bruijn_indices)] "A number denoting how much further up in its syntax tree the binding construct occurs, counting from the inside out"
   * `λx.x(λy.yx)` is represented as `λ.0(λ.0 1)` [[w](https://en.wikipedia.org/wiki/De_Bruijn_index)]
   * `λx. λy. x` ->  `λ λ 2`
   * ` λx. λy. λz. x z (y z)` ->  `λ λ λ 3 1 (2 1)`

* **Alpha-conversion**: renaming variables to avoid name clashes

* Other curious terms: [a](https://en.wikipedia.org/wiki/De_Bruijn_index) K combinator, S combinator.
