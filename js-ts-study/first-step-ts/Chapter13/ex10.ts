// 10. Parameters<T>

/*
함수의 매개변수에 사용된 타입을 튜플 타입으로 반환함
*/

declare function f1(arg: { a: number; b: string }): void;

type P0 = Parameters<() => string>; // []
type P1 = Parameters<(s: string) => void>; // [s: string]
type P2 = Parameters<<T>(arg: T) => T>; // [arg: unknown]
type P3 = Parameters<typeof f1>; // [arg: {a: number; b: string;}]
type P4 = Parameters<any>; // unknown[]
type P5 = Parameters<never>; // never
// type P6 = Parameters<string>; // error
// type P7 = Parameters<string>; // error
