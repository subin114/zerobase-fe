// 10. unknown

/*
- 새로운 최상위 타입
- any처럼 모든 값을 허용하지만, 상대적으로 엄격함
- TS에서 unknown으로 추론하는 경우는 없으니 개발자가 직접 명시해야 함
- assertion 혹은 타입 가드(= 타입이 맞는지 검증)와 함께 사용함
- any를 대체해서 사용함
*/

function func1(x: unknown) {
  let val1: any = x;
  let val2: unknown = x;
  // let val3: string = x; // error
  // let val4: boolean = x; // error
  // let val5: number = x; // error
  // let val6: string[] = x; // error
  // let val7: {} = x; // error
}

function func2(x: any) {
  let val1: any = x;
  let val2: unknown = x;
  let val3: string = x;
  let val4: boolean = x;
  let val5: number = x;
  let val6: string[] = x;
  let val7: {} = x;
}

/* 타입 가드 예시 */
let num: unknown = 99;

if (typeof num === "string") num.trim();
