# Lean4

C?: lake, elan, toml

The package manager is lake, elan, toml, etc

I recommend you know the following concepts:
* **De Bruijn indices**:
   * Consider `λx.λy.x` or `λx·λy·x`.
   * [[a](https://www.pls-lab.org/en/de_Bruijn_indices)] "A number denoting how much further up in its syntax tree the binding construct occurs, counting from the inside out"

* **Alpha-conversion**: renaming variables to avoid name clashes
