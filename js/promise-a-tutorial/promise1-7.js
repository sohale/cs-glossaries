//  promise1-7.js: what happens when promises return (resolve) "Promise" objects into their then()s.
// The outer promise, receives a string, not a promise. This is a second type of chaining.
// Promises can be chained by returning (actually, resolving) a Promise object. i.e. A value wrapped in a promise.
// It kind of flattens the Promises.
//
// ? A promise is out-resolved (a resolved promise turning into a value) even between  a promise body and its then.
//  Even if the "then() return"s a promise object, it is like a promise resolving another promise object.
//  A then() that returns a Promise also extracts (not resolves) the resolved value of that promise (and waits for it, but in the upper one. The wait is not done there in the then())."

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
    })
    .then((d)=>{
        console.log('promise2::then(): received: '+d);
        console.log('triggering a wait fork. waiting... ');

        // return d+'->then';
        const p = new Promise((accept3, reject3)=>{
            setTimeout(()=>{

                // ? A promise is out-resolved (a resolved promise turning into a value) even between  a promise body and its then.
                accept3(d+'->then(delayed 500)');
            }, 500);
        });
        console.log('                note: the then() itself does not wait at the end of it. Is it  the resolve that waits? no! ');
        return p;
    });

    // return D5; // If returns before (without) resolve, the '.then' clause is neveer executed.
    resolve(A2_promise);
    console.log('resolve() does not wait.');
    reject(B3);

    W6 = this;
    console.log('this = W6', W6);

    return D5; // no trace of returned value is left
})
.then((t1)=>{
    console.log('... end of waiting. The waiting happens here: between the higher promise (which resolved a promise that resolved another) and its then');

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
