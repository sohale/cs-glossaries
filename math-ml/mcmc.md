# MCMC

## Introduction
MCMC = Markov Chain Monte Carlo

Evolution:
Metropolis et al (1953) → Hastings (1970) → Green (1995)

Methods
* "Monte Carlo"
* "Metropolis" algorithm
* "Metropolis--Hastings" algorithm
* "Metropolis--Hastings--Green" algorithm

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

## Mathematics
Properties:
* (is) Markov Chain
* (is) Stationary
   * Adaptive MCMC: nonstationary (but almost-Stationary)
* Continuous State Space (uncountable)

Definition: MCMC is characterised by:
 * "initial distribution"
 * transition pdf
