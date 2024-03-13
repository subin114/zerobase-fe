// 07. unknown 타입

/*
unknown 타입
- 단어 그대로, 타입이 뭔지 '알 수 없는' 타입
- 어떤 값이든 들어올 수 있으니 엄격하게 검사해서 사용해라 라는 뜻
- any 타입과 유사하지만 훨씬 안전함
- 타입을 특정해주기 전까지는 무언가를 수행하려고 할 때 에러를 발생시킴
*/

function f1(a: any) {
  a.toUpperCase();
}

function f2(a: unknown) {
  if (typeof a === "string") {
    return a.toUpperCase();
  } else {
    return "문자열이 아닙니다.";
  }
}

// error 발생 코드
// function f2(a: unknown) {
//   a.toUpperCase();
// }
