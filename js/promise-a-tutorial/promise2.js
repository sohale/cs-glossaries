console.log('global::this', this);
this.q = 'global::this.q';
console.log('global::this', this);

const p1 = new Promise((resolve, reject)=>{
    console.log('promise 1 execution');

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
    //resolve('rr'); //Error: resolve not defined
    throw new Error('but then can throw and it caught in catch()?!');
    return G1;
    //throw H2

})
.catch((c1)=>{
    // catch() is executed if an exception happen in the promise() or in the then().
    // If a throw is executed in promise() body after resolve(), it wont lead to execution of the body of catch()
    console.log('catch', 'c1=', c1);
});

// p1 is already executed if the queue is empty.
console.log('p1', p1);
// p1 is still unresolved

/* Output

global::this {}
global::this { q: 'global::this.q' }
promise 1 execution
this: W6 { q: 'global::this.q' }
p1 Promise { <pending> }
then t1= A2
then: this: I3 { q: 'global::this.q' }
catch c1= Error: but then can throw and it caught in catch()?!
    at Promise.then (/Users/a9858770/lloyds/javascript-practice/promise2.js:42:11)
    at process._tickCallback (internal/process/next_tick.js:68:7)
    at Function.Module.runMain (internal/modules/cjs/loader.js:757:11)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:622:3)


*/
