# Teach Myself VHDL
* aka *Teach Yourself VHDL* -- by reading this
* aka *Teach ~Yourself~ Myself VHDL*

Teaching my past self VHDL. The LTM time-travel loop.

* Meta:
   * Also see: https://github.com/sohale/cs-glossaries/blob/master/refs/vhdl-resources.md

entity, configuration, architecture, port, generic, module, package, 

* Nice distinctions in VHDL
   * an entity from architecture
      * instances as pairs of entity-architecture
   * library from package
   * Separating the name of its "type" from its "implementation", with different names.

* Minefield: Discrepancies between simulation and synthesizable
(A solution could have been: `strict` mode. have two modes. Never trust the software-only (test) mode for hardware: error: cannot synthesise a non-`strict`)
