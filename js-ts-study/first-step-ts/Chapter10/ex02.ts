// 02. 인덱스 타입과 인덱스 시그니처

/*
[인덱스 타입 쿼리 연산자 key of]
객체타입에서 키들을 리터럴의 유니언 타입으로 가져옴
*/

// ex01
type Point = {
  x: number;
  y: number;
};
type P = keyof Point; // 'x' | 'y'와 같음

type Arrayish = {
  [n: number]: unknown;
};
type A = keyof Arrayish; // number와 같음

type Mapish = {
  [k: string]: boolean;
};
type M = keyof Mapish; // string | number와 같음 (JS에서 객체의 키는 강제로 string으로 변환함)

// ex02
const DevelopStatus = {
  ready: "준비 중",
  develop: "개발 중",
  complete: "개발 완료",
} as const;

let myStatus: keyof typeof DevelopStatus = "ready";
