# Mathematical models of major Neural Network types

Main ones used in industry or literature.

* Don't say these, because they are too general: RNN, CNN, etc
* Don't include these, because they are too abstract and probably impractical: Boltzmann Machines, Restricted Boltzmann Machines, Helmholtz Machines

1. MLP
   * Multi-Layer Perceptron (deep or shallow)
   * Does not need explanation.
   * Principles and roots: Integrate and fire, LNP
   * Operators/primitives: Layers: weighted-sum, nonlinearity
   * Training: Backpropagation, momentum
      * Gradient Descent: batched (or stochastic), momentum
   * Regularisation: ..., drop-out, L2 Regularization on weights (penalty function), L1 regularisation on weights (sparse, feature selection), Early Stopping (avoiding learning too much), Batch Normalization, cross-entropy term in loss function
   * more: CNN, pooling, normalisation, etc
   * Cons: Vanishing Gradient, Memorizing input data, Internal Covariate Shift
2. GAN
   * Generative Adversarial Networks
   * Principles and roots: P.C..., Nash equilibrium, ()
   * Operators/primitives: Distriminator(critic) (N:1) & Generator (m:N)
      * Each is an MLP (m:N, N:1)
      * Nonlinearities: LeakyReLU, etc
      * binary cross-entropy (for the discriminator)
      * More: Jensen-Shannon divergence (JSD), kernel maximum mean discrepancy ([MMD], (https://arxiv.org/abs/1705.08584)), Kernel Stein Discrepancy (KSD) (Stein operator, Stein witness function), constrained covariance (COCO)
   * Training: Backpropagation
   * Regularisation:
   * Cons [a](https://arxiv.org/pdf/2005.00065.pdf): Can be unstable (unstable, or may "oscillate", or may fail Nash equilibrium), slow, Mode Collapse
   * Some variations: CGAN, DCGAN, etc
      * Minor: Wasserstein GAN, WGAN-GP, Coulomb GAN, GMMN, [MMD GAN](https://arxiv.org/abs/1705.08584), Dirac-GAN, Sobolev GAN, kernel inception distance (KID)(FID), BGAN, SNGAN,
3. ResNet

4. VAE
   * Reconstruction loss (like mean squared error) and a KL divergence term
5. Bayesian Network

6. U-Net

7. Word2vec
   * Principles and roots: Cross-Entropy, Saussure
   * Operators/Primitives: Cross-Entropy
   * Loss function: cosine similarity

8. Transformers
   * Principles and roots: Attention, Word2vec, RNN/TDNN (token prediction), Place phase
   * Operators/Primitives: Word2vec, Place phase
   * Loss function:
Queue: ELM, CLIP, "Inception architecture"

Queue: algorithms: Adam

Which one is: representation learning, contrastive learning, 
Loss function terms & penalty terms: cross-entropy,
