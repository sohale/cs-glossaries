# cs-glossary

"as I understood it"

A glossary of Computer Science (CS) terms
as understood by me (to help organise my [LTM](https://en.wikipedia.org/wiki/Long-term_memory)),
or once used by me (since CS concepts are "volatile": they may vanish from one's "[declarative](https://www.sciencedirect.com/topics/psychology/declarative-memory)" / "[explicit](https://en.wikipedia.org/wiki/Explicit_memory)" memory ).

It started with C++ terms as `cpp-glossary` then added more:
Python, JavaScript, then sections for `async`, `Promise`, etc.


* Things that I know. Or once knew. Or once implemented.

   * Patterns I found and don't want to throw away into [oblivion](https://dictionary.cambridge.org/us/dictionary/english/oblivion).
   * But also To accumulate them and organise them along each other (like a (cognitive-)map with coordinates (IND-axes): place-"mand")
* Sometimes can be seen also as narrow context tutorials (instead of an article in medium)
* `kode-killing`: Code that I am killing that (code-sink). (aka dev-notes, etc)

* Things that I keep need to rediscover. Gtest patterns that I liked, kind of worked, etc. (Also overlap with https://github.com/sohale/hemi-glossaries-public )

* Helps me channel the personal comments from my learning.

* Note: The contents put here have not IP issues. Reveals no information about the context of what I am working on.
  
* A know-how that I inherit for my future self: future in the sense of the gap between me and myself in terms of time-corrotion.
* It also may have a potential for socially expressing it. People may end up here and read something. (This adds a miniscule motivation to tidy up and organise).
  
Three types of articles:
   * The ref versus non-ref articles: "ref" are the sources I found. I don't necessarily know all the contents. (not hands-on knowledge). But everything here is about things I actually tried. Even finding the refs is the knowledge that I gained by trying.
   * Even this is a kind of achievement: I finally found a good source. and I want to protect it against loss and corrosion by time.
   * notes, tutorials, etc (main type)
   * Gathering disperse (survey of parts of concurrency I actually touched)

* Also as a LTM. (This can be the main definition of these). This is an [extended](https://en.wikipedia.org/wiki/Extended_mind_thesis) LTM (meta- Long Term Memory: in the context of an [extended mind](https://en.wikipedia.org/wiki/Extended_mind_thesis))
   * The contents are not original
* Also as something I am teaching (to self, others, etc. These could be tutorials, articles. In social LTM~: not only decentralised + also in-the-flow-only: RNN: "Recurrent-time" storage)

* Trying  to remember many things I have done in the past and have not connected them, or their memory-distance is so far apart that are not integrated (zMQ in python, versus some concurrent  or distributed code)

* Discovery: Hard-earned discoveries ("Lessons learned the hard way") in learning or practice context. Things that you come-by once-a-lifetime that can improve things. (See the `ref` style)

* This repo kind of reflects (and consolidates) the expertise that I am gaining. (If I put everything down, which currently happens at 0.001% ).
* But it is a "subset" of that. Of that Type (Category). "Subset" in that sense.


```bash
tree .
```

```txt
.
├── LICENSE
├── README.md
├── adt.md
├── api-rest-http
│   ├── DNS-https-setup.md
│   ├── cors.md
│   ├── made-simple-tls-1.md
│   ├── nginx-setup.md
│   ├── oauth-sec-draft.md
│   └── restful.md
├── bash
│   ├── brew-like-systems.md
│   └── nice-bash-solutions.sh
├── c++
│   ├── c++concern-list.md
│   ├── c++good-libs.md
│   ├── c++multithread.md
│   ├── c++questions.md
│   ├── c++test.md
│   ├── cmake
│   │   ├── ament_cmake.md
│   │   └── cmake_why_non_understandable.md
│   ├── cpp-details.cpp
│   ├── cpp-glossary.md
│   ├── eigen-notes.md
│   ├── gtest_floating_point.md
│   ├── header-only-libraries.md
│   ├── map_emplace.cpp
│   ├── mistakes-bulk.cpp
│   ├── on-cpp.md
│   ├── readme.md
│   └── tooling.md
├── compilers
│   ├── compiler-book.md
│   ├── compiler-design.md
│   ├── the-path-to-compile.md
│   └── under-the-cpp.md
├── concurrent
│   ├── concurrency-async-terms.md
│   ├── concurrency.md
│   ├── concurreny-concepts-roots.md
│   └── why-concurrency.md
├── conference-attendances
│   └── 2024-werner-reichardt-symposium.md
├── cpp-practice
│   ├── Clang-in-Docker
│   ├── char8.cpp
│   ├── compile.bash
│   ├── init.bash
│   └── readme.md
├── devops
│   ├── cloud
│   │   ├── azure-glossary.md
│   │   ├── cloud-generic.md
│   │   └── gcp-glossary.md
│   ├── docker
│   │   ├── docker-internals.md
│   │   ├── docker-questions.md
│   │   └── docker.md
│   ├── github-actions.md
│   └── terraform-tut.md
├── docs
├── formal-verification
│   └── lean4.md
├── git-notes.md
├── gpu
│   ├── cuda.md
│   └── ptx.md
├── groovy-jenkins.md
├── hdl
│   ├── existing-fpga-for-nn.md
│   ├── hdl.md
│   ├── refs-vhdl-resources.md
│   └── vhdl-teach.md
├── iv
│   ├── design-patterns.md
│   ├── interview-checklist.md
│   ├── real-intv-quest.md
│   └── specific
│       ├── causL.md
│       └── opteran.md
├── js
│   ├── cute-javascript-solutions.md
│   ├── do-you-know-enough-js.md
│   ├── js-tests.md
│   ├── modern-javascript.md
│   ├── npm-tricks.md
│   ├── promise-a-tutorial
│   │   ├── QuasiPromise.js
│   │   ├── map-series.js
│   │   ├── promise1-5.js
│   │   ├── promise1-7.js
│   │   ├── promise1.js
│   │   ├── promise2.js
│   │   ├── promise3.js
│   │   ├── promise4.js
│   │   ├── quasi-promise.ms
│   │   └── readme.md
│   ├── promises-a-tutorial.md
│   ├── react.md
│   └── solutions-to-keep.js
├── math-ml
│   ├── 4e-robotics.md
│   ├── Legendre-transform.md
│   ├── bias-corrected-mi.md
│   ├── boltzmann-to-helmholtz.md
│   ├── boosting.md
│   ├── boring
│   │   ├── fft-ht.md
│   │   └── wavelet-denoise.md
│   ├── compact-dense.md
│   ├── cs-test-types.md
│   ├── dempster-shafer.md
│   ├── dl-buss
│   │   └── dl-hw-businesses.md
│   ├── eigenvalues.md
│   ├── em.md
│   ├── fisher-info.md
│   ├── group-theory-for-optic-flow.md
│   ├── hamiltonian.md
│   ├── hopfield-boltzmann-machine.md
│   ├── information-geometry.md
│   ├── inverse-gaussian-pp.md
│   ├── knn.md
│   ├── lagrange-multipliers.md
│   ├── lyapunov.md
│   ├── mcmc.md
│   ├── nlo.md
│   ├── olof-persson.md
│   ├── point-processes.md
│   ├── readme.md
│   ├── renormalization.md
│   ├── representation-theory.md
│   ├── simplical-complexes.md
│   ├── spiking-nn.md
│   ├── standard-mainstream
│   │   ├── elm-nn.md
│   │   ├── mlops+tuning.md
│   │   ├── nn-types-models.md
│   │   ├── nn-types.md
│   │   └── standard-ml.md
│   ├── svm.md
│   ├── universal-physics.md
│   └── viola-jones-adaboost.md
├── microcontroller.md
├── my-undestnaings-qm
│   ├── partition-function.md
│   ├── qm.md
│   └── spin.md
├── ns
│   ├── bees-nervous-system.md
│   ├── hippocampal-formation.md
│   ├── hypothalamus.md
│   ├── mclean-triunal.md
│   ├── meanfield.md
│   ├── muscles-motor.md
│   ├── neural-coding-adts.md
│   ├── norepinephrine.md
│   ├── stdp.md
│   └── the-spike.md
├── org
│   └── org-speak.md
├── posters
│   └── free-energy-poster1.tex
├── principles-scaffold-meta.md
├── probabilistic-programming
│   └── probabilistic-programming.md
├── python
│   ├── high-performance-python.md
│   ├── python-interview-notes.md
│   └── python-threads.md
├── robo
│   └── spatial.md
├── security
│   └── security.md
└── software-testing.md
```
