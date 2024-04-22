# Mathematical models of major Neural Network types

Main ones used in industry or literature.

1. MLP
   * Multi-Layer Perceptron (deep or shallow)
   * Does not need explanation.
   * Principles and roots: Integrate and fire, LNP
   * Operators: Layers: weighted-sum, nonlinearity
   * Training: Back propagation, momentum
      * Gradient decent: batched (or stochastic), momentum
   * Regularisation: ..., drop-out, L2 Regularization on weights (penalty funciton), L1 regularisation on weights (sparse, feature selection), Early Stopping (avoiding learning too much), Batch Normalization
   * * Cons: Zero Gradient, Memorizing input data, Internal covariate shift
2. GAN
   * Generative Adversarial Networks
   * Principles and roots: P.C..., Nash equilibrium, ()
   * Operators: Distriminator (N:1) & Generator (m:N)
      * Each is an MLP (m:N, N:1)
      * Nonlinearities: LeakyReLU, etc
      * cross entropy
   * Training: Back propagation
   * Regularosaotpn: a
   * Cons: Can be unstable, slow, mode collapse
3. ResNet

4. VAE

5. Bayesian Network

6. U-Net

Queue: ELM, CLIP
