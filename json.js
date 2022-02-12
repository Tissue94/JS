// JSON
// JavaScript Object Notation
// simplest data interchange format
// lightweight text-based structure
// easy to read
// key-value pairs
// used for serialization and transmission of data between the network the network connection
// independent programming language and platform 모든 언어들에 상관없이 사용 가능

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']); 
console.log(json);
// JSON 규격사항 [" "]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // 심볼은 포함되지 않는다.
    // Symbol: Symbol('id'),
    // 함수는 포함되지 않는다.
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);


// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); 데이터만 json에 포함된다. => 에러!

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); 

// JSONdiff.com 
// JSONBeautifier.org
// JSONParser.org
// JSONValidator JSON이 이상할 때 문제를 알려준다.

 