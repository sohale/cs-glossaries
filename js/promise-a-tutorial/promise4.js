console.log('global::this', this);
this.q = 'global::this.q';
console.log('global::this', this);

var g1 = null;
const p1 = new Promise((resolve, reject)=>{
    console.log('promise 1 execution');

    //g1 = p1;

    const A2='A2', B3='B3', C4='C4', D5='D5';
    // return D5; // If returns before (without) resolve, the '.then' clause is neveer executed.

    // throw new Error('throwing in promise');  throw goes to catch only if done before the firast resolve.
    resolve(A2)
    reject(B3);  // reject() after resolve() is simply ignored. If resolve() after reject, then then() is completely ignored.

    W6 = this;
    console.log('this: W6', W6);


    throw new Error(C4); // still the .then is executed! regardless of the throw! (only cares about is resolve() or reject()) if resolve is done before the throw. Anhyt else is ignored in the 'then()'s chains.

    //throw C4;
    //return D5;

    U7 = resolve(A2);
    V8 = reject(B3);

    console.log('U7', U7);
    console.log('V8', V8);

    //return resolve(a); // no point. returns 'undefined'
    //throw reject(b);

    return D5; // no trace of returned value is left
})
.then((t1)=>{
    // then body is executed only if resolve()  is executed, and it is executed before the reject (or throw).
    console.log('then', 't1=', t1);
    const G1 = 'G1', H2='H2';
    const I3 = this;
    console.log('then: this: I3', I3);

    console.log('promise p1 after finishing body but before finishing the last of then() chain:', p1);
    // the body of the promise is <pending>, i.e. no value.

    //resolve('rr'); //Error: resolve not defined
    
    //throw new Error(H2 + '  But then can throw and it caught in catch()?!');
    // the body of the promise will be 'undefined' if this throw occures.

    g1 = p1;
    return G1;
    // (from now on) the promise will have a body: 'G1'm, onlys if this is the last '.then()' .

})
.then( (t2)=>{
    const G2 = 'G2';

    console.log('promise p1', p1);
    console.log('promise p1==g1?', p1 === g1);  // true

    //throw new Error('H3');
    return G2;
    // The promise will have a body: 'G1'm, onlys if this is the last '.then()' .
    // The same promise object is present throu ghout the then() chain.
    // It is pending until the last 'then()' and when there is no other 'then()'.
    // (if the chain (control flow) ends with catch(), it is the return value of the last catch(). 
})
.catch((c1)=>{
    // catch() is executed if an exception happen in the promise() or in the then().
    // If a throw is executed in promise() body after resolve(), it wont lead to execution of the body of catch()
    console.log('catch', 'c1=', c1);
    //return 'Q9';
    // The last of the chain, if it is catch(), then the promise will take that as the resolved value.
    // But where will it be used?
    // Will it be the same instance? yes.
})
.finally((f0)=>{
    console.log('finally', 'f0=', f0);
    // f0=undefined. why?
    return 'fin.'
});

// p1 is already executed if the queue is empty.
console.log('p1', p1);
// p1 is still unresolved

setTimeout(()=>{
    console.log('promise p1 after finishing the last of the then() chain:', p1);
    console.log(p1.toString());
}, 500);


// The resolved value of the promise is the last in the chain of execution.
// It can be original body of promise(), then(), cacth(). But not finally() !

// How is the resolved value used? What is the point of it?
// What is p1.domain?



/* output


global::this {}
global::this { q: 'global::this.q' }
promise 1 execution
this: W6 { q: 'global::this.q' }
p1 Promise { <pending> }
then t1= A2
then: this: I3 { q: 'global::this.q' }
promise p1 after finishing body but before finishing the last of then() chain: Promise { <pending> }
promise p1 Promise { <pending> }
promise p1==g1? true
finally f0= undefined
promise p1 after finishing the last of the then() chain: Promise { 'G2' }

*/
