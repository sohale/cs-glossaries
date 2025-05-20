
## New round of Lean4 explorations: the FM-KL project
(May 2025)

#### LFTCM2023 ####
Based on [LftCM](https://www.youtube.com/watch?v=Ft_3jDl3qxQ&list=PLlF-CfQhukNn7xEbfL38eLgkveyk9_myQ) and [git/lftcm2023](https://github.com/lftcm2023/lftcm2023).

In Lean4, everything has a type. You can get the type using `#check`.

Type of a[ny] type is a type,  and it is `Type`.
`ℝ` Is a type, not a set. Hence. `ℝ:Type`.


An element of a type.
(But an element can be of a type. yet, not a set. So they avoid paradox by this?).
Existence of a type can be a proof? No: only if it is an "expression", abd the type should be "Prop"!

Lean4 accepts incomplete.

Mathematical definition: Is `def`!

If no name, it will be `example`.
Always with colon `example :`.

```lean

example : ℕ := 3
def x : ℕ := 3
```

##### Prop
Prop is a another key element.
After: "type"s, `#check`, the `Type` type, `def`, `example` and `sorry`: Not `Prop`.

`Prop` may be proved or not.
Prop may be not true: `2+2=4` is a prop.
May be true, false, or not proved.

The `rexp` ?
Expresion: (compare elements of a type), we can have expressions of a type.
In that case, it's a proof of that type.
An expression of type .... ???Prop??

A type can be of a Prop, not a type?!

```lean
def ℕ : Type := ...
def nn : Type := ℕ
example : Type := ℕ
def Type : ?? := ...
#check ℕ  -- : Type
#check nn  -- : Type
#check Type  -- : ?
```

Cool: They already generalised this:
```
Type
Type 1
Type 2
Type 3
...
```



Prop is like a Type.
```lean
def 1+1=2 : Prop := ...
def pp : Prop := 1+1=2
example : Type := 1+1=2
```
Compare with
```lean
def ℕ : Type := ...
def nn : Type := ℕ
example : Type := ℕ
```

Prop itself is a Type:
```lean
def Prop : Type := ...
def pp : Type := Prop
example : Type := Prop
```



```lean
example : 2 + 2 = 4 := rfl
def x : 2 + 2 = 4 := 3
```

#### Cumulative manual for Matrices
1. Use these imports
```lean
import Mathlib.Data.Real.Basic
import Mathlib.Data.Matrix.Basic
```
2. Use operators: `*`, `⁻¹`
3. Prefix with `Matrix.transpose`
4. Computable issue for inv, etc (todo)
5. Use patterns of parametrisation
    * Pattern 1: add to every definition: `(m : ℕ)` etc, e.g. `structure KalmanVariables (m : ℕ) where`
    * Pattern 2: (did not work): Not sure what it implies/entails, and whether it works: `variable {n m : ℕ} [Fintype (Fin n)] [Fintype (Fin m)] [DecidableEq (Fin n)] [DecidableEq (Fin m)]`
6. Stay awry of erronous AI suggestions: `Matrix.inv`, `•`, etc (TBC)
9. Bonus
   1. Use `(: type)` to assert types.
      * The `matrix` type? or `(Fin 3) (Fin 3)` type? or both (capping)?
   2. Use this `ℝnm` sort of abbrev `abbrev ℝnm (n : ℕ) (m : ℕ) := Matrix (Fin n) (Fin m) ℝ`

#### Inverting a matrix: R⁻¹
After comsulting Discord people ([click](https://discord.com/channels/1154493176548184134/1154503120618012704/1371220664228384798) for conversation), about `R⁻¹` I receives these key answers:

* You can find that [here](https://leanprover-community.github.io/mathlib4_docs/Mathlib/Algebra/Notation/Defs.html#Inv)

* The notation is defined as [Inv.inv](https://leanprover-community.github.io/mathlib4_docs//Mathlib/Algebra/Notation/Defs.html#Inv.inv).
And if you care about the definition of matrix inversion,
then [Matrix.inv](https://leanprover-community.github.io/mathlib4_docs//Mathlib/LinearAlgebra/Matrix/NonsingularInverse.html#Matrix.inv)
is indeed the right place.
If you write `R⁻¹`, what really happens is `Matrix.inv.inv R`
   * (or `Inv.inv (self := Matrix.inv) R`)

#### How to multiply?
How to multiply? Investigating:
* see `mathlib`/`Mathlib/Data/Matrix/Mul.lean` e.g. locally, `.lake/packages/mathlib/Mathlib/Data/Matrix/Mul.lean`
   * Was found by: via LSP -> via `Matrix.mul_sub` -> see definition -> scroll to top. (BTW, so many variations of implementation. so interesing. See below note abount computable).

* It is `*`
    * Previously: `-- `×` or `•` or `⬝` or `*` ?`
       * The `×` is for Prod, for cartesian product of sets, tuples (parameters), etc.
* Those notations are called "locale".
    * `⬝ᵥ`, `*ᵥ`, `ᵥ*`, `ᴴ`
    * It shoul dhave said `⬝`, `*`, transpose. Where are these defined?
    * Somewhere is actually uses `•`. See `Mul.lean`

Interesting. Computability error:
>    failed to compile definition, consider marking it as 'noncomputable' because it depends on 'Matrix.inv', which is 'noncomputable' (Lean 4)
* This means, I see now how Lean works.

#### Design path 1
Types are: `Matrix (Fin 3) (Fin 3) R`.
* It could be (can be?): `(Fin 3) (Fin 3) R`.
* I call it capping types (wrapping? labelling? tagging?). I was looking for something exactly like this for `neopiler`, and the design pull was there, and now Lean showed me.

#### Dev setup:
* Keep enabling and disabling this `set_option diagnostics true`. Also use the hover for errors, when enabled (using LSP).
* Use VScode's Lean4 LSP. Do use its completion (not AI). Do use its "go to definition". 

#### Alterntive ways to parameterise (patterns)
Some patterns of parametrisation
* Pattern 1: add to every definition: `(m : ℕ)` etc, e.g. `structure KalmanVariables (m : ℕ) where`
* Pattern 3: `variable (u : ℝm) (y : ℝm)` why this alone may not work?
* Pattern 2: (did not work): Not sure what it implies/entails, and whether it works: `variable {n m : ℕ} [Fintype (Fin n)] [Fintype (Fin m)] [DecidableEq (Fin n)] [DecidableEq (Fin m)]`
* Define global variable (with specific parameters). In the following, a variable like "pattern 2" above is used:
```lean
  -- System parameters
  variable (A : ℝnn) (B : ℝnm) (C : ℝmn)
  variable (Q : ℝnn) (R : Matrix (Fin m) (Fin m) ℝ)
```

#### Exploring various ways to define named/structured tuples
Exploring various ways to define structure, fields, tuples, etc for state, or parameter-sets:

* Structure (but not type?)
```
structure KalmanState2 where
  state : KalmanStateType n
-- ks.state.1 -- for xhat
-- ks.state.2 -- for P
```

* A `Type`: (can be `Prod` or `structure`?)
```lean
def KalmanStateType (n : ℕ) : Type :=
    (Matrix (Fin n) (Fin 1) ℝ) × (Matrix (Fin n) (Fin n) ℝ)
```
Variants: Type+Prod, Prod without Type, parametrised (global), parametrised (local), etc.

* The Prod way (aka `×`)
```lean
def KalmanStateType (n : ℕ) : Type :=
   (Matrix (Fin n) (Fin 1) ℝ) × (Matrix (Fin n) (Fin n) ℝ)
```

* May not have worked
```lean
def KalmanStateType : Type :=
   { xhat: Matrix (Fin n) (Fin 1) ℝ, P : Matrix (Fin n) (Fin n) ℝ }
   ❌
```

(optional: `(n : ℕ)`)

* Sigma: (did not work/yet): Sigma trick for tuple (equivalent to Prod):
`Σ (xhat : Matrix (Fin n) (Fin 1) ℝ), (P : Matrix (Fin n) (Fin n) ℝ)`
or
```lean
  Σ (
      xhat : Matrix (Fin n) (Fin 1) ℝ
    ),
    P    ( Matrix (Fin n) (Fin n) ℝ )
  ❌
```

#### trace_state
I could not use `trace_state` though. I tried to use ...'s code:

```lean
import Mathlib.Data.Real.Basic
import Mathlib.LinearAlgebra.Matrix.NonsingularInverse
import Mathlib.Data.Real. Basic
import Mathlib.Data.Matrix.Basic
/--
info: R: Matrix (Fin 5) (Fin 5) ℝ
a : Matrix (Fin 5) (Fin 5) ℝ := R⁻¹
+ True
-/
#guard_msgs (info) in
def a (R: Matrix (Fin 5) (Fin 5) R) : True := by
  let a := Matrix, inv. inv R
  trace_state 🛠️
  trace a
```

#### Micro-ideas:
* A post about working with matrices in Lean4 (inverse, multiplicaiton, writing some equations, what ti `import`, how to parametrise dimensions, some patterns, etc)


Old parts from summer(?) 2024:

# Lean4: Learn Lean4 from inside out

Lean 4 is two things: a theorem prover and a programming language.

Compared to other similar tools:
Lean4 is superior for proving higher / abstract mathematics: In fact, most of Mathematics is written already in Lean 4! (People such as Terrance Tao use it).
With this powerful base, now its standard library is being completed and matured for Computer Science too.

This made Lean4 an obvious choice for me to invest in it, finally "choose" one (a difficult thing). (Previously I thought Coq is the gold standard).
Probably, Lean4 can now be considered the "gold standard" in proof/logic-oriented programming languages.
Any opinions otherwise?

Lean 4 is written by Leo (Leonardo de Moura) (Do you see the similarity? or is it just me with my verbal pare·idolia / apo·phenia?)

```
L  e  a  n  4
L  e  o  n  ardo
```
[See: sosiname's law]

It seems a lot of vision has been put into Lean4's design.

Leo wrote Lean after Z3, which he had written. Even Lean4 itself is a result of maturation of an intereting experiemntal approach: HE first wrote Lean 1, Lean 2 as experimental, and then Lean 3 was released as a stable product. And then Lean4 by improvements and rewritings, including removing things from Lean3. A nice approach in software.

Leo had written not only Z3, but also Yices 1.0 and SAL (he was the main architect).

Lean4 has been successful technically and in the community.

### Close Encounter of Lean 4 Kind
First gist: first encounter: first impression: What will you see first:

C?: lake, elan, toml

The package manager is lake, elan, toml, etc

(TBC; text to be filled in)


### The structure of the flow of the path of the journey of the curve of the learning of the ...
(Outline)

Learn internal representaiton: `expr`.

I recommend you know the following concepts: (see reference/glossary)

* "Odd way to start bottom-up": (chapter)
   * The "De Bruijn indices" notation
   * Alpha-conversion

* Explanation part (chapter)
    * The "kind" subflow
    * Then, see "Levels of description"

* This document follows with details, glossary, references, etc, that fill in above.

Now that we have the outline, let's delve into it.

---
Chapter

### On "Kind"s:
(kind subflow)

(On why understanding expr is important.)

First,
disentangle in your mind these (terms, concepts, ...): type, kind, "Sort".


Now let's go through them:
First, "don't" look at this table (!) :

Table:
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

##### A brief top-down touch: of "kind":
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


---
Chapter

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

See Section ` On "Kind"s` (kind subflow)

#### ...

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

* Let's (think in this way) set our mind's frame (refresh our minds) about Lambda expressions:
    * Lambdas define the body of functions in Lean4, not their signature
        * What property of Lambda calculus this relates to?
    *  "abstracts over x", when we say `λx`.
    * How does nesting enriches Lambda calculus?
    * I used to (incorrectly) think `λx.(λy.x(yx))` means: `(x) => ( (y) => (y*x) )` in Javascript, or `f = [](float x) { return  [x](float y) { return y*x; } ; }` in C++
    * But it means: `f=λx.(λy.x(yx))` means: `const f = (x) => ( (y) => (y(x)) )`, which means s itself is a function (three functions involved !) in Javascript, or `template Func f = [](float x) { return  [x](Func y) { return y(x); } ; }` in C++ (sorry without template it would have been prohibitively complicated & confusing), and when we apply them: In JS: `f( ((a)=>a*a) )(1.0)`, i.e. apply given `h=((a)=>a*a)` to `x=1.0`, `f(h)(1.0)`
* **Alpha-conversion**: renaming variables to avoid name clashes

Lean4's specific concepts: (low-level, internal, almost VM)
(sub-part of glossary?)
 
* `environment` https://github.com/leanprover/lean4/blob/d1c0149e17eb860c9228f27c046e367750a592d6/src/kernel/environment.h#L81

* Other curious terms: [a](https://en.wikipedia.org/wiki/De_Bruijn_index) K combinator, S combinator.


