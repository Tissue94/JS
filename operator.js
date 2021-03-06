// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("ellie\'s \n\tbook");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation 2의 3승

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIcrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIcrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x= x + y;
x -= y; 
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); 
// 이럴때는 가벼운것들을 앞에 두고 함수같은 무거운건 뒤에 두자

// &&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`); 
// 이럴때는 가벼운것들을 앞에 두고 함수같은 무거운건 뒤에 두자

// foten used to compress long if-statement
// nullableObject && nullableObject.something => null인것을 확인할 때 주로 쓰인다
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('★');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 문자열이긴한데 안에 들어있는건 숫자5 => 똑같다
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion 타입이 다르면 다른 것들이다 => 다르다 주로 사용하자
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference 각각 다른 레퍼렌스가 있다. 3에는 1의 레퍼런스를 갖게 된다.
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false); // t
console.log(0 === false); // f
console.log('' == false); // t
console.log('' === false); // f
console.log(null == undefined); // t
console.log(null === undefined); // f

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('welcome, ellie!');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE'
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i -2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue) 

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0 ) {
        console.log(i);
    } else {
        continue;
    }
}


// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for (let i = 0; i <= 10; i++) {
    if (i == 8) {
        break; 
    } 
    console.log(i);
}