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

<!-- ## Meta -->
### History
* Historical order
   * Ruby roots? venv/virtualenv?
* Roots of ideas & Memes in theory/academia

## Contents
### Brew
#### Brew cask
### Winetricks
### Lean4's Lake


