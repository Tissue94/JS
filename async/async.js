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
    await delay(1000);
    return 'apple';
}

async function getBanana() {
    await delay(1000);
    return 'banana';
}

async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);