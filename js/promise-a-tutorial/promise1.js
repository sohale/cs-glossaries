const p1 = new Promise((resolve, reject)=>{
    console.log('promise 1 execution');

    const A2='A2', B3='B3', C4='C4', D5='D5';
    resolve(A2)
    reject(B3);

    W6 = this;
    console.log('W6', W6);

    //throw C4;
    //return D5;

    U7 = resolve(A2);
    V8 = reject(B3);

    console.log('U7', U7);
    console.log('V8', V8);

    //return resolve(a);
    //throw reject(b);

    return D5;
});

console.log('p1', p1);

/* Output:

promise 1 execution
W6 {}
U7 undefined
V8 undefined
p1 Promise { 'A2' }

*/
