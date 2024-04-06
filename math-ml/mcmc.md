# MCMC

⛓️‍💥⛓️⛓
.Ⓜ️

## Introduction
MCMC = Markov Chain Monte Carlo

Evolution:
Ⓜ️ Metropolis et al (1953) → Hastings (1970) → Green (1995)

Methods
* "Monte Carlo"
* "Metropolis" algorithm
* "Metropolis--Hastings" algorithm
* "Metropolis--Hastings--Green" algorithm (MHG)

Timeline:
* "Monte Carlo"
* Metropolis et al (1953)
* Hastings (1970)
   * Various (including Geman & Geman 1984, etc)
* Green (1995)

Timeline: (with details)
* "Monte Carlo" -- simulations
* Metropolis et al (1953) -- Los Alamos (physics): simulating liquid-gas equilibrium. Chemists & Phsicits for simulation
* Hastings (1970) -- generalised
* Various (slow catch-up, despite Hastings)
   * Geman & Geman (1984) --  ( as "Gibbs sampler") (a special case of "Hastings" ! ) (focus on optimisation: finding the posteriors's "mode")
   * (various): "Gibbs sampler simulated the posterior distribution" -> enables "full Bayesian inference of all kinds"
   * called "data augmentation" (Tanner, Wong 1987)
   * popularised to whole statistics (Bayesian community) (not just spatial) by (Gelfand & Smith 1990)
   * "Bayesian Inference" can be done by "MCMC"
   * Took a while to fully understand MCMC's theory.
* Green (1995) -- "Metropolis--Hastings--Green" algorithm: Generalised it as much as it can be generalised!

For more info: [Brooks, page 29](https://bookshelf.vitalsource.com/reader/books/9781420079425/pageid/29)

MCMC:
Aims:
* Bayesian Inference
* Likelihood Inference, (when likelihood cannot be explicitly calculated)

MCMC:
* Bayesian Inference (explicit likelihood?)
   * Simulation
   * Gibbs sampling
* Likelihood inference (implicit likelihood)


### See also
* https://github.com/sohale/cs-glossaries/blob/master/math-ml/hamiltonian.md?plain=1#L90
* https://github.com/sohale/cs-glossaries/blob/master/probabilistic-programming/probabilistic-programming.md
* Book: *Handbook of Markov Chain Monte Carlo* [1]


### References
[1] (Book) **Handbook of Markov Chain Monte Carlo.** Steve Brooks, Gelman, Jones, Meng (2011) https://bookshelf.vitalsource.com/reader/books/9781420079425/pageid/29
[2] CLT: (Kipnis and Varadhan, 1986; Roberts and Rosenthal, 1997) -- See for CLT: Markov Chain Central Limit Theorem 

## Mathematics
Properties:
* (is) Markov Chain
   * Except for pseudorandom seed
   * "*x* **must** be the entire state of the program" 💫
* (is) Stationary
   * Adaptive MCMC: nonstationary (but almost-Stationary) 💫
* Continuous State Space (uncountable)
* That's all (MCMC).

Definition: MCMC is characterised by:
 * "Initial distribution" (unconditional)
 * transition pdf (conditional) (Markov)
```python
rng = initialise
x := ~ initd
   x' ~ f( x ; rng )
   x = x'
   loop
```

in other words:
```python
...
loop:
   x' ~ f( - ; rng | x )
   x = x'
```
Better:
```python
def MCMC(initd, f ; rngseed) :

   rng = rngseed   // initialise
   x := ~ initd
   loop:
      x' ~ f( x ; rng )
      rng.++
      x = x'
```
Even better:
```python
def MCMC(initd : distribution, f : function ; rng : process) :

   rng.++   // draw
   x := ~ initd [;rng] ()
   loop:
      x' ~ f [; rng] ( x  )
      rng.++
      x = x'
```
Even better 3:
```python
def MCMC(initd : distribution, f : function ; rng : process) :

   rng.++   // .~draw() ? , or it could be .init()
   x := rng. ~draw(rng)
   loop:
      x' = f_draw ( x ; rng)
      rng.++  // or rng.~draw()? also: .advance()
      x = x'
```

Even better 4:
```python
def MCMC(initd, cpdf : distribution ; rng : process) :
   assert: cpdf : conditional distribution
   /# assert initd : distribution
   r_ = rng.advance()    # not the rng
   x := initd. ~draw(r_)   # initd is already Curry-ed
   loop:
      x' = cpdf(x).~draw( r_ )
      yield x'

      r_ = rng.advance()
      x = x'
```

Of course, it
* is a Stochastic Process
* That's it! MCMC. Not much structure
* most "simulations" are MCMC


### Stationarity & Equilibrium properties:

Stationarity:
* Depends on "initial distribution" too. 💫
   * "transition pdf stationary" is not enough (necessary, but not sufficient)
   * "transition pdf stationary" `<=` "stationary", but not vice versa
* Stationary, Invariant, Equilibrium
* It *preserves* the initial distribution! 💫
   * As a result of stationarity

Interesting property:

* Theorem:
* if `initd` is Dirac delta, MCMC is always constant. (*iff*)

* Theorem:
* if `initd` is Dirac delta, MCMC is usually not stationary (??)

(What?)
(Doesn't this contradict the above one?)


So, these, are related:
* Stationarity
* Invariant
* Equilibrium
* preserves
...

#### The 🔑 **equilibrium** property

Having an equilibrium distribution is a key 🔑 and desired property of MCMC.

...

#### Other related properties
* Reversibility

"Reversible with respect to initial distribution"

* Reversibility ⇒ Stationarity
* Reversibility ⇏ Stationarity

⇒⟹⇏⇏

Reversible jump


####
CLT: Markov Chain Central Limit Theorem [2]

### The MHG algorithm
* 1.12.2 (page 23) -- The MH Theorem
* 1.17.3.2 (page 42: 69)
* 1.17.4.1

The "Update" variants:
* Metropolis Update
* Metropolis-Hastings Update
* Gibbs Update
* Combined updates
* MHG Elementary Update


Theorems:

* Metropolis-Hastings Theorem [[book page 23](https://bookshelf.vitalsource.com/reader/books/9781420079425/pageid/49) 1.12.2]
* MHG Theorem [[book page 42](https://bookshelf.vitalsource.com/reader/books/9781420079425/pageid/68) 1.17.3.2]
* MHGJ Theorem [[book page 46](https://bookshelf.vitalsource.com/reader/books/9781420079425/pageid/72) 1.17.4.1]

Some key terms
* Variable-at-a-time (p 25)
* Reversible jump
* kernel

* Radon-Nikodym derivative

* padding parameter-vectors
* ST
* US
* Measure-Theoretic MHG
* Augmented State Space
