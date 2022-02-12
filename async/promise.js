'use strict';
// 콜백 지옥을 해결할 수 있는 방법 Promise
// Promise is a JavaScript object for asynchronous operation 
// state 에 유의  프로세스가 무거운 operation을 수행하는 중인지, 기능 수행이 완료되어 성공했는지 실패했는지
// producer와 consumer의 차이점을 아는 것 
// state: pending -> fulfilled of rejected
// Producer (원하는 기능을 수행해서 해당하는 데이터를 만들어내는)
// Consumer(원하는 데이터를 소비하는)

// 1. Producer body에 네트워크 통신을 하는 코드를 작성했다면, 프로미스가 만들어지는 순간 네트워크 통신을 수행한다.
// 만약 네트워크 요청을 사용자가 요구했을 때만 해야되는 경우라면, 사용자가 버튼을 눌렀을 때 네트워킹을 해야되는 경우라면 이 점을 유의해야 한다.
// when new Promise is created, the executor rus automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work ( network, read files) => 비동기적으로 처리하는 것이 좋다.
    console.log('doing something...');
    setTimeout(() => {
       resolve('ellie');
       // reject(new Error('no network'))
    }, 2000)
})

// 2. Consumers: then, catch, finally
// 
promise.then(value => {
    console.log(value); // resolve되면 ellie가 뜬다 reject되면 no network 에러가 뜬다.
}) 
.catch(error => { // 에러 메세지를 콘솔로 나타내고 에러를 띄우지 않는다.
    console.log(error);
})
.finally(() => { // 성공하던 실패하던 상관없이 어떤 기능을 마지막으로 수행하고 싶을때 
    console.log('finally');
});

// 3. Promise chainging
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('chicken'), 1000);
    });
const getEgg = hen => 
    new Promise((resolve, reject) => {
       // setTimeout(() => resolve(`${hen} => egg`), 1000);
       setTimeout(() => reject(new Error(`${hen} => egg`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => cooking`, 1000));
    });

    getHen()
    // .then(hen => getEgg(hen)) 아래와 같이 줄일 수 있다.
    .then(getEgg)
    .catch(error => {
        return 'bread';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);