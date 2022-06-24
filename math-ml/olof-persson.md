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
* $F(x)=F_{int}(x) + F_{int}(x)$
Notes:
* "bar"s and "boundary"s
* "The points can move along the boundary, but not go outside"

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
