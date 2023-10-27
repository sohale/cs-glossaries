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

Always being mindful and aware about "where to take them from" versus "where to put them", especially for "include directory"es.

Which commands does it apply?

### The many things at "EXPORT"
### The *Config.cmake
The *Config.cmake and *Target.cmake.
What name should match?


### Names
Where the names are taken? Which should be the same/matching? "pluggable"

It says "The package name will be derived from the folder name (i.e. my_package)"

What? What about the project name? also: package.xml name? Also install forlder name? also: source (repo) name? target name? etc etc.

## Not knowing
#### Not knowing what is the difference between `conan` and CMake
#### Not knowing what is the4 difference between CMake and `make`

Why do they insist on using `make`?
What does the `make` bring?
How does the `make` determine the CMake lingo?


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

### The "Global hack" technique
* `*_TARGET`
* Using prefix and suffixes for global variables defined. (and: why?!)
* Using prefix-ing the commands: `target_`

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
