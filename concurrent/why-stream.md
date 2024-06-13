Why streaming, distributed, async, and "architecture".

1. Why multi-threading? (Asked a student once in a Java programming class)
2. Why do we architect?
     * (a distributed system over the network, or multi-process: inter-proces Linux)?
     * Case studies

## Why we multi-thread
See [why-concurrency.md]( https://github.com/sohale/cs-glossaries/blob/master/concurrent/why-concurrency.md ).
(Also more other `.md` files that I have somewhere.)

## Why we architect
### Case studies

#### The `play` + `plist` experience.
Why Architect: Why stream: The `play` + `plist` experience.

On: macOS
Glitchy output.
Brittle.

Problems:
* How brittle it was
* Glitchy sound
* System froze


#### bash queue on the backend
A bash script that used file-system as the queue

What went wrong? User (end to end) experience:

What went wrong?
