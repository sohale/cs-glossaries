# Roots & depths of Concurrency

### Methodology
Titles:

Disentangling the root of ideas, from academia, history, etc.
The story of ideas.
"factorising" the axioms.
Various types, and disambiguating related concepts & terms.

Methodology (of this document):
* Clarify: slash ambiguity
* Purity (factor out into "essence"es )
* Explicit
* Jargon: capture & contain the historical & community lingo, typical weird terms, and hidden (excommunicated implicit) assumptions.
   * Wrong abstractions
* Make concrete (multi-core in intel)
* Provide historical approach for terms when necessary (including what is the story of this term): "historiousness" / "historiousity"

### Major terms
* Concurrent
* Parallel
* Multi-threaded
* Distributed computing
* Minors:
   * Multi-process
   * Multi-tasking (cooperative vs preemptive Multitasking, or scheduling)
   * Async (js/python/promise/async/await)
   * Multi-core
   * GPU parallel
   * Massively parallel / supercomputing (a certain amalgam: Cray)
   * Datacenter (cloud, etc: from the PoV of owner of datacenter, not just distributed+cloud )
   * Subtypes:
      * Parallel: Instruction-level parallelism
      * Multitasking: cooperative vs preemptive
      * Thread weight: lightweight threads or lightweight processes
      * Microthreads (?)
      * Multi-threading levels: OS-level, in-process, etc
      * Hierarchy: kernel -> (namespace) -> Process -> thread
  * Misc pool:
      * "Speculations" in CPU pipelining (to commit, to hint, etc)

### Term: "Concurrency"
Concurrency
* What is wrong with this term
* What is right about this term (why it appeared in response to what priior ambiguity or linguistic lack)

### Key papers
* Paper: (1977)
*Laws for Communicating Parallel Processes*
Henry Baker, Carl Hewitt
1977


* Paper: (1988)
*Promises: Linguistic Support for Efficient Asynchronous Procedure Calls in Distributed Systems*
1988.
Barbara Liskov.
Liuba Shrira.
(MIT)

### Historious: Histories of terms
#### On the history of the "concurrent" term
#### On the history of the "promise" term
#### On the history of the "continuation" term
#### On the history of the "continuation" term
#### On the history of "resolve" and "reject" terms
#### On the history of the term "future"
a "proxy for a result"
that is 
initially unknown
but will "eventually"
be computed by concurrent processes.

## Key key concepts
Unrefutably essential, can be units of thought in understanding or concepts
* "eventually" (serves: "future", ...)
* "Readiness"

#### More candidates
to be moved to "Key key concepts"
* continuation
#### Need development of parametrisation
* ...
* dependency

#### External requirements
Vagueness because they are external requirements (on user size)

### Dimensions:
of parameterization <!-- of each concept -->
* strata/band/scale
* scale/quantity (size)
* level of deliberate vagueness (some kind of abstraction: the "extent", and leaving more, deliberately unspecified): e.g. "recovery" can be fine as a term.


## Unorganised
### First-order solutions, second-order culprits:
And why I deem each so.
* "concurrency" 
* "process"
* "workloads"


### Pool of vague terms
The suspects
* workload
* concurrency
* distributed computing
* process (a solution at first, but a culprit later)
* Various errors

### Marketing bullshit
To slash.
* resilience
* high performance
* "high" scalability, resilience, performance, etc: how "high" ?! Quantify.
* "Reactive Manifesto" It is good in itself, for one level, but the underlying items do fail, and are vague.
* Agility (not for concurrency, but relate it to "Reactive Manifesto". Besides, both happen to have manifestoes)
* Management (load management, managing recovery, etc)
* Owning (also parent, etc). (I slightly prefer A monitors B, but "to monitor" needs to be clarified, and make more specific to its "band-scope" )
* But these may be defined
* concern, responsibility, scope, etc (e.g. SOLID)

#### Not sure:
* multi-core
* multiple server
* scalability (needs splitting into, for separate contexts)
* elasticity (if we define (stratify) the "band" of (process) "resources")
*
* Lock-free (as an ask)
* To Monitor (todo: define it, and stratify it)
* to handle (a failure, error, etc)
* async
* blocking, non-blocking: Blocking itself can be concrete, but usually terms like "non-blocking" are is just thrown vaguely.
* "workloads" is a progress, but up to a point

#### Vague, but their okness can be OK?
* "recovery" ?
