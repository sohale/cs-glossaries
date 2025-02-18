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
Locus of genesis. (Gneesis is the only way. BEcas eof one-ywa fucntion)

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

Block chain: verifyable chains.


* Usecases that built my undesntanding:
   * github usecase
   * Papespace usecase
   * AWS usecase
   * jwt-bearer usecase (no external refernce)
   * OAuth2 non-opqaue(i.e. with external reference) (needs key infrastructure + rotating)

Remain to be used: (or answered)
* Remain to be used:
     * White hand of the big bad wolf.
* Why are the concepts o evaporative and ephemeral?


This is not about
* symmetrical keys. It is about asymmetrical keys.
* This is not sepcific to RSA (
The reason for existence of this file is a series of ideas I thought on 18 Feb 2025. Nothing else makes unique, or defines it, necessrily.
