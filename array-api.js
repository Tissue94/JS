'use strict'

// 01. make a string out of an array
{ const fruits = ['apple', 'banana', 'orange'];

const result = fruits.join('.'); // 파라미터는 seperate 형식을 바꿀 수 있다. 기본은 , 
console.log(result);
}
// 02. make an array out of a string
{
    const fruits = 'apple, kw, banana, cherry';
    const result = fruits.split(',', 2)
    console.log(result);
}

// 03. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); // array도 바뀐다
}
// 04. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
    // splice 는 배열 자체를 수정
    // slice는 배열에서 원하는 부분만 리턴한다.
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// 05. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// 06. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// 07. make an array containing only the students' scores 
// result should be: [45, 80, 90, 66, 88]
{
    // 배열을 변환 시켜서 새로운 배열을 만드는 map()
    const result = students.map((student) => student.score);
    console.log(result);
}

// 08. check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some((student) => student.score < 50); // 하나라도 조건에 맞는지
    console.log(result); 

    const result2 = students.every((student) => student.score < 50); // 모든 것이 조건에 맞는지
    console.log(result2);
}

// 09. compute students' average score
{
    // curr 값은 하나의 객체, prev는 이전의 curr
    // reduceRight 은 거꾸로 돈다
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// 10. make a stirng containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map(student => student.score)
    // .filter((score) => score >= 50) 
    .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map(student => student.score)
    .sort((a, b) => a - b) // b - a 는 거꾸로 
    .join();
    console.log(result);
}
