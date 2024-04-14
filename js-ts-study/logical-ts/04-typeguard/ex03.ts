// 03. instanceof

/*
- JS에서 이미 존재하는 연산자
- in 연산자와 비슷하지만 결이 다름
- 생성자의 프로토타입 속성이 객체의 프로토타입 체인 어딘가 존재하는지 판별함
*/

function getDate(date: Date | string): Date {
  if (date instanceof Date) {
    return date;
  }

  return new Date(date); // string일 경우
}
