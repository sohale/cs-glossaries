## The biochemistry of Action Potential

The spike: Action potential, ions, channels, terms, currents.

Na, K, current flows and their directions, electrical field (physically accurate), LFP, etc.

* Net transmembrane current (at each point) (compare to net voltage, net electrical field, etc)
* flows of several different ion types through the membranes
* electrical currents are generally classified into passive and active currents
   * passive currents
   * active currrents (probably won't conribute to LFP; see LFP)
* Electrical Current sink & source (net charge)
   * Electrical Current sink
   * Electrical Current source
   * sink–source pairs of current (net is zero, often paired)
* has spatial pattern, has net charge (patches of electrical currents)
    * point-wise current sources or current sinks (for modelling)

## Continuous
### LFP
LFP multiple definitions:
* Operational definition of LFP:
    * decomposition: LFP + MUA (under-determined)
        * What is MUA?
        * MUA: direct contribution of spikes. Direct = Electrical Field?
        * Spurious: Zanos et al. 2011, Pesaran et al., 2002 [1]
    * low-pass filtering
* Physical definition
* LFP in terms of CSD:
   * CSD
* Input-output: MUA vs LFP

* CSD better localise sink-sources

Neural activity contributing to LFP: (different types of events of neuronal activity)
* Spikes
* Bursts
* Synaptic activity
   * (synaptic and axonal events are opposite)
   * arrival and the generation of the spikes
   * synapses receive spike while no spike is created
   * The influence of the synaptic events is often stronger (dominant) than the effect of action potentials on LFP. (Integration?) (Leak: slow envelope?)
   * depends on
       * position of the synaptic input on the dendrite,
       * morphology of the neurons
       * 
* Calcium Spikes
* (unsure) AHP
* also:
   * Passive currents verys activ currents

* local neuronal processes (in fact: flows? )

* Entanlged: correlation in the synaptic activity
   * coordinated circuit activity
   * shared inputs
   * ... (circuit)

(spatial selectivity)

(correlations of the LFP signals.)

Time code: [3]
* relative timing
* temporal patterns

## Continuous signals

### List of internal sygnals (used, or potentially used) in experiments: Observables
* EEG, (ERP, QEEG), ECoG, EMG, MEG, (f)MRI (BOLD), Other imagine: SPECT, PET, NMR (MRI?).
* LFP, LFP filtered, LFP phase (Hilbert)
   * LFP lacking very low band (zero mean): highpass at $f ~ 0.1 Hz$
   * Bandpass LFP: Gamma, high gamma, low gamma, beta, high beta, low beta, 20Hz (s-m), theta (place cell, etc), alpha (Verious ranges), logarithmic bands (See Buzsaki's reviews; See Wavelet).
   * HT Hilbert
   * HT after above filters
   * HHT (IMF, EMD)
   * Wavelet (log freq)
   * See phase-spikes codes
* Hybrid
   * phase-spikes codes
      * Locked to another (FEF, WM, binding, spike-spike, etc)
      * Phase-of-Firing
   * ...
   * Burst-phase
   * Phasic response

* CSD (measurable, or real?). real: electrical field
* MUA, SUA
* Optical Imaging (!)
* Intracellular (patch clamp)
    * see: Fancy-clamps (Dynamic clamp, etc)
* Calcium spike
* Clacium: Voltage-Sensitive Dyes ([VSD](http://www.scholarpedia.org/article/Voltage-sensitive_dye))
* Optogenic
* Non-response: Confocal microscope, double-photon ([activity](https://www.ncbi.nlm.nih.gov/books/NBK20230/)), Two-photon excitation microscopy ([wikipedia](https://en.wikipedia.org/wiki/Two-photon_excitation_microscopy)) / two-photon imaging.
* [Microdialysis](https://en.wikipedia.org/wiki/Microdialysis)
* Electrophysiology: Electrode, tetrode, electrode array, etc

|   is:| Electrode | pipette | light | Colour/dye | fluroscence | genetic | radioactive | photon/particle | Magn | stim |
|---|--|--|---|---|----|---|----|----|----|---|
|MUA|  | | | | | | | | |   |
|LFP |  | | | | | | | | |   | 
|intraCe |  | | | | | | | | |   | 
| BOLD |  | | | | | | | | |   |
| VSD |  | | | | | | | | |   |
| optGen |  | | | | | | | | |   |
| MEG |  | | | | | | | | |   |
| EMG |  | | | | | | | | |   |
| EEG |  | | | | | | | | |   |
| PET |  | | | | | | | | |   |
| SPECT |  | | | | | | | | |   |

### Internal phenomena: (realities that we access indirectly)
* Electric field (Extracellular)
* Electric field (Intracellular)
* Current (flow) source/sink
   * CSD: density of net of such flows
* Voltage: (Cross-)membrane
* (Golgi) Calcuim (Organelles)
* Various ions conentrations inside (not their flow)
* Various Neurotrwansmitters conentrations
   * inside
   * outside
   * 
   * Ions
   * Neurotransmitters
   * Peptides
   * Gene-expresions
      * (RNA)
      * Peptide (see peptide)
   * cAMP
   * G-protein-related and the rest of the cascade
   * Microdyalysis:
      * ...
* Dendrites:
   * ...
   * ... (chck cable theory)
   * ... (check active dendrites)
* Glial-specific?
* Check: 
* Synapse-related:
    * Vesicles
    * Reuptake
    * enzymes (or their metabolites)
    * Electrical / ionic (same as membrane?)
* Soma, axon, axon-hilock, spine, button, dendrite (distal, proximal, basal), felt/process/arbor/etc, extracellular, intracellular, inside-shwan (myelin), re... nodes, etc.

* Other misc signals that are detected inside (receptors, etc) (just for sake of completion)
   * Calcium-activated
   * Voltage-dependent
   * ATP-gated
   * G protein-coupled (State of g-protein)
   * intracellular signal transduction cascades (Second messenger system)
   * PH


### Internal sensing organs:
* Metabotropic receptors
* Ionotropic receptors
* signal transduction cascades & messenger systems (1,2)
* Pumps
* All items in above: (Calcium-activated, Voltage-dependent, ATP-gated, PH, etc)
* Photon detectors! (opsins)


## References
[1] Bijan Pesaran, John S. Pezaris, Maneesh Sahani, Partha P. Mitra, and Richard A. An- dersen. Temporal structure in neuronal activity during working memory in macaque parietal cortex. Nat Neurosci, 5(8):805–811, Aug 2002

[3] F. Theunissen and J. P. Miller. Temporal encoding in nervous systems: a rigorous definition. J Comput Neurosci, 2(2):149–162, june 1995. ISSN 0929-5313.
