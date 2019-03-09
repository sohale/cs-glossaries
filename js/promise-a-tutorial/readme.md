
Why does JavaScript Promise uses (resolve, reject) instead of a parameter-less callback that returns or throws?

The `Promise` could have been used in a simpler way (without two arguments `resolve`, `reject`) like:
```javascript
    /*new*/ QuasiPromise(()=>{
        let x = Math.random()>0.5;
        console.log('promise 1');
        if (x) {
            return 'head1';
        } else {
            throw new Error('tail1');
        }
    })
    .then((d)=>{
        console.log('.then() d=', d);
    })
    .catch( (ex) =>{
        console.log('.catch() e=', ex.message);
    });
```
Instead of the Promise's way:
```javascript
    new Promise( (resolve, reject) => {
        let y = Math.random()>0.5;
        console.log('promise 2');
        if (y) {
            resolve('head2');
        } else {
            reject(new Error('tail2'));
        }
    })
    .then((d)=>{
        console.log('              .then() d=', d);
    })
    .catch( (ex) =>{
        console.log('              .catch() e=', ex.message);
    });
```
i.e. when the control flow exits the body of the callback of the promise, resolve or reject are used based on whether the exit was caused by a `return` or a `throw`.

The above syntax can be easily emulated with the following definition (for simplicity, ignore the fact that `QuasiPromise` is not a constructor, hence does not need the `new` operator):
```javascript
    function QuasiPromise(callback) {
        return new Promise( (resolve, reject) => {
            try {
                resolve( callback() );
            } catch (err) {
                reject(err);
            }
        });
    }
```
What would have been the shortcoming of this simpler usage syntax? What was the intention of the designers or the `Promise` to use (resolve, reject)?
