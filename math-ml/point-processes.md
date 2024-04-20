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
   * Shelf Life
   * (Expiration ?)
   * Persistence Time (`Env`, sustainability?) of pollutants: decomposing, turning innert
   * (how about "persistency")
   * (sustain quantifications?)
   * Not from an event: ("time until ...")
      * Censored Time
      * (right censoring: `Cox`)
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
      * Fault Latency (`Fault`)
   * Misc: (not ISI at all)
      * Waiting Time -- (`QT`)
      * Sojourn Time (`QT`)
      * Cycle Length (`QT`)
      * Time-to-Hazard (`Cox`)
      * Degradation Time (a different "concept")
      * Service Continuity Time (`Avail`)
   * Further
      * Residence Time (the period that a substance remains in a particular part of a system)
   * Intervention: (non-blind, subjective, choices in experiment design, etc)
      * Follow-up Time
      * Follow-up Duration (`Cox`)
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
* Longitudinal studies (see Follow-up Duration + Cox)
* Specific application domain contexts
   * `Cox`: Cox model: "Hazard", Cox Proportional Hazards Model, (Risk models?)
   * particle interactions
   * molecular dynamics
   * climate studies
   * geophysical processes
   * materials science
   * `MTTF`: Fault Tolerance (`Fault`), Defect, "Repair", MFFT (especially MFFT), MTTR
   * `Avail`: Availability: SA, System Availability in Cloud Platforms
   * `Med`: Medical: such as: time of observing consequences: activation, "the time between exposure to a cause (like a virus or carcinogen) and the manifestation of a disease or condition" activation
   * `Env`, environmental science, also sustainability?
   * Sustainability


#### The ISI to CIF

#### The CIF to ISI

#### Appendices
##### Totally different and incompatible approaches to CIF
Totally different and incompatible approaches, unless heavily loaded with assumptions (such as Brownian)
* CIF
* First-Passage Time ( integrate & fire, etc)

##### Can't resist mentioning:
* "Waiting Time Paradox"




