// 11. void

/*
- 함수의 반환이 없는 경우를 명시
- void 타입을 명시할 필요 없이 타입 추론에 위임하자 (알아서 void로 추론해주기 때문)
- JS에서는 암시적으로 undefined 반환
- 그러나 void와 undefined는 TS에서 같은 것이 X
*/

function test1(): undefined {
  return undefined;
}

function test2(): void {}

console.log(test1()); // undefined
console.log(test2()); // void
