# Lean4: Learn Lean4 from inside out

First gist: first encounter: first impression: What will you see first:

C?: lake, elan, toml

The package manager is lake, elan, toml, etc


### The structure of the flow of the path of the journey of the curve of the learning of the ...

Learn internal representaiton: `expr`.

I recommend you know the following concepts: (see reference/glossary)
* The "De Bruijn indices" notation
* Alpha-conversion


---

## Glossary / Reference:

* The `expr`
Learn `expr`, the internal representation Lean4 uses for symbolic formulas:
* [src/kernel/expr.h](https://github.com/leanprover/lean4/blob/master/src/kernel/expr.h) in Lean4
```cpp
enum class expr_kind {
   BVar, FVar, MVar, Sort, Const, App, Lambda, Pi, Let, Lit, MData, Proj
};
```
See below for these kinds.

```cpp
static   expr_kind    expr::kind(object * o);

expr.raw();
```

Related types:
```
object_ref
object
environment
```

* `list` type (see [in list.h](https://github.com/leanprover/lean4/blob/d1c0149e17eb860c9228f27c046e367750a592d6/src/util/list.h#L20)) and type `list::cell`
   * method `cell::raw()` returns "internal representation"

* `raw`:  A method in (?) that returns internal representation.  Use `raw()` prevents us from updating the "reference counters". (?) . "Use it with care. The main risk of storing references to `cell` is that the `list` may be deleted."
   * `cell * list::raw() const { return m_ptr; }`

### On "Kind"s:

First,
disentangle in your mind these (terms, concepts, ...): type, kind, "Sort".

Now let's go thought them:
First, "don't" look at this table (!) :

```txt
=======================================
   Expressions

inductive Expr
| bvar    : Nat → Expr                                -- bound variables
| fvar    : Name → Expr                               -- free variables
| mvar    : Name → Expr                               -- meta variables
| sort    : Level → Expr                              -- Sort
| const   : Name → List Level → Expr                  -- constants
| app     : Expr → Expr → Expr                        -- application
| lam     : Name → BinderInfo → Expr → Expr → Expr    -- lambda abstraction
| forallE : Name → BinderInfo → Expr → Expr → Expr    -- (dependent) arrow
| letE    : Name → Expr → Expr → Expr → Expr          -- let expressions
| lit     : Literal → Expr                            -- literals
| mdata   : MData → Expr → Expr                       -- metadata
| proj    : Name → Nat → Expr → Expr                  -- projection
*/
```

##### A brief top-down touch:
* `BVar`:  A variable bound ("bind"ed). The bounded can be a lambda argument(?) or a Pi argument. (Lambda vs Pi are function body vs function signature: value vs type) 
* `FVar`
* `MVar`
* `Sort`
* `Const`
* `App`
* `Lambda`
* `Pi`
* `Let`
* `Lit`
* `MData`
* `Proj`


"inductive Expr": means:

### Odd way to start bottom-up:

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

Lean4's specific concepts: (low-level, internal, almost VM)

* `environment` https://github.com/leanprover/lean4/blob/d1c0149e17eb860c9228f27c046e367750a592d6/src/kernel/environment.h#L81

* Other curious terms: [a](https://en.wikipedia.org/wiki/De_Bruijn_index) K combinator, S combinator.

### Levels of description:
(Contained self-consistent self-complete (closure) layers)
1. Implementation
   1. `list`, `cell`, gc
   2. `object`, `object_ref`
   3. composition of `kind`s: `expr` (expressions)
   4. The `environment`
   5. Meanings of the elements / primitive used for expr/kind.
2. User view:
   1. User-side primitive concepts
       * ? lambda versus Pi (function body vs signature)
   2. User-side concepts to think about: Lean4 lingo: "universally quantified type"
   3. User-side programming model & machine model: compilation model
   4. Ways to think about Mathematics in Lean4: proof, assistance, program, native types, (no: compilation model?)


### Lean4 lingo: proper concepts:
* "universally quantified type"
