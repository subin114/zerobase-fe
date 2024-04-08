// 06. Omit<T, K>

/*
리터럴 타입으로 부분적인 프로퍼티들을 선택해 타입을 반환함
Pick과 반대라고 생각하면 됨
*/

interface SomeType {
  a: string;
  b: number;
  c: string;
  d: boolean;
  e: number;
  f: string;
  g: string;
  h: string;
  i: string;
  j: string;
  k: string;
  l: string;
  m: string;
  n: string;
  o: string;
  p: string;
}

type WhatType = Omit<SomeType, "a" | "b" | "c">;
