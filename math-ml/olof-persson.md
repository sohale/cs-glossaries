# Per-Olof Persson' method

various aspects and insights
(Also some mesh, dual mesh, etc, and maybe voronoi, and simplicial complexes. Separate them if necessary. But this file is primarily dedicated to Olof Persson's methos)

Hopes/applicaitons:
* Implicit surfaces
   * adaptive "add salt & pepper"
   * higher >3 dimensions
   * adaptive sampling using `l(x)`
* Equi-frequency discreitisation
* Whitening ideas
* What is the "eigenvalue" in that graph?

Terms: Implicit Geometries

## Formalism
* $f(l,l_0)=-\operatorname{ReLU} \left(  k(l - l_0) \right)$
* $\frac{dx}{dt}=F(x)$
* $F(x)=F_{int}(x) + F_{ext}(x)$

* $x = x - \operatorname{ReLU}(d) \nabla f(x)$, $d=g(x)$
Notes:
* "bar"s ($F_{int}$) and "boundary"s ($F_{ext}$)
* "The points can move along the boundary, but not go outside"
* [mesh]Points are on "Delaunay triangulation of the meshpoints"
* Delaunay triangulation is updated (change of toplogy) at each Euler step
   * centroids
   * Matlab `delaunayn` [](https://www.mathworks.com/help/matlab/ref/delaunayn.html) does N-dim Delaunay
   * gives triplets of indices that form a Delaunay (n+1 points for N-dim).
* Equilibrium is $F(p) = 0$
* Force $F$ has disconuity.
* $F_{ext}(x)$ : points that go outside are moved back to the closest boundary point

## Resources
### DistMesh page
* [DistMesh](http://persson.berkeley.edu/distmesh/) page
* [thesis](http://persson.berkeley.edu/thesis/persson-thesis-color.pdf), [slides](http://persson.berkeley.edu/thesis/persson-thesis-presentation.pdf)
* SIAM Review [paper](http://persson.berkeley.edu/distmesh/persson04mesh.pdf) 2004

## Coincidences etc
### Coincidences
* Similarities with neural networks:
   * ReLU.
* 
### Questions
* What are "Level set methods"?
* What is his intuition in evolving surfaces?
