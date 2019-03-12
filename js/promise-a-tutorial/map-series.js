if (false) {
const arr = [];
for(let i in [1,2,3,4,5]) {
	const p =
    new Promise((resolve, reject)=>{
        console.log('promise '+i);
        resolve(i)
    })
    .then((d)=>{
        console.log('i='+i+' .then(): d', d);
    });
    arr.push(p);
}
/*
const p2 = Promise.mapSeries(arr);
console.log(p2);
*/

const bluebird = require('bluebird');
var i = 2;
const bp = new bluebird.Promise((resolve, reject)=>{
    console.log('*promise '+i);
    resolve(i)
})
.then((d)=>{
    console.log('*i='+i+' .then(): d', d);
});

}


// const promise = require('bluebird');
// console.log('promise', promise);
// console.log('bluebird', bluebird);

//promise.mapSeries;



/*
//Create an array of 3 file names which needs to be read and processed
var fileNames = ['test.txt', 'test1.txt', 'test2.txt'];

//Instead of reading them synchronously, we will use promises to read them asynchronously
var filePromises = fileNames.map(function(fileName) {
    
    return promiseFun1(fileName).then(sentences=>{
        console.log('Processing file = ', fileName);
        return wordCount(sentences);
    });
});

require('bluebird').mapSeries(filePromises, function (filePromise) {
    return filePromise;
}).then(numWords=>{
    console.log('Count of all files = ', numWords);
})
.catch(err=> {
    console.log(err);
});

*/

/*
console.log('bluebird.mapSeries', bluebird.mapSeries());
*/

//console.log('bp', bp);
/*
bluebird.mapSeries([bp]).then((d)=>{
    console.log('bluebird.mapSeries .then() d=', d);
});
*/


const bluebird = require('bluebird');
bluebird.mapSeries([100,200], (d)=>{
    console.log('d', d);
    return d+1;
}).then((d)=>{
    console.log('bluebird.mapSeries .then() d=', d);
});



/*
function mapSeries(things, fn) {
    var results = [];
    return Promise.each(things, function(value, index, length) {
        var ret = fn(value, index, length);
        results.push(ret);
        return ret;
    })
    .thenReturn(results)
    .all();
}

Promise.reduce(operations, (i, [query, update]) => {
  return Model.update(query, update);
}, 0);

Promise.series(operations, ([query, update]) => {
  return Model.update(query, update);
});
// https://github.com/petkaantonov/bluebird/issues/134



var arr = [1,2,3,4,5];
Promise.mapSeries(arr, function (itm) {
      console.log('on: ' + itm);
      return Promise.delay(500).then(function() { console.log('off: ' +itm); 
   }).delay(500);
});
// https://codereview.stackexchange.com/questions/177475/iterate-array-with-delay-in-between-using-promise/177560#177560


*/


Promise = bluebird;
/*

var arr = [1,2,3,4,5];
Promise.mapSeries(arr, function (itm) {
      console.log('on: ' + itm);
      return Promise
        .delay(50)
        .then( () => {
            console.log('off: ' +itm); 
        })
        .delay(50);
});
*/
/*
That function returns a promise.
It waits for each promise÷ to finish before starting the next one?
*/

/*
[1,2,3].mapSeries(  (x)=>{return new Promise(...  {x+1}); )
[2,3,4]
*/

var arr = [1,2,3,4,5];
const q = Promise.mapSeries(arr, (itm) => {
      console.log('on: ' + itm);
      

      return new Promise((r,j)=>{
            const waittime = Math.random()*100;

            setTimeout(()=>{
                console.log('waited', waittime, '->', itm);

                if (itm===3) {
                    j(itm+1000);
                    //return;
                }
                r(itm+1000);
                //return itm+100;
            }, waittime);
      })
       .then( (d) => {
            console.log('off: ' +itm+' d:'+d); 
            return -d;
        })

        // we dont get tio promise series's catch        
       .catch( (d) => {
            console.log('inner catch:', d); 
            return d*100;
        });

})
.then((outcome)=>{
    console.log('outcome', outcome);
})
//we neveer need this
.catch((err)=>{
    console.log('promise series catch:', err);
})
// outcome [ -1001, -1002, -1003, -1004, -1005 ]

console.log('q', q);

/*
npm install heapdump 
https://blog.risingstack.com/finding-a-memory-leak-in-node-js/
*/

/*
promise seris:logreseolve & resoleve && resoleve
*/
