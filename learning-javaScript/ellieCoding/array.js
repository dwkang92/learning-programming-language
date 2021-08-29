'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['apple','banana'];
console.log(fruits); // apple, banana
console.log(fruits.length); // 2
console.log(fruits[0]); // apple
console.log(fruits[2]); // undifined
console.log(fruits[fruits.length -1]); // banana

console.clear();

// 3. Looping over an array
// print all fruits

// method 1. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// method 2. for of
for(let fruit of fruits) {
    console.log(fruit)
}

// method 3. forEach (callback function)
frutis.forEach(function () {
    console.log('he');
});
