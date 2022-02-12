'use strict';

// JavaScript is synchronous.
// Execute the code block in orger after hoisting 
// 호이스팅이 된 이후 코드가 나타나는 순서대로 자동적으로 실행이 된다.
// hoisting: var, function declaration 
console.log('1');
setTimeout(() => console.log('2'), 1000)
console.log('3');


// Synchronous callback 동기
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));



// Asynchronous callback 비동기
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000)


// 콜백지옥 체험

 class UserStorage {
     loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
     }

     getRoles(user, onSuccess, onError) {
        setTimeout(()=> {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
     }
 }

 const userStorage = new UserStorage();
 const id = prompt('enter your id');
 const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
            alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
        },
            error => {console.log(error);}
        )
}, 
error => {console.log(error); })

// 콜백 체인의 문제점 
// 1. 읽기가 힘들다. 가독성이 떨어진다. 한눈에 알아보기 이해가 힘들어진다. 
// 2. 디버깅이 힘들어진다.
// 3. 유지보수도 힘들어진다. 