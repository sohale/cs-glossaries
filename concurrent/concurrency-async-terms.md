# async & concurrency terms
## async
fibers

coroutines

single-threaded** concurrent code

asyncio: single-threaded concurrent code. Can async work in multithreaded?

stackless coroutine functionality

generators & yield in JavaScript

future

push/pull

What does Python's `asyncio` package do?

subgenerator
subgenerator delegation
coroutines that leverage subgenerator delegation

implicit support for coroutines (Python 3.4)
explicit support for coroutines (async/await)

Promise

RxJS versus Promise
async/await versus Promise

`fibjs`
`fibers-switch`

sync style = ?



Use case: "sync style, and non-blocking I/O model to build scalable systems."

stackless for thread-based (So does stack provide complexity and performance issues with multi-threading?)

Assembly: “classic” coroutine switch is effected by the instruction "JSR PC,@(SP)+"

Pipeline

Pipeline (Unix), a kind of coroutine used for communicating between programs

Protothreads, a stackless lightweight thread implementation using a coroutine like mechanism

C++ coroutines TS: a stackless subset of coroutine-like behaviour.

symmetric coroutines

Boost.Coroutine2

Modor: abstracts asynchronous I/O into a more familiar sequential model

asymmetric coroutine 

ucontext / fiber

Coroutines in Clang  (libc++?)

coroutine-based asynchronous C++ development

bundle: getcontext, setcontext, makecontext and swapcontext  (in UNIX. now obsolete).

entry points

suspending and resuming execution at certain locations

Comparison with: subroutines, threads, generators, mutual recursion.

Coroutines provide: cooperative tasks, exceptions, event loops, iterators, infinite lists and pipes. 

cooperative tasks
exceptions
event loops
iterators
infinite lists
pipes. 

mutual recursion
tail calls

cooperative multitasking

Actor model of concurrency

generators and coroutines are suitable for streams.

Communicating sequential processes 

CSP := (Communicating sequential processes)
## bases
* asynchronous I/O
* communicating between programs
* asynchronous
* non-preemptive multitasking

Channel inputs/outputs (do block. a scheduler unblocks them on completion events. )

blocking operations (a scheduler unblocks them on completion events. )

yield coroutines (do block. a scheduler unblocks them on completion events. )

nested generator pattern

sub-process may be the parent of the one following it in the data pipeline 

continuations (n.)

continuations can be used to implement coroutines

stack-based subroutine implementation , limitations of.

context swapping: "Boost.Context supports context swapping"

closure  versus coroutine
closure: a subroutine with state variables (static variables, often boolean flags). Is usd to maintain an internal state between calls.

"situations where a coroutine would be the natural implementation of a mechanism." Like what?

a computed goto

Motivation for coroutines:  "Such implementations are considered difficult to understand and maintain, and a motivation for coroutine support."

Threads vs fibers vs coroutines: Threads, and to a lesser extent fibers, are an alternative to coroutines.

Threads have difficult learning curve.

When a coroutine is all that is needed, using a thread can be overkill. 
Q: What about TCP listening?

preemptively scheduled

threads are typically "preemptively scheduled"
coroutines are not typically "preemptively scheduled"

difference between threads and coroutines: is that threads are typically "preemptively scheduled" while coroutines are not

threads can be rescheduled at any instant 

locking.
programs using threads (as opposed to corouties) must be careful about locking.

programs using coroutines (as opposed to using threads) can often avoid locking entirely.

event-driven programming versus asynchronous programming

This property is also cited as a benefit of event-driven or asynchronous programming.

cooperatively scheduled

fibers are cooperatively scheduled

fibers provide an ideal base for implementing coroutines

system support for fibers is often lacking compared to that for threads

fibers vs threads

POSIX

reactor (in C++)

coroutines
fibers
asynchronous
rpc
paxos=?
reactor=?

asynchronous-framework

coroutines and tasks (Why compared?)  (Python)

`yield from` (Python)


Futures and coroutines (comparable)


cancellation
cancellation support
cancellation support for Futures and coroutines

synchronization primitives
synchronization primitives between coroutines

Cancellation
Cancellation of tasks is not common in classic programming

The `wait_for()` function. (Has timeout)

Timeout: which ones have it?

... "cancels the waited task" (context: timeout)
Note: Apart from timeout, there are many other cases where a task can be cancelled indirectly.
## ...
* A Future. A future class.

"Blocking functions should not be called directly."

An executor.

not block the thread of the event loop.

A result is not passed to async()
"When a coroutine function is called and its result is not passed to async()"

### More obscure
* Microthreads
* fibers (fibers-switch)
* tasklets
* stackless

### Sentences to make sense of them:
* Concurrent Programming with Stackless Python
* fibjs uses fibers-switch, sync style, and non-blocking I/O model to build scalable systems.
* “classic” coroutine switch
* asymmetric coroutine implementation via ucontext / fiber
* the stack pointer, program counter, callee-saved registers, and any other internal state as required by the ABI, such that returning to a coroutine after having yielded restores all the state that would be restored upon returning from a function call. 
* in CSP: each sub-process is a coroutine
* Channel inputs/outputs and blocking operations yield coroutines and a scheduler unblocks them on completion events. 
* coroutines and tasks based on yield from ...
* to write concurrent code in a sequential fashion (?!)
* ... if the future is cancelled



## concurrency

threadpool

passing work off to a threadpool

# References
[Coroutine] https://en.wikipedia.org/wiki/Coroutine#Implementations_in_JavaScript
[asyncio] https://docs.python.org/3.4/library/asyncio.html
[asyncio-use] https://docs.python.org/3.4/library/asyncio-dev.html#asyncio-dev

