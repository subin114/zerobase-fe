// 01. typeof

/*
- JS에서 이미 존재하는 타입 검사 연산자
- 피연산자의 평가 전 자료형을 나타내는 문자열을 반환함
- 즉, 타입의 범위를 더 좁혀줌으로써 타입스크립트의 코드를 더 안정적으로 작성할 수 있게 해줌
*/

function print(value: number | string): string {
  if (typeof value === "number") {
    return String(value);
  }

  if (typeof value === "string") {
    return value;
  }

  return value;
}
