# kNN: k-nearest neighbors algorithm
Describe the KNN

### Context
It's a classifier:

Given: `DataSet` = set of $(X_, y_i) \in R^d\times C$,
where $C=\\{1,2\\}$ is the set of labels/colours . 🔑

For query point $x$;

find $f(x)$ for $f: R^d\rightarrow C$, for any ∀ $x\in R^d$

$x$ can be points not in the `DataSet` (interpoltion and extrapolation). $∀ i: x\neq X_i$

<!-- #### Minor: -->


#### The main algorithm
* Assign the label which is **most frequent** among `NN`$(x)$`[:k]`,
* for query point $x$,
   * `NN`$(x)$`[:k]` first k elements of: <!--is the k training samples nearest to that query point.-->
      * `NN`$(x)$ is `DataSet` in descending order of distance from $x$. <!--: dist(X_`NN[1]`,x) $\le$ dist(X_`NN[2]`, x) $\le$ ...-->

[⋯]


The main technical trick in proof is this: "as the amount of data approaches infinity" (keeps the distribution the same, distances decrease).



## Related:

###  Bayes error rate
[Bayes error rate](https://en.wikipedia.org/wiki/Bayes_error_rate) := the minimum achievable error rate given the distribution of the data. 🌪🕳

#### Also see:
* Neighbourhood Components Analysis 🕳
* Large Margin Nearest Neighbor 🕳
*  leave-one-out error

### k-d trees
https://en.wikipedia.org/wiki/K-d_tree

[⋯]

### Legend
* 🔑: key point, was missing. An insight. unblock.
* 🌪: missing concept in my kowledge (hole 🕳). A Lack.
* [⋯] to be filled in (but not really missing in mind. not a Lack)

### Also see (table of)
* [Eigenvalues](eigenvalues.md) (this)
* [Lagrange multipliers](./lagrange-multipliers.md)
* [Nonlinear Optimisation methods with constraints](./nlo.md)
* [KNN](./knn.md)
* [sspanal](https://github.com/sohale/sspanel/blob/master/m1/links-panel.md)
