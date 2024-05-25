// # What are polyfills ?
// It provides a functionality which might be supported by a browser but might not be supported
// by another browser. F.E. - Promises are not supported in internet explorer

// Here are some examples of polyfills

// Polyfill of ForEach

// Sample Array
const mySampleArray = [1, 4, 2, 6, 8, 3, 8, 4];

// Sample Function that we want to implement
const myFunc = (el) => {
  return el * 2;
};

// 
Array.prototype.myForEach = function (callbackfunction) {
  const newArr = [];
  for (let val of this) {
    const newV = callbackfunction(val);
    newArr.push(newV);
  }
  return newArr;
};
const forEachARR = mySampleArray.myForEach(myFunc);
console.log("forEachARR", forEachARR);

// custom map function 

const arr = [2, 3, 4, 1];

/* console.log(arr.map(el=>el*2));*/

Array.prototype.myMap = function(cbf) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    tempArr.push(cbf(this[i], i, this))
  }
  return tempArr;
}

console.log(arr.myMap(el => el * 2))


// custom filter function 

/* console.log(arr.filter(el => el % 2 === 0)); */

Array.prototype.myFilter = function(cbf) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cbf(this[i], i, this)) {
      newArr.push(this[i])
    }
  }
  return newArr;
}

console.log(arr.myFilter(el => el % 2 !== 0));

// custom Reduce function 

/* console.log(arr.reduce(((acc, el) => acc + el),20)) */

Array.prototype.myReduce = function(cbf, initialVal) {
    var accumulator = initialVal;
    for (let i = 0; i < this.length; i++) {
      accumulator = accumulator ? cbf(accumulator, this[i], i, arr) : this[i];
    }
    return accumulator;
  
  }
  
  
  console.log(arr.myReduce(((acc, el) => acc + el), 20))