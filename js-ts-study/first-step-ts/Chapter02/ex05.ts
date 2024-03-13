// 05. Null, undefined

let value1: null = null;
let value2: undefined = undefined;

/*
strictNullChecks 옵션 false인 경우
- 모든 타입의 변수에 null과 undefined를 대입 가능
- 런타임에 예기치 않은 오류가 발생할 수 있음

strictNullChecks 옵션 true인 경우 (권장)
- null과 undefined일 수 있는 변수를 참조하려고 하면 에러 발생
*/

const loggedInUserName: string = "James";

const users = [
  { name: "Harry", age: 12 },
  { name: "John", age: 32 },
];

const loggedInUser = users.find((u) => u.name === loggedInUserName);
console.log(loggedInUser?.age); // undefined
