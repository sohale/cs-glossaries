Bias correciton methods:
1. Panzeri Montemurro
2. Paninski (UB)
3. Bialek

Based on:
* Panzeri, Senatore, Montemurro, Petersen. Correcting for the sampling bias problem in spike train information measures. 2007. https://pubmed.ncbi.nlm.nih.gov/17615128/
* Related: Tight https://pubmed.ncbi.nlm.nih.gov/17883346/


Increase the vairance but reduce the bias.

bias reduction techniques and solutions:

| Technique↓     Solution →|  BUB      | NSB  | TDB | Senatore |
|-------------------------:|-----------|------|-----|----------|
| Panzeri-Treves           |           |      |     |          |
| Quadratic Extrapolation  |           |      |     |   ✔︎      |
| Best Universal Bound     |           |      |     |          |
| Nemenman-Shafee-Bialek   |           |      |     |          |
| shuffling procedure(s)   |           |      |     |          |
| Strong et al             |           |      |     |   ✔︎      |



| solution↓      technique→| KL ΔI | shuffling/surrogate | cumulant | Oizumi   | Gaussian | Copula | binning |
|-------------------------:|-------|---------------------|----------|----------|----------|--------|---------|
| Strong et al             |       |                     |          |          |          |        |         |
| BuB                      |       |                     |          |          |          |        |         |
| NSB                      |       |                     |          |          |          |        |         |
| Montemurro 2007 (TDB)    |       |                     |          |          |          |        |         |
| Senatore                 |       |                     |          |          |          |        |         |
| Sonia?                   |       |                     |          |          |          |        |         |
| Tsodyk                   |       |                     |          |          |          |        |         |
| PyThropy                 |       |                     |          |          |          |        |         |
| GCMI                     |       |                     |          |          |          |        |         |

Other techniques:
* Smoothing
<!-- * Dithering: a kind of smoothing similar to shuffling -->
* Metric (Victor)
* Cumulant
* I.Geom (Oizumi)
