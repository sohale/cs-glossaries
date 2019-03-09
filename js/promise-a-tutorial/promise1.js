console.log('::this', this);
this.q='this-q';
console.log('::this', this);

const p1 = new Promise((resolve, reject)=>{
    console.log('promise 1 execution');

    const A2='A2', B3='B3', C4='C4', D5='D5';
    resolve(A2)
    reject(B3);

    W6 = this;
    console.log('this: W6', W6);

    //throw C4;
    //return D5;

    U7 = resolve(A2);
    V8 = reject(B3);

    console.log('U7', U7);
    console.log('V8', V8);

    //return resolve(a);
    //throw reject(b);

    return D5;
})
.then((t1)=>{
    console.log('then', 't1=', t1);
    const G1 = 'G1', H2='H2';
    const I3 = this;
    console.log('then: this: I3', I3);
    return G1;
    //throw H2

});

console.log('p1', p1);

/*
output:
::this {}
::this { q: 'this-q' }
promise 1 execution
this: W6 { q: 'this-q' }
U7 undefined
V8 undefined
p1 Promise { <pending> }
then t1= A2
then: this: I3 { q: 'this-q' }
*/

