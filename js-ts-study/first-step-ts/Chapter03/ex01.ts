// 01. 타입스크립트에서 변수 선언하기

// return문의 타입은 작성하지 않아도 됨

// 함수 선언식
function sum1(a: number, b: number): number {
  return a + b;
}

// 함수 표현식
const sum2 = function (a: number, b: number): number {
  return a + b;
};

// 화살표 함수
const sum3 = (a: number, b: number): number => {
  return a + b;
};

// ***** type alias 사용 예시 *****
type MenuType = [string, number, number];

const menu1: MenuType = ["치킨", 20000, 2];
const menu2: MenuType = ["콜라", 1500, 1];

const getReceipt = (arr: MenuType[]): string => {
  // 계산
  return "총 얼마입니다~";
};

getReceipt([menu1, menu2]);
