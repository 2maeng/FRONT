const a = { name: '김임형' };
const b = { name: '김임형' };

const c = '김임형';
const d = '김임형';

console.log(a === b);
// false
// 참조에 의한 할당(메모리 힙의 주소가 저장되는 것)

console.log(c === d);
// true

// 내가 b랑 똑같은 형태의 객체가 필요하다면
const e = b;
console.log(e === b);
// true

e.name = '김이맹';
console.log(b);

// 1. 전개 연산자
const f = { ...b }; // const arr = [ ...d ]
console.log(f);
f.name = '김임형';

// 2. Object.assign
const g = {};
const newObject = Object.assign(g, b);

// 3. Lodash deepclone...
