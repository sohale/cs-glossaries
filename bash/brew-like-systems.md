# On design principles of brew-like systems

#### Scope
Scope: List of systems of interest:
* brew
* nvm
* winetricks
* pipx
* lake

Characteristic features:
* Are command-line.
* Often a separate system.
* Often start with hacky solutions, but turn into an ecosystem.
* Often a single repo
* Characterising examples: `brew` and `nvm`
* Are not:
   * Here, I don't cover:
      * I don't cover installation management systems:
         * snap
         * `apt`, `macports`, etc (but I "do" cover `brew`. What is the difference?)
         * Not `bob` (or `cargo`). cargo install bob-nvim
      * Not package management:
         * package versions rather than
         * are "inside" the system (e.g. npm), while "nvm" is outside.
         * npm, yarn
         * gem
         * cabal
         * conan (?)
         * not `pip` but something that is around `pip`.
         * `venv`? yes.
         * Not chroot/jail solutions. Or isolation and containerisation: namespace/docker. Not terraform/provider.
         * Not `appimage`
      * Not ...
         * mypy, poetry, ...
      * Not build systems:
         * make, etc (vs Conan.io)

### Theorizing
* A pattern has emerged: These seem to be some design principles of brew-like systems.
* Outside a pre-existing system
* Characteristic "stack layers" pattern:
   * "`nvm` over `npm` over `node`", "`venv` over `pip` over `python`"
* Usually by a third party (nvm, not node)
* May be general purpose (brew) or special purpose (winetricks)
* Usually has a list of pragmatic uses
* Usually has a proper cli with well-defined sub-commands: `brew` (`install`, ...), `winetricks`, nvm (`list`, `install`, etc), etc
* Usually have pre-defines "installation configuration"s. (Is it the same as brew formulas?). Specific formulas (probably based on main most-common usages & patterns in practice for that "software"). Very pragmatic.
* Multiple few software: Is it supported? (A simple software? () or multiple? (a few ones) (excluding universal tools like brew) )
* `dry-run`: an emerged functionality that is common. (todo: add more)
* Usually has files with specific versions and product names (winetricks), or repository(es): brew repo for (all) formulas? (where is it kept?)
* `brew cleanup` (emergent)
   * Identify dangling / unused  (similarities with apt, docker)
   * removing them
   * report on how much space are taken (by used, unused)
   * prune or purge (similarities with apt, docker)
* Maybe usage-based? (Usually, they don't work well) (as exspention of detecting dangling)
* List of nominal similarities with package management systems (list only)
   * purse
   * detect dangling
   * update, download updates, etc
   * dependency tree (able to visualise)
   * version compatibility (semver, etc), able to warn (Winetricks does not do this)
* Its own updating. Solution?
* Being local (venv is strictly local)
* typical management of `env`:
    * `venv` uses env ariables, etc
    * exporting
    * `.bashrc`
    * patterns for each instance (like `venv`) or ... ?
* Doctor
    * `brew doctor`, `brew config`, `brew install --verbose --debug`, ...
    * inspecting (?)
    * Negative-Patterns:
       * `Some installed kegs have no formulae! This means they were either deleted or installed manually. You should find replacements for the following formulae:` ...
          * Interesting: "You should find replacements" ...
       * `Warning: Some installed formulae are deprecated or disabled. You should find replacements for the following formulae`

* Nice "actionable-based" (next action) error messages & recommendations & checks & status & inspection/doctor:
    * "Error: This command updates brew itself, and does not take formula names."
    * See above "Doctor"/"Negative-Patterns"

<!-- ## Meta -->
### History
* Historical order
   * Ruby roots? venv/virtualenv?
* Roots of ideas & Memes in theory/academia

## Contents
### Brew
   * `keg's
   * `cask`: see below.

#### Brew cask
   cask is only for MacOS : for GUIs (`.pkg`, `.app` files)
### Winetricks
### Lean4's Lake


