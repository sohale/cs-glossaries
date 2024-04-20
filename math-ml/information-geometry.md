

### That fundamental zeroness
(Is still incorrect)

Does this, kind of, say why the second derivative is important in Fisher Information?

(needs rewriting, and polishing, and factorising).

The first derivative of the log-likelihood with respect to the parameter:

$$
u(\theta) = \frac{\partial}{\partial \theta} \log p(X; \theta)
$$

If we use the Maximum Likelihood Estimate (MLE), the mean (expectation) of the above first derivative is zero:

$$
E_{\theta_0}[u(\theta)] = 0
$$

Or more explicitly:

$$
E_{X|\theta_0}[u(\theta)] = 0
$$

Vaguely, at the maximum likelihood "point", the score function is zero.

Away from the maximum likelihood estimate, the score function is generally not zero.

#### Two Expectations
Note that these are two expectations in Mathematical formalism (not semantics), that can have (lead to) two different semantics:
* `E[]` over data (X) ( over Data, or over asymptotically(-sampled) distribution (with i.i.d., stationary, ergodicity, etc) or the asymptotic distribution;  or simply the distribution)
* `E[]` over parameters (θ)

* `E[s|θ]` or  `E_{X|θ}[s]` or  `E_{X|θ}[s(θ;X)]` etc

#### Score
`u(θ)` is called the "Score function" or "informant" (deprecated name: "linear score")
Note that it does not have the `E[]`.

s() or u()?

$$
s(θ;x) := \mathcal{L}(\theta \mid x) := \lambda\theta\cdot \log(\Pr(x \mid \theta))
$$

> In statistics, the score (or informant) is the gradient of the log-likelihood function with respect to the parameter vector.  *-- Wikipedia*


#### Two ML points:
( NEEDS CORRECTION )

The expectation of the score function under θ_0 is zero.

"the true parameter" value? Nope.

If data is infinite, and in an ideal situation, the empirical dataset will be the ergodic stationary i.i.d "asymptotic" dataset (as a condition or consequence?) (We don't need Markov property, "iid" is stronger).
In that case, θ_0 .

If (an) empirical data (set) is used, we hope that this is close to an optimal parameter estimation (in MLE paradigm).

It has its own error. Also, the peak will have some error from the true good one. We can consider some type of uncertainty here, about the parameters (can be considered as parameter variance, but it s more than that, not just about "variance" as parameter, but in seeing it flas as variation too (even with entropy).

The true parameter may not exist: note that any more lies ( this is not the variance of the parameter, more the bias).

Two settings (setups):
* the empirical setting, versus
* ideal (iid, ergodic, stationary, etc).

In the empirical setting,
At the maximum likelihood estimate (of empirical data), the score function (the empirical-expected value) is zero:

$$
u(\hat{\theta}) = 0
$$

In the ideal setting,

$$
u(\theta_0) = 0
$$

maximum likelihood "point".
maximum likelihood estimate.

Repeat:
Away from the maximum likelihood estimate, the score function is generally not zero.


todo: link the two expectations to the story.

#### Visualisation
Imagine these, each gives different insights:
* log(Pr)
* grad(log(Pr))
* E[grad(log(Pr))]
etc
* Peaks of log(Pr)
* Zeros of grad(log(Pr))
* Zeros of E[grad(log(Pr))]
etc

Higher order?

### Likelihood
Wierd common notation
```math
\mathcal L(\theta;X) := Pr(X|\theta)
```

Connotations and hidden assumptions:
* Often, implies a sense in which not all probabilities are called Likelihood:
    * .
    * See side /frame of the bigger picture
* Its "mean" is usually over `X`, i.e. using `E_{X|θ}[ . ]`
* Side /frame of the bigger picture:
   * Lingo 1:
      * There are objservations
   * Lingo 2:
      * ...

---------

### Historically
* Historically, originated by Rao
   * Rao's initial ideas?
   * Is this the same Rao? Prakasa Rao, B. (2001). Cramer-Rao type integral inequalities for general loss functions. TEST, 10, 105–120. mentioned in: [doi](https://doi.org/10.1162/089976603321780272)/[pdf](http://www.stat.columbia.edu/~liam/research/pubs/info_est-nc.pdf).
* Then Amari

### Various readings
* https://mathoverflow.net/questions/215984/research-situation-in-the-field-of-information-geometry
* [Galinkin](https://cnchou.github.io/docs/mini-course/slides/public-advanced-IIa.pdf) Information Geometry; A Crash Course. Erick Galinkin. January 14, 2022. Slides (pdf).
* ycombinator: [post](https://news.ycombinator.com/item?id=24645530) "An Elementary Introduction to Information Geometry [pdf]" links to [pdf](https://res.mdpi.com/d_attachment/entropy/entropy-22-01100/article_deploy/entropy-22-01100.pdf): An Elementary Introduction to Information Geometry. Frank Nielsen.
* Nielsen
* Fisher information distance: a geometrical reading. [arxiv](https://arxiv.org/abs/1210.2354) Costa, Santos, Strapasson. 2012-2014.
* 2014 course [course](http://image.diku.dk/MLLab/IG1.php) -- Information Geometry in Learning and Optimization -- with Amari.
* Again another ycombinator [post](https://news.ycombinator.com/item?id=24657225) -- A gentle introduction to information geometry links to [... ox.ac.uk ...](http://www.robots.ox.ac.uk/~lsgs/posts/2019-09-27-info-geom.html)
* Lewis Smith  [post / tutorial](https://www.robots.ox.ac.uk/~lsgs/posts/2019-09-27-info-geom.html) from September 27, 2019 - from Oxford
* Simple [youtube](https://www.youtube.com/watch?v=CdPRIGeHuEk)
* [youtube](https://www.youtube.com/watch?v=FlyJJIQo-g4) by Melvin Leok
* That lecture [c](https://www.youtube.com/watch?v=zmUMBLEHhZg) - Information Geometry - [PPT slides](http://videolectures.net/site/normal_dl/tag=10976/geometry.ppt)


Some successful searches:
* `information geometry course`

See Also:
* https://github.com/sohale/cs-glossaries/blob/master/math-ml/fisher-info.md
