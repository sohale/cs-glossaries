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
$1/N $

Also:
$1/N^2 $

### Nemenman-Shafee-Bialek technique(s)
Beta function

