// class like container 
// class =>  fields 와 methosd
// 클래스는 붕어빵을 만들 수 있는 틀, 청사진 
//
// object 클래스를 이용해서 데이터를 만드는 것
// 실제로 메모리에 올라간다. 클래스는 메모리에 올라가지 않는다.
// 붕어빵 자체이다. 팥붕어빵, 크림붕어빵 등등

'use strict'
// Object-oriendted programming
// class : template 
// object : instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. class declarations
class Person {
    //constructor
    constructor(name, age) { 
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name); 
console.log(ellie.age); 
ellie.speak();

// 2. Getter and Setters  
// 커피머신을 예로들면 커피머신에는 커피 개수가 있고, 동전을 넣어 커피를 만든다.
// 커피머신에는 프로퍼티가 커피 개수가 있고 동전을 넣는 메서드, 커피를 만드는 메서드가 있다.
// 커피 개수는 -1으로 될 수 없다. 사용자가 -1로 설정해도 우리가 setter를 이용하여 0으로 만들어 준다.
// 사용자가 커피 개수를 마음대로 설정할 수 없도록 프로퍼티를 private로 만든다. 이것이 인캡슐레이션이다.
// 이렇기 때문에 getter 와 setter를 이용한다.
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // 우리가 get age()를 정의하는 순간 this.age는 메모리에 올라가있는 데이터를 읽어오는 것이 아니라
    // get age()를 호출한다. 
    // 우리가 set age()를 정의하는 순간 = age로 값을 할당 할때 바로 메모리에 값을 할당하는 것이 아니라 set age()를 호출한다.
    // setter 안에서 전달된 value를 this.age에 할당할 때 메모리에 올라가는 것이 아니라 setter를 다시 호출하며 재귀적이 된다.
    // 이를 방지하기 위해 getter와 setter안에 있는 변수 이름을 다른 것으로 사용해야 한다. ex) this._age

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative')
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age); 
// -1이 되면 안된다! 이렇게 잘못 사용해도 방어적인 자세로 만들수 있게 해주는 것이 Getter 와 Setter이다. 

// 3. Fields (public, private) 
// Too soon! 너무 최근에 추가되었다. 추가되었다 정도 알고있자 최신 브라우저에서도 지원 안한다.
// 
class Experiment {
    publicField = 2;
    #privateField = 0; // 해쉬기호를 붙인다. 클래스 외부에서는 이 값을 읽을 수도 변경할 수도 없다.
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon! 추가되었다 정도 알고있자
class Article {
    static publisher = 'Drean Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // static은 Object마다 할당되는 것이 아니라 클래스 자체에 붙어있다.
console.log(Article.publisher);
Article.printPublisher();

// 우리가 사각형 삼각형 원의 도형을 그릴려고 할때 도형이라는 큰 공통적인 속성을 이용하여 각 도형을 그리면 더 쉽다.
// 만약 그리는데 문제가 있다면 공통적인 속성을 수정하면서 해결할 수 있다 .
// => 상속과 다양성

// 5. Inheritance
// a way for one class to extend another class.

console.log('------------------------------------');

class Shape {
    constructor( width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color !`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {
    // 정의만 해도 Shape의 field와 methods가 자동적으로 포함된다.
}

class Triangle extends Shape {

    draw() {
        super.draw(); // 부모의 메서드 호출
        console.log('▲');
    }

    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle color: ${this.color}`
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf 
console.log(rectangle instanceof Rectangle);
 // 왼쪽 object가 오른쪽 클래스의 인스턴스 인지 아닌지 클래스를 이용해서 만들어졌는지
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

// JS MDN reference 사이트에 Object들이 있다