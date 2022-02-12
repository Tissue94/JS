// 배열은 바구니 비슷한 것들을 묶어서 담아두며 보관한다. => 자료구조
// obj vs 자료구조 차이 
// obj는 서로 연관된 행동과 특징을 묶는 것 ex) 토끼의 먹는다, 뛴다 등 행동 
// 자료구조는 비슷한 타입의 obj들을 묶는 것을 자료구조 ex) 토끼들을 묶어서 보관
// 다른 언어는 동일한 타입의 데이터만 담을 수 있다. but JS는 타입이 없어서 다양한 종류의 타입을 담을 수는 있다. 

'use strict'

// Array 

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2]

// 2. Index position
const fruits = ['apple', 'banna'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for

console.log('---------------');

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index))

// 4. Addition, deletion, copy
// push: add an item to the end

console.log('-----------');

fruits.push('sb','peach');
console.log(fruits);

// pop: remove an iten from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('sb', 'peach');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice : remove an item by index position
fruits.push('sb', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1, 1) // 개수를 말하지 않으면 모두 지운다.
console.log(fruits);
fruits.splice(1, 1, 'greenapple', 'wm'); // 지우고 데이터도 추가할 수 있다.
console.log(fruits);
fruits.splice(1, 0, 'greenapple', 'wm'); // 지우지 않고 데이터를 추가할 수 있다.
console.log(fruits);

// combine two arrays
const fruits2 = ['kw', 'pear'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index

console.clear(); 
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('wm'));
console.log(fruits.indexOf('aaaaa')); // 없으면 -1 출력

// includes
console.log(fruits.includes('apple')); // 배열안에 있는지 없는지 T/F로 

// lastIndexOf
fruits.push('apple')
console.log(fruits);
console.log(fruits.indexOf('apple')); // 첫번째 apple 을 찾는다
console.log(fruits.lastIndexOf('apple')); // 마지막 apple을 찾는다.

