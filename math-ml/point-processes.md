# Point Processes

Also see: ./inverse-gaussian-pp.md


#### ISI names (exactly the same meaning)
* Interarrival Time
* Inter-Occurrence Time
* Inter-Event Time: IET
* Inter-Spike Interval: ISI
* Waiting Time
* Recurrence Time
* Renewal Interval
* Inter-renewal Time
* Gap Time
* Dwell Time
* Interarrival Time

Terms for ISI with Slightly different meanings:

* Subtypes:
   * First-Passage Time
   * Rescaled ... ISI (!)
   * Not from an event: ("time until ...")
      * Censored Time
      * Time-to-Event
      * Failure Time (`Surv`)
      * Event Time (or: a "Not from an event" from `0` in a global clock)  (does this belong in this category?)
   * Alternating:
      * Uptime & Downtime
      * Time-to-Failure (`MTTF`)
      * Repair Time (`MFFT`)
      * Episode Duration
      * Latency Period
      * Idle Time
      * Cycle Time
      * Elapsed Time
      * Failure Time
      * Service Time (`QT`)
      * System Availability: SA (`Avail`)
      * Recovery Time (`Avail`, )
      * Lifetime (once? -> see "First-Passage Time" )
   * Latencies:
      * Time-to-Detection
      * Latency Period (`Med`)
   * Misc: (not ISI at all)
      * Waiting Time -- (`QT`)
      * Sojourn Time (`QT`)
      * Cycle Length (`QT`)
      * Time-to-Hazard (`Cox`)
      * Degradation Time (a different "concept")
   * Further
      * Residence Time (the period that a substance remains in a particular part of a system)
   * Intervention: (non-blind, subjective, choices in experiment design, etc)
      * Follow-up Time
   * Times that are "parameter"s, but almost ISI (Mean ISI)
      * MFFT
      * MTTR
      * Half-life
      * Mean Time Between Failures (MTBF)


##### Contexts

In contexts (Mathematical):
* Renewal Theory
* `Surv`: Survival Analysis (formerly "Sa")
* reliability theory
* `QT`: Queue Theory
* Specific application domain contexts
   * `Cox`: Cox model: "Hazard", Cox Proportional Hazards Model, (Risk models?)
   * particle interactions
   * molecular dynamics
   * climate studies
   * geophysical processes
   * materials science
   * `MTTF`: Fault Tolerance (`Fault`), Defect, "Repair", MFFT (especially MFFT), MTTR
   * `Avail`: Availability: SA, System Availability in Cloud Platforms
   * `Med`: Medical: time of observing consequences: "the time between exposure to a cause (like a virus or carcinogen) and the manifestation of a disease or condition"


#### The ISI to CIF

#### The CIF to ISI

#### Appendices
##### Totally different and incompatible approaches to CIF
Totally different and incompatible approaches, unless heavily loaded with assumptions (such as Brownian)
* CIF
* First-Passage Time ( integrate & fire, etc)

##### Can't resist mentioning:
* "Waiting Time Paradox"




