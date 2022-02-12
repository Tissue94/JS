// 프로그램에는 저마다의 함수들이 있다. 절차적인 언어는 함수가 굉장히 중요!
// 함수는 input을 받아 output으로 리턴한다. API를 쓸때 함수 이름을 보고 함수의 역할을 예상할 수 있음
// 
// Function 
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one functuon === one thing => 하나의 함수는 한가지의 일만
// naming: doSomething, command, verb
// e.g createCardAndPoint -> createCard, createPoint
// function is object in JS 함수는 Object로 간주되기 때문에 변수에 할당할 수 있고 파라미터로 전달되기도 한다.

function printHello() {
    console.log('Hello');
}

printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234); 
// 다른함수에서 타입이 중요한 경우 문제가 될 수 있다. 타입스크립트는 파라미터나 리턴타입에 타입을 명시한다.

// 2. Parameters
// premitive parameters: passed by value 
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Defalult parameters (added in ES6) 
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!', 'JS')
showMessage('Hi!')

// 4. Rest parameters (added in ES6) 
function printALL(...args) { // ... => Rest parameters 배열형태로 전달된다!!
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}

printALL('dream', 'coding', 'ellie')

// 5. Local scope    ※ 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'Hello'
    }
    // console.log(childMessage); 에러! not defined 
} 
printMessage();
// console.log(message); 에러! not defined

// 6. Return a value
function sum(a, b) {
    return a + b; 
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);
// 에러에는 return값이 생략되있다. ex) undefind 에러에는 return undefind가 생략되어있다.

// 7. Early return, early exit

// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good 
function upgradeUser(user) {
    if ( user.point <= 10) {
        return;
// 조건이 맞지 않을 때는 빨리 return을 해서 빠져 나오고 조건이 맞을때만 로직을 만난다.
    }
    // long upgrade logic... 필요한 로직들은 그 뒤에 작성한다.
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable 변수에 할당이 되고
// can be passed as an argument to other functions 파라미터로 전달이 되며
// can be returned by another function 리턴값으로 리턴이 된다.

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted) 
// a function expreesion is created when the execution reaches it.
console.log('----------------------------');
// print(); 에러! 호이스팅이 되지 않는다. 
const print = function () { // anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) { // printYes, printNo => callback function
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
}

// named function
// better debugging in debuggers stack traces
// rescursions
const printNo = function print() {
    console.log('no!');
    // print(); 재귀함수 나중에 Maximum call stack size exceeded 에러가 발생할 수 있다.
}
randomQuiz('wrong', printYes, printNo); 
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

console.log('----------------------------');

function calculated (command, a, b) {

    switch (command) {
        case 'add' :
            return a + b;
        case 'substract' :
            return a - b;
        case 'divide' :
            return a / b;
        case 'multiply' :
            return a * b;
        case 'remainder' :
            return a % b;
        default:
            console.log('입력값이 잘못되었습니다!');       
            // throw Error('unknown command);   
    }
}

console.log(calculated('add', 2, 4)); 
console.log(calculated('substract', 2, 4)); 
console.log(calculated('divide', 2, 4)); 
console.log(calculated('multiply', 2, 4)); 
console.log(calculated('remainder', 2, 4)); 


