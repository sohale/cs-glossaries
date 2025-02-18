Centered around key-pair generation (RSA) use cases (mainly `ssh`, but also `jws`/`jwt`).

Key concept: one-way functions. All solutions revolve around this.

* Key problems they solve
* Key practicalities that a (cloud, machine provider, tf, infrastructure ) solution needs ot provide

* Key elements and entities of the tools: (they added each, for a reason)
   * Private key
   * Public key
   * fingerprint
* 

Locus of laying ( locus of ownership ).
Locus of genesis. (Gneesis is the only way. Because of one-way function)

Layers of understanding:
* 1:
    * Never share privat key.
    * That is about your ownerhsip.
    * but:
        * I realised AWS shares private key.
* 2:
    * One-way funcitns help in two things:
        * Encrytpion
        * Signins
    * Each, swap these, in an interestingly symmetrical way (not symmetrical keys).

* 3: (new)
   * Locus of check (by-generaion, "by construciton")

Broader view:
Block chain: verifyable chains.


* Usecases that built my undesntanding:
   * github usecase
   * Papespace usecase
   * AWS usecase
   * jwt-bearer usecase (no external refernce)
   * OAuth2 non-opqaue(i.e. with external reference) (needs key infrastructure + rotating) (aha: CA and their chain)

Remain to be used: (or answered)
* Remain to be used:
     * [_] hand of the bb wolf: a pattern easy to clone.
     * relativity (chain?) and we only need that. (all we have is also only realtive)
         * graph of initiation (branch) vs allowed branches: multiple kyes by the same iser, or same key, multiple hosts?)
     * zero-knowlege-proofness (not really zero)
     * smaller info ( hash < public-key < priv_key )
     * minimal length: hash ( hashtable), hash (never match: hopefully)
     * being ... (reversible?)
     * separting "items of use" (elemetns).
     * technique to teach: separate chanpters (first: github, etc). Some of them, conceptualise using graphs.

* Why are the concepts o evaporative and ephemeral?


This is not about
* symmetrical keys. It is about asymmetrical keys.
* This is not sepcific to RSA (
The reason for existence of this file is a series of ideas I thought on 18 Feb 2025. Nothing else makes unique, or defines it, necessrily.
