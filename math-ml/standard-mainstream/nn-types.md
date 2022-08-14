nn-types:

good ideas (not good banchmark performances)


### Features:
is control
* is cost-function (Also: variations? tranjectory? EulLagr?)
* `×`: Uses factorizing. e.g.: IND, so-called VAE.
* reduces error
* `gen`: is generative
* PP's δ
* PP's weights
* recoder (e.g. autoencoder)
* $\Pr$: prob/Bayes
* $\partial/\partial$: derivative or difference (PP)
* ff/fb: directions: e.g. sleep/wake cycle
* unified train/activit (eg Impicit)
* reward
* Mesh (undirected, generative)
* lateral
* **Recurrent** (RNN, TdNN, local layer loops)
* episodic history: e.g. Atari
* Value (expected reward)
   * discount factor
   * accumulation
* Sampling hypothesis (MC?)
* Binary
* Hamiltonian (e.g. Monte-Carlo Hamiltonian)
* Momentum
* Amari's G term
* Information theoretic
   * Information geometric?
   * Comparison
   * HBGS? (that NN)
   * [Infomax](https://en.wikipedia.org/wiki/Infomax)
* `A`: Attention-All-You-Need: (A specific way of attention)
* Sparsity penalty term
* Some gating: (LTSTM, attention, etc): 0-1 or graded. (various types og gating?)
* Some normalisation: Oja's rule, etc
* Weight update:
   * back prop
   * Hebbian
   * BCN (Bienenstock)
   * STDP
   * ?
* Geometric
   * Also see Group theory?
   * Also see: Invariance
* Invariance-imposing
    * method 1
    * method 2
    * etc
* Pluggable techniques: (Generic for all)
   * Batch size
   * Dropout (also: which method of Dropout)
   * Stochastic (SGD, Adam)
   * Optimisation method (BFGS, DFP, ...)
   * Injected noise? (somehow. But not random Batch)
   * CNN (Also see Geometric)

### The table
|`↓`type feature`→`| is control | is cost-function | `×` | reduces error | `gen` | PP's δ | PP's weights | recoder | $\Pr$|$\partial/\partial$ | ff/fb |
|:--------------------|----|-----|-----|----|----|----|----|----|----|----|----|
|                     |    |     |     |    |    |    |    |    |    |    |    |
| ResNet              |    |     |     |    |    |    |    |    |    |    |    |
| Auto Encoder        |    |     |     |    |    |    |    |    |    |    |    |
| Vicarious           |    |     |     |    |    |    |    |    |    |    |    |
| (Capsules)          |    |     |     |    |    |    |    |    |    |    |    |
| (Machens)           |    |     |     |    |    |    |    |    |    |    |    |
| (FlowNets)          |    |     |     |    |    |    |    |    |    |    |    |
| Backpropg+<br/>ReLU |    |     |     |    |    |    |    |    |    |    |    |
| (BayNet)            |    |     |     |    |    |    |    |    |    |    |    |
| (Free Energy P)     |    |     |     |    |    |    |    |    |    |    |    |
| RBM.                |    |     |     |    |    |    |    |    |    |    |    |
| GAN                 |    |     |     |    |    |    |    |    |    |    |    |
| RBM stack           |    |     |     |    |    |    |    |    |    |    |    |
| HelmH sleep         |    |     |     |    |    |    |    |    |    |    |    |
| LTSTM               |    |     |     |    |    |    |    |    |    |    |    |
| WaveNet             |    |     |     |    |    |    |    |    |    |    |    |
| Transformer         |    |     |     |    |    |    |    |    |    |    |    |
| GPT-3               |    |     |     |    |    |    |    |    |    |    |    |
| That probabilistic  |    |     |     |    |    |    |    |    |    |    |    |
| Implicit            |    |     |     |    |    |    |    |    |    |    |    |

### Network name:
([see](https://en.wikipedia.org/wiki/Category:Artificial_neural_networks) for more)
* `HelmH sleep`: HelmHoltz: sleep/wake cycle (Hinton)
* Backpropg + ReLU
* SIREN: Implicit Neural Representations with Periodic Activation Functions [link](https://www.vincentsitzmann.com/siren/) / sinusoidal representation networks.
* Thosand Brains? (not really a fully fucntional? HTM?)
* Metropolis
* Other networks that don't fit here
    * RL
        * Temporal Diffference
        * ...
    * actor-critic systems
    * Hopfield networks
    * PCA
    * various (See https://en.wikipedia.org/wiki/Category:Artificial_neural_networks )
    * Liquid state machine
    * echo state?
    * ICA
       * fastICA
    * HTM: Hierarchical temporal memory
    * Kohonen (SoM)
* (other networks:)
* ART (1, 2, 3)
* Lense (category)
* U-net: [U-net](https://en.wikipedia.org/wiki/U-Net)
* Specific:
    * VGG11
    * TernausNet

### Other features:
* Nash between parts (check difference between two modules): GAN
* Adding special module: reward
* Spiking
* Nonlinearity type (of course)
    * GT, ReLU, tanh, "ReLU PE", RBF, SIREN
* Locaiton?
   * Coordinates
   * Positional Encoding? (See SIREN)
   * Grid cell (or some form of periodic)
   * Place cell
   * Thosand Brains?
* Implicit geometry ( implicit 3d, Hinton's other work for body, etc )
* Memory type:
   * RNN (recurrent)
   * LTM (weights)
   * value (RL)? gating? etc.
   * Why called 
   * todo: STM/LTM/ITM/WM multiple
   * todo: multipleNT (Kandel versus Hopfield versus Kohonen)

### Probability technique/assumption:
* Maximum Likelihood
* Max Entropy
* Log likelihood
* Cross-Entropy penalty (Wordnet)
* EM (always?)
* MM (Majorization Minimization)
* Gaussian
* Other parametric assumptions
* Exponential Distribution (prametric)
* Bayesian
* Particle Filter (as opposed to Bayesian)


✓✔︎✗✘↓→

### Notes:
* Boltzman: Binary + Sampling + explicit probability
* Metropolis:  explicit probability
* Monte-Carlo Hamiltonian
