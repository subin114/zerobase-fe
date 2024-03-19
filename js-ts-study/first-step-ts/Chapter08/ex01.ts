// 01. 제네릭이란?

/* 
- 단일 타입이 아닌 다양한 타입에서 작동하는 컴포넌트를 작성할 수 있음
- 사용처에서 타입을 정해서 전달해줄 수 있음
*/

function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");

// ex. 화살표 함수에서 사용하는 방법
type identityType = <T>(arg: T) => T;

const identity2: identityType = (arg) => {
  return arg;
};
