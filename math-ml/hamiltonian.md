# What is Hamiltonian

My levels and layers of understanding of Hamiltonian,
in historical order

* Also see:
For Legendre-transform: [math-ml/Legendre-transform.md]( https://github.com/sohale/cs-glossaries/blob/master/math-ml/Legendre-transform.md) ,
for MCMC: [math-ml/mcmc.m](https://github.com/sohale/cs-glossaries/blob/master/math-ml/mcmc.md)

## In the historical order of my journey in understanding it

### Level 1: Energy: E+V
Simply, kinetic plus potential energy.

* (Lagrangian, is not "total energy"(?))
* If Lagriangian is there to leverage( literally and metaphorically) the "Lagrange multipliers", can we still utilise them in Hamiltonian formulations?

As commonly used in high school physics

Relation between Hamiltonian and Energy (Also note the historical precedence)

Hamiltonian in the timeline of concepts of Energy

Does Hamiltonian appear when we talk about say Energy-based learning?

#### Energy ...
* What makes an energy potential? What makes it kinetic? (In a more abstract way than specifically Newtonian formulas)
    * Work done by "conservative forces", versus Work done by "kinetic forces".
    * "Stored" in position/configuration, not stored in (as?) motion
    * There is the possibility of "transfer" between them
    * Holonomic forces and "integrability conditions"
    * On "integrability conditions":
        * Existence of antiderivatives (and constants of integration)
        * constraints
            * constraints reduce dimensions to lower
            * "coordinate-independent kinetic energy" + "potential energy"
            
        * Mathematical "integrability" =
            * "antiderivatives" expressed using an analytical formula?
            *  and evaluating constants of integration from initial data
        * Lack of symmetries, invariants
            * Symmetries of Dynamical Systems:
                * "Transformations under which the form of the differential equations is unchanged"
                * Each implies the existence of conserved quantities
                    * (Each invariant, derives one quantity(?). not sure)
                * Using Noether's theorem we can derive them(?)
                * Each invariant is a "scalar" quantity
                    * preserved along the trajectory (e.g. (?) defined per time point f(t) rather than as a function of the trajectory (as a function of the "functional"s?)
                    * Both Hamiltonian functions and Lyapunov functions are such?
                    * Each symmetry or invariant can point to deeper mathematical structures
                    * Invariants may derive from symmetries
                    * Invariants may also not derive from symmetries, and be "verifiable relations between state variables"
                    * Term: "ignorable coordinate symmetry"
            * For more, see "Level 7.2: Nature of Hamiltonian versus Lagrangian"

    * The so-called "complex forces": related to chaotic, non-integrable equations (still can be solved numerically) and are deterministic
* How do we know which one to subtract when we calculate Lagrangian? (in terms of what forces. Also the third case)
* What turns `-` to `+`?

Is Hamiltonian preserved in case of friction? also dissipative systems? (adiabatic)

#### ?
* canonical coordinates (q,p)
* H(q,p) is a Scalar function
* Is constant along a trajectory of the system (conserved quantity)
* Is conserved quantity (repeat)
* "Determines if closed orbits/cycles exist in the system"
* For implementing simulations: to calculate evolution of (q,p) over time


### Level 2: As used in Schrodinger Equation

### Level 3: Hamiltonian Everywhere: in Quantum Mechanics

### Level 4: Legendre transform on Lagrangian (Extention to Lagrangian)

* Why preferred over Lagrangian? Certainly not just convenience. It is also more natural.
* Why does adding `uv`  (px or vx) do that?

* Hamiltonian versus Lagrangian: are they duals? What else could be there in that tier?

* See Conjugate variables in thermodynamics (related to Legendre transform)

* What is the historical context of the Legendre Transform itself?

* Relation with the Euler-Lagrange equation

### Level 5: Sampling: as an extension to MCMC

* Q: But isn't Hamiltonian about continuous-time (at least connected-path) trajectories and ODEs? But MCMC should give points apart.
* A:


### Level 6.2: Simple 1st-order ODEs (Extention to Lagrangian)


(See below: 7.2: Nature of Hamiltonian versus Lagrangian)

### Level 7: Natural momentum (Extention to Lagrangian)
Emergence of Momentum.

Lagrangian assumes x-dot to be the momentum.

A natural extension of `F=ma` where the right-hand side is d/dt of momentum.

#### Noether's
How the "Natural momentum" view (paradigm) is related to the Noether theorem

( Quote: "The Noether theorem connecting symmetries and conservation laws can be applied directly in a Hamiltonian framework without using any intermediate Lagrangian formulation")

#### As invariant
Following Emmy Noether: "As invariant"

What are other invariants? 

Is one invariant enough?





#### Relation between Hamiltonian and Free Energy (see "Liouville" below)

### Level 7.2: Nature of Hamiltonian versus Lagrangian
* Lagriangian is about  generalized coordinates, and
* Hamiltonian is about ...

##### Some Lagrangian concepts
* configuration-ness: *q_i*

#### "Ignorable coordinates"
* A key find/property in a system: "Lagrangian being independent of certain generalized coordinates" ...
     * Then, "we can transform to reduced coordinates"
     * That, then, will not be a "true Degrees of Freedom" (We have a set of "true DoF"s)
     * It provides a set of "reduced dimensions",
     * It provides "reduced coordinate frames" ("remaining degrees of freedom") -- which *may* "have closed form equations"

#### Generalised Momenta
* generalized velocities are not momenta "generalized momenta"
    * generalized velocities `:=` time-derivatives of the coordinates = q̇
        * (note the dot `q̇` )
    * conjugate momenta:= ∂L/∂q̇_i

* "generalized momentum" = p_i
    * = ∂L/∂q̇_i
    * generalized momentum is the partial derivative of the Lagrangian with respect to the corresponding generalized velocity q̇_i

* Correspondence between: q_i ↔ q̇_i ↔ p_i
    * Hence, are called "conjugates" (q_i ↔ p_i) 

* Are not *p_i* those momenta in Hamiltonian notation already? if so, why do we need Legendre transform?

* todo: canonical coordinates (q,p)

* The "full state":
   * "Knowing all *p_i*'s and *q_i*'s" fully specifies the state of the system"
   * Also knowing *(q̇_i, q_i)*'s?
   * "Hamilton's equations use *(q, p)* pairs to represent evolution"
       * `Q:` Aren't *p_i* those momenta in Hamiltonian notation already? if so, why do we need Legendre transform?
           * `A:` Yes. In Lagrangian, "p_i = ∂L/∂q̇_i appear implicitly"
           * But in Hamiltonian, they are the main (Church-Lambda-like) variables *H(p,q)*. (?check)
           * The Legendre Transform, constructs the `H` function itself: *H(p,q)*.
           * That is, energies in terms of
           * So, it is about "the variables" (the explicit variables) (the choice of variables that are considered as explicit input: literally "variable" (versus function)).
           * It is about "representation" (that is, "explicit": It matters what is explicit. Both in terms of H or L, and its chosen Church-Lambda s!).
           * "Representation" is about the energy-like function (H or L) as well as the variables (in the sense of Churchian-Lambda)
           * Explicitness is also about both.
           * But the (engineering/implementation) solution of them, that is numerically implemented in a system may not be? even if Hamiltonian is used to derive it, it may not be Hamiltonian? not sure. (In terms of programming types, variables, args, functions, function calls)
           * Nice term: "expressed explicitly"
           * A "point of view": a Lagrangian point of view versus a Hamiltonian view
           * "direct", "direct use": Using q's and p's "directly", etc.
           * Transforming the point of view (e.g. "Legendre" here(?))
           * So Legendre transform ( *L(q̇,q)* → *H(p,q)* ) does three things:
              * makes the momenta explicit: *p:=*, i.e. *p* from q̇,q
              * transforms the energy representation: *L(,)* → *H(,)*
              * variables: *(q̇,q)* → *(p,q)*

The Legendre procedure
* "flips representations"
* exchanging variables
* exchanges for their derivatives
* new ones become "primary variables"
* now we have a new domain: we call it a co-domain ("the transformed co-domain")

More vocabulary:

Terms:
* "derivable ancillary information" = ?
* "produces" H
* "coins a new representation"
* "formulation", "expressed explicitly"
* around-ness(!): "expressed explicitly around the momentum quantities directly"
* "leverages intrinsic mathematical duality" = (?)
* "central variables"
* being "variables in their own right"
* "derivative quantities" --->  now promoted to --> "central variables in their own right"

#### On Transfomrations
On term "co-domain":
In general, when we do a Transform, we change the "domain". Hence, we have a co-domain.

More vocabulary:

"Swapping" the variable x with y. Or swapping the "role" of variables x (as a domain?) and its derivative p. (role here, means being explicitly a Churchiuan-Lambda ness?)

"recovered" (when in dual, we recover the original one from the transformed one; after all, it is a "bijection"

* "to toggle perspective between"

"primal and dual formulations"

Legendre is: an "algebraic mechanism".

(always also transforms?)

A "bijection" implies a "duality"?

Usually we use astrix `*` in duality: f ⟶ f* → f** = f

Legendre is "a general mathematical duality technique"

The term "bidual": (?)

* Applications (of Legendre?): Turning a convex into a concave function (optimization, economics game theory, geometry, and statistics)

* The new f'(x) "represents new useful information"
* A transform, "constructs"


#### Legendre Transform: The user manual
LT is:
* A bijection that fundamentally exchanges variables for the other variables
* Those quantities (variables) their conjugate dual quantities (variables)
* from one formulation of a problem to a dual "formulation" ("representation of problem")

o
   * We have an "implicit function formulation *f(x)*"
   * taking derivatives df/dx "reveals extra information" (!) (*df/dx*)
   * Are quantities (information), call them `p`
   * "You want to construct"
   * to construct an alternative "explicit formulation" *F(p)*
   * The `p`, "those derivative quantities",
   * We want to make those p, as variables themselves
   * The new function F should be in terms of those variables explicitly, (and what else?)

* Legendre uses "calculus duality":
    * "Calculus duality" refers to the intrinsic connection in calculus between differentiation and integration
    * Differentiation <-> Integration
    * (Hence, is a form of "calculus duality")


    * The new f'(x) "represents new useful information" (from f(x) ). (???)
    * Constructs
    * *xf'(x)−f(x)*
    * Why *F(f'(x))* ?
        * in: *F(f'(x))=xf'(x)−f(x)*
    * Exchanges variables *x* and *f'(x)* 💡
        * Using integration-like steps (??)
    * "leverages" the following, to "flip representations"
        * "the innate duality between differentiation"

Note:
* Taking the derivative df/dx "generates" some new piece of information
* new information = arg = input = new explicit variable = Churchian-Lambda

Ancillary ( in general context):

* "ancillary" ( = supplementary) = opposite of "central"
* ancillary variable = supplementary variable
* ancillary variable = not central (to the primary formulation)
    * central-ness: (in the primary formulation)
* "Ancillary", in general
    * refers to something that provides
         * supplementary support
         * information,
         * or service
    * to aid with
        * understanding
        * or analyzing a problem
    * but is not part of the
        * main ideas,
        * main objects,
        * or main computations
* Ancillary objects
        * are additional structures
        * enrich analysis
        * (but) are not central formulations
        * are not "variables in their own right"

Example Ancillary objects: that help motivate arguments:
        * utility functions,
        * test metrics,
        * intermediate lemmas

* Ancillary objects: help motivate arguments
* Ancillary objects: Useful but secondary in nature
* Ancillary objects: Contrasts with principal objects
* Ancillary objects: Contrasts with primary objects
      * Example principal/primary objects:
          * core variables
          * main equations
          * central theorems, being communicated or proven

* Ancillary
    * = Supplementary, secondary in focus or use
    * Plays a supporting role to core mathematical constructs
    * Non-vital
    * but provides assets in analysis and comprehension

#### Duality:
Duality refers to two related mathematical
* d:
     * objects,
     * formulations,
     * or theories
that shed light on each other by providing reciprocally-connected "perspectives".

perspectives that shed light on each other.


* "Dual structures"
* "mirrored roles"
* between quantities
* between spaces (switching with)
     * spaces: example: points ⟷ lines in projective geometry
     * wavefunctions ⟷ momentum operators
     * optimization constraints ⟷ "gradient inclusion" conditions

* Transformations:

Often easier to study one formulation,
then translate insights via the duality:
* operations  switch forms
* properties switch places
* operations  switch places
* properties switch forms

"flipping vantage points" = ?

* 交換
* prizes
* 新
* information
* information or understanding

Like a "parallax"

discovery or "proof generation" flows bidrectionally

Illuminating blindspots

* Two opposing formal viewpoints.
* But grounded in the same relational structure

"Convex analysis" = study of convex functions

* convexity properties
* convexity inequalities
* convexity relationships
* convexity on vector spaces
* convexity on topological spaces

* "hyperplane theorems"
* classifying convex sets
* classifying convex sets geometrically
* Convex/concave duality
* conjugacy transforms (like the Legendre transform)
* Fenchel inequality (for convex functions)
* Properties of relative interiors
* Properties of closures and convex envelopes
* Properties of convex envelopes
* Subdifferential calculus (derivative for convex functions)

Convex analysis applicaitons: optimization, economics, engineering

"function theory" (real analysis, or complex analysis)


(todo: Some more on Duality, Legendre, and Optimisation)


### Level ?: What? Rotating 90°: Contours

Also see the section: "Generalised Momenta"

By Legendre, we rescale (here, I see it as rescale/distort) the velocity axis (now "momentum"), and as a result,
the contours (in the sense of iso-potentials) are perpendicular to the vector space, and hence parallel to "the trajectory".

### Level 8: Something volume of which
* is preserved
* is entropy
Its relation to natural-ness of phase-space.

A natural way of parametrising phase space (also see: "natural momentum")


### Level 9: Liouville's theorem's route

Liouville's theorem (Hamiltonian): (Quote: )
* "The phase-space distribution function is constant along the trajectories of the system", "is constant with time".

* "the density of system points in the vicinity of a given system point travelling through phase-space", "is constant with time".

What do we still have without "Liouville's theorem"? Do we have Hamiltonian without the property of "Liouville's theorem"? e.g. indiscrete. or: Isn't Legendre enough?
Would it otherwise have been natural? useful? etc

#### Relation between Hamiltonian and Free Energ"ies"

### Level 10: Is Action Integral more natural, or Hamiltonian?
or both are the same?

### Level 11: Hamiltonian emerges naturally in the Symplectic Group

Symplectic geometry (and Symplectic Group) "has its origins in the Hamiltonian formulation of classical mechanics"
where the phase space of certain classical systems takes on the structure of a "symplectic manifold".

First, in your mind, separate Symplectic Group, Symplectic Geometry, Symplectic Manifold, etc.

* A symplectic manifold: (M, ω)
* symplectic form ω
* ω guides the coordinates

* M is also referred to as a "phase space"

ω "guides" coordinates means: ...

### Level 12: (reserved)

### Level 13: HJ formulation (beyond "mechanics")
HJ in control theory.

### Level 14: Hamiltonian Quantum formalism
How Hamiltonian Quantum formalism is
* Different to classical
* Inspired classical mechanics (classical Hamiltonian)
* Is inspired by classical mechanics (classical Hamiltonian)

Did Schrödinger inspire to poularise use of Hamiltonian?


### Level 15: Bag of energy-like quantities
Bag of energy-like quantities:
* Free Energy
* Total Energy
* Hamiltonian (classical)
* Hamiltonian (Quantum)
* Lagrangian
* Lyapunov! (engineering)
* Devising a Hamiltonian: continuous in statistical model (state-space) for sampling etc
* Devising a Hamiltonian as HJ in control
* Devising a Hamiltonian for discrete (discrete protein folding on grid points)
* Potential functions ("thermodynamic potentials")
* Field equations / Field theories (not sure)

## Many routes
* Symplectic
* Lagrangian story (also the "Action" story)
* E+-V versus E+V story (action integral story)
* The universal problem solver story (Lagrangian or Hamiltonian? What else?)
* Hamiltonian as invariant
* Hamiltonian emerging from Noether's theorem
* Amari's route (see Legendre): "Statistical modelling"
* MCMC ("Statistical modelling")

Which can be categorised into these disciplines/paradigms:
* Stat. Mech: (beyond physics)
    * Probability (Stat. Mech) + Partition
    * Statistical modelling: (Amari)
    * MCMC
        * "State-space" methods
* Thermodynamics! (note: Conjugate variables in thermodynamics)
* Physical problem solving (applied): Physics engine and Universal problem-solving in Engineering approaches to Physics
* Group theory (Algebra)
* Control theory
* Dynamical systems (beyond physics though)
* Invariances (for physical laws, for dynamical systems, for intelligent systems, for general complex systems)

## Questions never-ending, ever-flowing
every flowing, like Vivaldi's winter, and like Heraclitus's man and the river (The logos as invariants)

Questions that every time asked, bring a breath of freshness, don't cease to bring about new insights.

* How Hamiltonian is related to Legendre transform? (in both ways) (See math-ml/Legendre-transform.md)
* Relation to Partition function
* Is it scalar or vector? (Classical versus Quantum)
* Why does it preserve the volume in phase space?
* Relation with Entropy
* Is Liouville's theorem necessary to bring about Hamiltonian from Lagrangian?
* Many paths: Symplectic
* Non-continuous (when not d/dt x = d(x) ) such as in discrete spaces
* Quantum (is it radically different?)
