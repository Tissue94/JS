'use strict' // 너무 flexible하기 때문에 flexible한 것을 억제한다.

console.log('Hello World!');

// 2. Variable rw(read/write)

let globalName = 'global name' // globalscope 글로벌한 변수들은 앱이 실행되는 순간부터 끝날때 까지 메로리에 저장된다. 최소한으로 쓰는 것이 좋다.

let name = 'ellie';
console.log(name);

name = 'hello';
console.log(name);

// var
console.log(age);
age = 4;
console.log(age);
var age;
// var 호이스팅 어디에 선언했냐에 상관없이 항상 제일 위로 끌어 올리는것

// 3. Constant Immutable 데이터타입, r(readonly), 한번 작성된 값을 변경x,
// 다양한 스레드가 값을 변경하지 않도록 한다, 실수를 줄인다.
const daysInWeek = 7;
const maxNumber = 5;


// NOTE!
// Immutable data types : primitive types, frozen objects (i.e. object.freeze()) 데이터 자체를 변경하는 것 불가능
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes


// 4. Variable types
// primitive type -> value 그대로 저장된다.
// object type -> ref를 통해서 저장된다.
// fuction,  first-class function 함수도 변수에 할당 가능하다.
const count = 17; // integer
const size = 17.1 // decimal nuber
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

// special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const megativeIfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(megativeIfinity);
console.log(nAn);

// bigInt
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53) n을 붙이면 표기 가능 크롬 파이어폭스만 이용가능
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals(string)
console.log(`value : ${helloBob}, type : ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''

// null
let nothing = null
console.log(`value : ${nothing}, type : ${typeof nothing}`);

// undefined
let x;
console.log(`value : ${x}, type : ${typeof x}`);

// symbol, create unique identifiers for objects 고유한 식별자가 필요할 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // 값이 같아도 다른 식별자로 된다.

// 동일한 심볼을 만들고 싶을때는
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`); // 심볼을 출력할 때는 .description으로 string으로 변환 후 출력해야된다.

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type : ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`);
console.log(text.charAt(0)); // => 에러! number타입이기 때문에
