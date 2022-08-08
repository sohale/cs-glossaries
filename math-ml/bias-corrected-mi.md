Bias correciton methods:
1. Pan eri Montemurro
2. Paninski (UB)
3. Bialek

Based on:
* Pan eri, Senatore, Montemurro, Petersen. Correcting for the sampling bias problem in spike train information measures. 2007. [doi](https://journals.physiology.org/doi/full/10.1152/jn.00559.2007), [pubmed](https://pubmed.ncbi.nlm.nih.gov/17615128/)
* Related: Tight [pubmed](https://pubmed.ncbi.nlm.nih.gov/17883346/)


Increase the vairance but reduce the bias.

bias reduction techniques and solutions:

| Technique↓     Solution →|  BUB      | NSB  | TDB | Senatore |
|-------------------------:|-----------|------|-----|----------|
| Pan eri-Treves           |           |      |     |  -       |
| Quadratic Extrapolation  |           |      |     |   ✔︎      |
| Best Universal Bound     |           |      |     |          |
| Nemenman-Shafee-Bialek   |           |      |     |          |
| shuffling procedure(s)   |           |      |     |   ✔︎      |
| Strong et al (binning)   |           |      | ✔︎   |   ✔︎      |

* Strong et al: → two techniques: (1) QE and (2) binning. (QE. See above)
* Best Universal Bound →
* Nemenman-Shafee-Bialek →



|                          |     |       | shuffling |          |         |          |         |        |
| solution↓      technique→| bin | KL ΔI | surrogate | cumulant | Oizumi  | Gaussian | Copula  | binning |
|-------------------------:|-----|-------|-----------|----------|---------|---------|--------|---------|
| Pan eri-Treves           |     |      |           |          |         |         |        |         |
| Strong et al             |     |       |           |          |         |         |        |         |
| BuB                      |     |       |           |          |         |         |        |         |
| NSB                      |     |       |           |          |         |         |        |         |
| Nirenberg                |     | ✓✔︎    |           |          |         |         |        |         |
| Montemurro               |     |       |           |          |         |         |        |         |
| Senatore                 |     | ✓✔︎    |           |          |         |         |        |         |
| lfp                      | ✗ ✘ |       |           |          |         |         |        |         |
| Sonia?                   |     |       |           |          |         |         |        |         |
| Tsodyk                   |     |       |           |          |         |         |        |         |
| PyThropy                 |     |       |           |          |         |         |        |         |
| GCMI                     |     |       |           |          |         |         |        |         |

TDB = Montemurro 2007 (TDB)

Other techniques:
* Smoothing
<!-- * Dithering: a kind of smoothing similar to shuffling -->
* Metric (Victor)
* Cumulant
* I.Geom (Oizumi)
<!-- * Max-entropy or Exponential Models: IG? Generalisation of "simpl" --> 
<!-- * Receptive field (apperture) with hierarchy -->
* ?
<!-- * Kalman, sort of ... (but that also involves guessing a state signal. A history-based also probably does this. -->
<!-- Somehow bring in the PP? -->
<!-- * invariants: 1. analytical 2. sample augmenting -->
<!-- * Generative? Does it help? By ounterfactual expriences -->
<!-- * Copula (Almost the same as Gaussian) -->
<!-- * Copula (cancel-out-marginal: whiten the marginal) -->
<!-- * Whitening the whole distribution -->
<!-- * Whitening as a geometry -->

<!-- techniques bawed on simp=IND. Also: based on other decompositions: based on variaous state variables? Can we have RBM? -->
* Explain away: For example, PT95 (Treves-Pan eri) formula cancels away some.

### PT95 technique
[PT95](https://doi.org/10.1162/neco.1995.7.2.399)

$1/N $

Also:
$1/N^2 $

* Based on Miller-Madow bias correction (Miller 1955).

### BUB
[BUB2003](https://ieeexplore.ieee.org/abstract/document/6790247)
* “histogram order statistics”
* “Best Universal Bounds” (BUBs) on both bias and variance. 
* $k_{max}$ “degrees of freedom” 
* [Matlab code](http://www.stat.columbia.edu/~liam/research/info_est.html)
* Theoretically: very competitive when both N and R̄ are very large
* Practically: "BUB gave a rather similar performance to PT and QE methods even using the optimal $k_{max}$"
* "Adaptive Partitioning" = ?
* "jackknifed" = ?
* MLE


### Nemenman-Shafee-Bialek technique(s)
Beta function


## Refs:
* [PT95](https://doi.org/10.1162/neco.1995.7.2.399)
* [BUB](https://ieeexplore.ieee.org/abstract/document/6790247) Paninski 2003 Paninski L. Estimation of entropy and mutual information. Neural Comput 5: 1191–1253, 2003. [doi](https://doi.org/10.1162/089976603321780272), [~liam pdf](http://www.stat.columbia.edu/~liam/research/pubs/info_est-nc.pdf)
