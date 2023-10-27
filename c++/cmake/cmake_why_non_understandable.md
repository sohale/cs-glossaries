# Why is CMake not understandable?

Points of confusion.
* This or that? (line of decision)
* Confusing names
   * misinterpretable named
* 

When I want to ...

## Things to know
Knowing these will help you out of labyrynth

Main items:

### Situation:
I want to add/correct the include files that are published


### misinterpretable names

Specific names:

* target_include_directories = target_("include_directori"es)

### Direction at target-touch-points
Good point: touching points

Direction: confusion about it: it is not clear you mean about includes that are "pulished by" targets you are creating, or "used by" them.

## Factors
Knowing htese may not work

### Has a history:
#### `target_` arrived late
### make compatibility
In what way thi sis unhelpful?
### Multi-pass: Config time separate from make time, etc
This is actually helpful:
### Terminology: too C++-specific
### Terminology: ...
### Terminology: ...

Multi-pass: Config time separate from make time and from compile time

Don't even mention the "run-time"!
