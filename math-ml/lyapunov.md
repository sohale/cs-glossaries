# Lyapunov stability

## Some disambiguations
### "Lyapunov stability" versus "Lyapunov function"

## Scope: (What is Lyapunov not)
* We have a dynamical system
    * (It does not give you this function. If you somehow magically find it, it gives you good properties)
    * i.e. is not constructive. It is about existence ∃ .
* The Lyapunov function is not known
* Is an engineering solution: You devise it: you find it. If it exists, then...
* It is a scalar function
* We have an equilibrium point. We know its existence, but also know it (know the x (vector/ point)'s value (coordinates) )

#### Lyapunov Stability versus L. Function:
* Lyapunov Stability:
   * starting close => stay close
   * Doesn't imply converge!
   * only that they don't diverge!

#### Lyapunov Function: V(x)

#### Lyapunov Function to Stability:
* If V(x) is decreasing, => Lyapunov stable
     * If decreasing along trajectories (all?)
* analyze stability properties (at that equilibrium)
* without explicitly solving differential equations (how?)


Key: "without explicitly solving differential equations"

#### Asymptotic stability:

* If V(x) strictly decreases
* concludes asymptotic stability 
* trajectories converge to equilibrium
    * (But didn't we say it is not about convergence??)
* except at the equilibrium point ( V(x) strictly decreases but not at equilibrium point, kind of obvious )


(Lyapunov): Asymptotic Stability is stronger than Stable?
* V(x(t)) decreases  ⟹ system is Lyapunov stable
* V(x(t)) strictly decreases ⟹ system has asymptotic stability

