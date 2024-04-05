# Probabilistic Programming Languages

Raw list:

### Functions
Languages, DSLs and libraries


Languages, DSLs, libraries, Packages, toolkits, DSL, frameworks

* Pomegranate
* pgmpy
   * "Probabilistic Graphical Models" (?)
* Pyro  ( πρ ) (uses PyTorch)
* Dice
* Edward
   * Edward2: https://edwardlib.org/ by Dustin Tran ([slides](https://docs.google.com/presentation/d/1bTvqHh2kjF0UjxIxM-OWJcATeGrcF1IrVksBzVE7Ss0/edit?resourcekey=0-Hdh487_jFj1eBIGDhktSfA#slide=id.g13dca569543_0_0))
   * (now part of TensorFlow Probability (?) ) Edward is built on TensorFlow
* PSI solver
* ΣΠPL
* Bambi
   * (Bayesian Analysis of Mixed Models in Python)
   * -- Good for fitting complex statistical models


* Tensorflow distribution


* BUGS
   * JUGS
   * OpenBUGS
   * WinBUGS
   * JAGS (Just Another Gibbs Sampler)

* Stan stack: Stan, and where is stands [ [w](https://en.wikipedia.org/wiki/Stan_(software)) ]
   * Stan (written in C++)
      * not:  ~( Stan -> R )~
   * Bindings:
      * BRMS ( R <-> Stan )
      * PyStan (Python <-> Stan)
      * rstan ( R <-> Stan, another? )

* PyMC3 (now PyMC ) [ [w](https://en.wikipedia.org/wiki/PyMC) ]
   * PyMC4
   * PyMC3 used Theano ( Theano-> Aesara, added JAX, Numba -> PyTensor), and now TF, and now PyTensor
   * PyMC2
   * PyMC1 (formerly PyMC)

Various / minor
* Tom Nielson's: BaySIG, his newer Haskel-based
* blackjax: https://github.com/blackjax-devs/blackjax
* ( Bayesian Flow Networks )

Side tools:
* ArviZ ( A Python package for exploratory analysis of Bayesian models: visualization and diagnostic tools )

Discrete-distribution:
?

FEp:
*

### Functions
Functions of focus
PyMC: Markov chain Monte Carlo (MCMC) and variational inference (VI)

What is wanted from these:
* Modelling
* Sampling ( & inference )
* criticism

Sampling:
* Gibbs sampling
* MCMC
* Langevin


Types of MCMC they support: (See mcmc.md here )
* No U Turn
* 
