//  promise1-7.js: what happens when promises return (resolve) "Promise" objects into their then()s.
// Promises can be chained by returning (actually, resolving) a Promise object. i.e. A value wrapped in a promise.
// It kind of flattens the Promises.
console.log('global::this', this);
this.q = 'global::this.q';
console.log('global::this', this);

const p1 = new Promise((resolve, reject)=>{
    console.log('promise 1 execution');

    const A2='A2', B3='B3', C4='C4', D5='D5';
    const A2_promise = new Promise((accept2, reject2)=>{
        console.log('promise2::body()')
        const AA2='AA2';
        accept2(AA2);
    });

    // return D5; // If returns before (without) resolve, the '.then' clause is neveer executed.
    resolve(A2_promise)
    reject(B3);

    W6 = this;
    console.log('this: W6', W6);

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
    // Receives a string, not a promise.
    // This is a second type of chaining.
    console.log('then', 't1=', t1, typeof t1);
    const G1 = 'G1', H2='H2';
    const I3 = this;
    console.log('then: this: I3', I3);
    return G1;
    //throw H2

});

// p1 is already executed if the queue is empty.
console.log('p1', p1);
// p1 is still unresolved

/* Output:

global::this {}
global::this { q: 'global::this.q' }
promise 1 execution
this: W6 { q: 'global::this.q' }
U7 undefined
V8 undefined
p1 Promise { <pending> }
then t1= A2
then: this: I3 { q: 'global::this.q' }
*/
