// 04. 사용자 정의

/*
- 조금 더 TS답게 타이핑 하고 싶을 때 사용
- 매개변수 is 타입 을 이용할 수 있음

function isDate(date: Date | string): 매개변수 is 타입 {}
*/

function isDate(date: Date | string): date is Date {
  return date instanceof Date;
}

function getDate1(date: Date | string): Date {
  if (isDate(date)) {
    return date;
  }

  return new Date(date); // string일 경우
}
