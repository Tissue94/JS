// promise chaining 보다 간편하게 코드 작성 
// syntactic sugar : 기존에 존재하는 것을 감싸서 더 간편하게 쓸 수 있는 api를 제공하는 것

// async & await 
// clear style of using promise :)

// 1. async
async function fetchUser() {
    return  'ellie';
    
}

const user = fetchUser();
user.then(console.log);

console.log(user);

// 2. await  async가 붙은 함수 안에서만 사용 가능

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return 'apple';
}

async function getBanana() {
    await delay(1000);
    return 'banana';
}

async function pickFruits() {
    const applePromise = getApple(); // 병렬적으로 실행하기 위해 프로미스를 활용한다.
    const bananaPromise = getBanana(); // 동시다발적으로 수행이 가능한 경우 
    const apple = await applePromise
    const banana = await bananaPromise
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    // Promise.all() -> 프로미스 배열을 전달하면 모든 프로미스들이 병렬적으로 다 받을때 까지 모아주는 것
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log)

function pickOnlyOne() {
    // Promise.race -> 배열에 전달된 프로미스 중에서 가장 먼저 값을 리턴하는 것만 전달
    return Promise.race([getApple(), getBanana()])
}

pickOnlyOne().then(console.log)