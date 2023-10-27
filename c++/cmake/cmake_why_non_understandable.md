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

### Situation: include-out vs include-in
I want to add/correct the include files that are published


### misinterpretable names

Specific names:

* target_include_directories = target_("include_directori"es)

### Direction at target-touch-points
Good point: touching points

Direction: confusion about it: it is not clear you mean about includes that are "pulished by" targets you are creating, or "used by" them.

The `target_include_directories` is for output.
When you are looking for output, how do you know this is the right command? (See "Situation: include-out vs include-in")

## Factors
Knowing they may not help you find your way when you are lost. But good to know when you are learning and to keep the spirit.

### Has a history:
#### `target_` arrived late
### make compatibility
In what way thi sis unhelpful?
### Multi-pass: Config time separate from make time, etc
This is actually helpful:
### Terminology: too C++-specific
"confusion point" (edge):
* "library" is cmake library? C++ library? 
* "include" as a noun referring to something too specific.
* "directory"

  
### Terminology: ...
Specific concepts:
an export, an install, an archieve, etc.
a directory.

### Terminology: ...

Multi-pass: Config time separate from make time and from compile time

Don't even mention the "run-time"!

## Factors: helping
* names versus verbs
Specific table?
target, include (not to include), directory
