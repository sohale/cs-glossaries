# MLOps & NN Tuning

## MLOps
( Not performance tuning )
Servers, API, services, Cloud.

### Tensorflow MLOps
### Pytorch MLOps

### GPU Cloud
Lower-level

* Paperspaces + Terraform
Worked. See [raw1](https://github.com/sohale/gpu-experimentations/tree/8b273f26d6065ad90091982d26b5482002dda09a/experiments/raw1)
* AWS GPU
`nv*` Did not work

## Tuning

### Tuning Techniques for Inference
( Not MLOps )

* dynamic routing (Ivy)
* optimisation:
   * dynamic routing  (Ivy)
   * removing graph breaks  (Ivy)
* model compression

#### Tuning Glossary
Some terminology used by Ivy, quantisation, (dynamic offloading?), XLA tuning, etc.
* Model router. Routing (Expert Routing, Custom Routing; see Ivy). "the model router" ([see](https://route.withmartian.com/))

* dynamic routing
* model routing
* dynamic batching
* graph breaks →
* removing graph breaks
* compression
* fast model deployment

* chopped terms
    * compression → ? "model" compression? or ...?
    * routing → "model routing" or "dynamic routing"
    * batching →
    * break → graph breaks

#### pointers
Things/references to look at.
* Unify ( [Daniel Lenton](https://www.linkedin.com/in/daniellenton/)'s Ivy / Unify ([tw/x](https://twitter.com/letsunifyai)) 
* Some other startups in this area: () () ()


