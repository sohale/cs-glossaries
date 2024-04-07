# On Necessity

concurr
concurrent
concurrency

## Why Threads: Multi-threaded?
I was asked during teaching Java programming at National insurance company.

The more I thought, the more I found it a non-trivial question.
Not just in the sense that is it not easy to answer.
But in the sense that I found it a fruitful and interesting though, every time.

Also it is related to related wuestions:
How we categorise them.
Not in the sense of implementation,
bit the intent, purpose and the "necessity".

They are abstracted and clumped into concurrent. and least I found this the most organic way.
But even that is from the point of view of programmer: design/architecturing:
in the sense of "problems that need to be solved" for its "inplementation",

Believe me, all concurrent are similar in that sense.
Example (see separate section for that).

But getting back to that question during my teavhing,
Over the years, I found it a very authentic, genuine, and useful question to ask, and delve.

### Concurrency
Why is seemed good?

I even considered Distributed programing as part of that.

* Multi-threaded programimg
* Parallel Processing
* Distributed

But even other aspects of HPC, such as computer architecture are part of this. not just GPU etc. for example, ofgloading to accelerators ( graphics, DL, etc).

* Multi-threaded programimg
   * Multi-process
   * micro-threads
   * 
* Parallel Processing
   * GPU
* Distributed

It is in a sense, exact and well-defined.
For example, multi core is not Distributed.

How about async? ( async as in js/python). (but async in general, is another beast)
How aboit 

multi-tasking from OS level:
( includes async too) : premptive, cooperative, etc


From implementation point of view:
synchronisation

but async and quqes are not like that ( they are probably the same)

so, multiple categorisations!



queue/ asteam - based async

queue / stream
synchronisation
switch-able

also: switchable-ness (invludin non blocking): the OS multi-tasking view ( intent: user/customer concern : not internal concern in implementayion: tesponsibility?)

3 types of concern:
1. external intent, user / customer
2. internal representatiin: homogeneity of "computation" tupe ( like brain modularity. also in general, implementaion modularity? expertese based! implemnted-focused)
3. responsibility: who does it: offloading, virtual memory, big data, even sharding and partitioning, (and as a result, quor), etc
4. ?

disentanglish control flow ( blocked, etc)

disentanglish cogetion if semantic ( locality )

disentangling into cohesive/local data

compute power ( also later: power?) ( how about memory?)

smooth simultaneous ( non blocking), or nor waiting ( webworkers, animations, while busy calcukating?)

ordance. ( both: time coordination: orchestration: coreographt)
...

( how about microonstruction?)

oppsite: powsing fir less power!


...

or, also disentangling by coroutines, generators , etc

for separation of concerns! ( code of the same nature / responsibility)


...

pool:


instructiin-level parallelism
(fit it somewhere above)

categorise based on insttuction-level

also pther possibilities people havent found

also SIMD ( serial and parallel)

tiling for cache smoothness
...

low-latency: (cacheing may worsen latency).
with concern of time ( not write strategies in cassandra etc)
