# Hebbian, STDP, Oja: Learning


[Almost] The title:
* Hebb
* Oja
* STDP

(Neural) Learning s ooposed to eural coding.

The house of (
Master list of words-only):
* Hebb
* Anti-Hebbian
* STDP learning
* Oja rule
* BCM theory
* ...
* Training
    * Back-propagation
    * Contrast ...

Appraoches: (lines of people)
* Hebbian learning
   * Then anti-hebbian
* STDP
* Oja rule
* BCM theory
* Back propagation
* Contrastice leanring
* Info-theoretic leanring (Amari's ICA) and update rules
* NCE
* Spiking NN people
   * Surrogate Gradient
* PP/FEP (error signal, also: RL as PP) (maybe all RL?)
* RL
   * TD (temporal differnce RL)
   * Other types o RL
* Basically learning rule for any ML system!
    * ...

### Categorizations:
Each item is a list
* Models of Long-Term Plasticity: Hebbian learning, BCM, ...
* Model Selection (AIC)
* PP/FEP
* ML !
   * RL (methods / approches)
* System identificaiton (methods / approches)
* Bayesian Model selection (methods / approches)
* Biological Plausibility (Biologically plausibile learning)
* Learning in real brain (how the brain works, not as techniques, or even brain theories: more experimental and biological)
* (something that covers Hopfield: ebnergy based? free-energy--baed, cost-function-based, Lyapunov, etc)
* Cost functions: approachs in defining cost functions
* Those within Gradient Descent vs Beyond Gradient Decent (as in Largangian/Hamiltonian in mechanics? Not momentum! but may include that too. Also, one branch, is below one that includes Adam)
* Variations of NLO: Stochastic GD, Adam, etc. inlcudes all Fletcher-like. But goes beyond.
* Bias correction technique (as learning?)
* Variaitons of back-propagation (see below)
* Ensemble Learning as leaning alrogithms (learnings of Adaboost, Boosting, GradBoost, etc)
* Maximum Likelihood as learning (also: ... as learning)
   * Non-MaxLik approaches (but move from there): NCE, etc
* Non- Maximum-lihelihood

as "fit".
fitting of experimental data to a mechanistic model.

error (RL: predictive error/TD/PP) from highly-uncertain low-probablity model (e.g. of rewards)
strategies:
RL

Where:
* Where does EM stand?
* Where (which of above lists of categorizations) this fits: "Stochastic Gradient Langevin Dynamics (SGLD)"

Them:
* Cost functions: approachs in defining cost functions
    * Trajectory and variational
    * Quadratic ( least square) including
    * KL -- based approaches
    * EMD -- based approaches
    * AIC/BIC (also as regularization?)

* Variaitons of back-propagation
    * xyx-propagation
    * probabilistic BP

Names of loss funciton
* Cost function. Context: ...
* Loss function
* Error function
* Error signal (PP/FEP, also, RL)
* Clarke PP ( vector of error, beyond cost funciton, even trajectory) 
* KL
* KL-approximaiton ( not KL, but its adjustmnet: EMD, the FEP itself, etc)
* Lagrangian/Hamiltonian/etc (functions of trajectory)
* Maximum-likelihood and its augmentaitons: AIC/BIC, etc

## Cross-connecitng them

* Stochastic Gradient Descent as a Special Case of MCMC
   * Enter "Langevin dynamics"

## References
See Also:
* [probabilistic-neural-networks.md](https://github.com/sohale/cs-glossaries/blob/master/math-ml/probabilistic-neural-networks.md)
* [crosslink-hmc-optimisaiton-nce-backprop-sde.md]

Content Overlap:
* https://github.com/sohale/cs-glossaries/blob/master/math-ml/spiking-nn.md
* Free energy
