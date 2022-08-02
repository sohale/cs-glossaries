
Nested structures:
* pipeline
   * agent
   * stages
      * stage
         * steps
            * script
            * container

* post
* failure

Todo: FSM for nestedness (state of nestedness?)

My Jenkins questions:

* https://stackoverflow.com/questions/62454164/is-a-jenkinsfile-in-pure-groovy-what-groovy-language-construct-is-used-in-step
* https://stackoverflow.com/questions/69677607/where-to-find-the-source-code-for-jenkins-input-method
* https://stackoverflow.com/questions/68653979/how-is-this-nested-groovy-statement-interpreted-in-terms-of-the-arguments-of-ti

Rource code for `input()`: https://github.com/jenkinsci/pipeline-input-step-plugin

```groovy

timeout(time: 2, unit: 'MINUTES') {
     r = input(message: 'message', submitter: "id1", submitterParameter: 'who', parameter: 'a,b')
     println('Responded by: ' + r.toString())
  }

```
## Groovy


todo: maybe: separate groovy
