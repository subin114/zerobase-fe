// 04. any, void, never 타입

/*
Any 타입
- Any 타입의 변수에는 어떤 타입의 값이든 할당 가능 (자바스크립트처럼 동작)
- 되도록이면 사용하지 않는 것이 좋음
- "noImplicitAny": true; 를 하면 Any를 사용했을 때 에러를 발생시킴

Void 타입
- 어떤 타입도 존재할 수 없음
- 함수에서 return 값이 없을 때 사용
- return 값만 없을 뿐, 함수는 종료됨

Never 타입
- 어떠한 값도 가질 수 없는 타입
- 공집합
- 함수가 종료될 수 없는 상태에서 쓰임 (ex. throw Error, while문)
*/

function someFunc1(): void {
  console.log("hello");
}

const someFunc2 = (): never => {
  throw new Error();
};

const someFunc3 = (): never => {
  while (true) {}
};
