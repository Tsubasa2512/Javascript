console.log("-------------Bài 119");
/**

function sumCb(a, b) {
    return a+b;
}
function subCb(c,b){
    return c-b;
}
function multiCb(c,b){
    return c*b;
}
function divCb(c,b){
    return c/b;
}
function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
caculate(1, 2, sumCb) // Output: 3
caculate(1, 2, subCb) // Output: -1
caculate(1, 2, multiCb) // Output: 2
caculate(3, 1, divCb) // Output: 3
 */

console.log("-------------Bài 121");
/** 
 * Array.prototype.myMap = function(cb) {
    var doDai = this.length;
    var kq=[];
    for( var i =0;i<doDai;i++){
        var results = cb(this[i],i);
        kq.push(results);
    }
    return kq;
}

// Expected results
 const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
 })) // Output: [2, 4, 6]

 console.log(numbers.myMap(function (number, index) {
    return number * index;
})) // Output: [0, 2, 6]



 */

console.log("-------------Bài 126");
/** 
 * Array.prototype.myFilter = function(cb) {
    
    var newArray=[];
   
    for( var index in this){
       if(this.hasOwnProperty(index)){
            var kq = cb(this[index],index,this);
        if(kq){
            newArray.push(this[index]);
        }
       }
    }
    return newArray;
}


/**
Expected results:

const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); Output: [1, 2, 3, 4]
 */

console.log("-------------Bài 128");
/** 
 * Array.prototype.mySome = function(cb) {
    var output = false;
    for( var index in this){
        if(this.hasOwnProperty(index)){
            if(cb (this[index],index,this)){
                output=true;
            };
        }
    }
    return output;
}


/**
Expected results:

const numbers = [1, 3, 3, 5];

console.log(numbers.mySome(function (number) {
    return number % 2 === 0;
})); Output: false

console.log(numbers.mySome(function (number, index) {
    return index % 2 === 0;
})); Output: true

console.log(numbers.mySome(function (number, index, array) {
    return array.length % 2 === 0;
})); Output: true
 */

console.log("-------------Bài 130");
/** 
 * Array.prototype.myEvery = function(cb) {
     var output = false;
    for( var index in this){
        if(this.hasOwnProperty(index)){
            if(cb (this[index],index,this)){
                output=true;
            };
        }
    }
    return output;
}


// Expected results

// const numbers = [1, 3, 3, 5];

// console.log(numbers.myEvery(function (number) {
//     return number % 2 !== 0;
// })); // Output: true

// console.log(numbers.myEvery(function (number, index) {
//     return index % 2 === 0;
// })); // Output: false

// console.log(numbers.myEvery(function (number, index, array) {
//     return array.length % 2 === 0;
// })); // Output: true
 */
