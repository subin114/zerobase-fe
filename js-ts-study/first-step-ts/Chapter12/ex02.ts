// 02. 분산 조건부 타입

/*
제네릭 타입 위에서 조건부 타입은 유니언 타입을 만나면 분산적으로 동작한다.

ax + bx = (a + b)x   ==> 분배 법칙처럼 작동
*/

// ex01
type ToArray<T> = T extends any ? T[] : never;
type StrArrOrNumArr = ToArray<string | number>;

// ex02
type T = number | boolean;
type Test<T> = T extends number ? T : null;
type A = Test<T>;
