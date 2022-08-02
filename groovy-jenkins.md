
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

Jenkins [source code](https://github.com/jenkinsci/jenkins).

### Declarative Pipeline
Declarative Pipeline

Has some constraints: ([see](https://www.jenkins.io/doc/book/pipeline/syntax/#declarative-pipeline))
* top level has `pipeline { }`
* no semicolon
* Sections, Directives, Steps, assignment statements.
* A property reference statement is treated as a no-argument method invocation. So, for example, input is treated as input().


### DSL (not necessarily Declarative pipeline?)
* `DSLBuilder` facility based on Closures ([see](https://stackoverflow.com/questions/62454164/is-a-jenkinsfile-in-pure-groovy-what-groovy-language-construct-is-used-in-step))
```groovy
stage('Stage 1') {
    steps {
}   }
```
is translated to:
```groovy
jenkinsContext.stage('Stage 1') {
    jenkinsContext.steps {    
}   }
```

* Relation between Jenkins and Gradle?

* Use? `<!-- language: lang-groovy -->`

### timeout and input 
Source code for `input()` can be found here: https://github.com/jenkinsci/pipeline-input-step-plugin

* (Answer to my [question](https://stackoverflow.com/questions/69677607/where-to-find-the-source-code-for-jenkins-input-method))
* Jenkins [reference for input()](https://www.jenkins.io/doc/pipeline/steps/pipeline-input-step/): "Wait for interactive input"

```groovy

timeout(time: 2, unit: 'MINUTES') {
     r = input(message: 'message', submitter: "id1", submitterParameter: 'who', parameter: 'a,b')
     println('Responded by: ' + r.toString())
  }
```


## Groovy

* Groovy closures

Are the `{...}` blocks. Represent nesting or grouping of your code.

todo: maybe: separate groovy
