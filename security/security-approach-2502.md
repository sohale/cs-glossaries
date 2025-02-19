Centered around key-pair generation (RSA) use cases (mainly `ssh`, but also `jws`/`jwt`).

Key concept: one-way functions. All solutions revolve around this.

* Key problems they solve
* Key practicalities that a (cloud, machine provider, tf, infrastructure ) solution needs ot provide

* Key elements and entities of the tools: (they added each, for a reason)
   * Private key
   * Public key
   * fingerprint
* 


Always ask yourself: (for understanding)
* what if my public key is leaked? (along, or together with the IP).

Graph view:
* Graph view:
    * see below
* Broader view:
    * Block chain: verifyable chains.
...

Graph view:
graph ... of initiation, traceback to detect, this path is to ....
...

* "I click on "created instance" on AWS, then, take only the IP, ad on my MacOS terminal, `ssh` into it. I only take an ip number (less is better: no longcode), and (nulike a key) does not even need to be. How?
    * Because previously it is synced ( tell in graph language, exactly how), and: importantly: you have created a separate key, and it is "horitontally" moved: cross-lange: lane change. (Why thnkin g of lanes, the word "lane", makes better understandable? because there are lanes to think about? and their genesis (who triggered, and the process of "fission" is where?)


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
