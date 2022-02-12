// Objects 
// one of the JavaScript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value}; object는 키와 값의 집합체이다.


// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4}; 
print(ellie); 

// Runtime : 프로그램이 동작하고 있을 때를 말한다.

// with JavaScript magic (dynamically typed language)
// can add properties later
// 가능하면 나중에 추가하지 말자

ellie.hasJob = true;
console.log(ellie.hasJob); 


// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. computed properties
// key should be always string

console.log('---------------------');

console.log(ellie.name); // .으로 접근 가능하고 코딩하는 순간 키 값을 받아오고 싶을때 주로 쓴다. 주로 .을 쓴다.
console.log(ellie['name']); // [키]로도 접근 가능하다. 실시간으로 정확하게 어떤 키가 필요한지 모를때 쓴다
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(ellie,'name');
printValue(ellie,'age');

// 3. Property value shorthand

console.log('--------------------');

const person1 = { name: 'bob', age: 2}
const person2 = { name: 'steve', age: 3}
const person3 = { name: 'dave', age: 4}
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) { 
// 다른 계산을 하지 않고 순수하게 obj을 생성하는 함수는 첫문자를 대문자로 쓴다. 생성자처럼 사용한다.
   this.name = name;
   this.age = age;
}

// 5. in operator: property existence check (key in obj)

console.log('--------------------');

console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)

console.clear();

for (key in ellie) {
    console.log(key);
}

// for(value of iterable) 
const array = [1, 2, 4, 5]; 
// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])

console.log('--------------------');

const user = {name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way 
const user3 = {};
for (key in user) {
    user3[key] = user[key]
}
console.clear();
console.log(user3);

// new way
Object.assign();