// 11. ReturnType<T>

/*
함수의 리턴타입을 반환함
*/
declare function f1(): { a: number; b: string };

type R0 = ReturnType<() => string>; // string
type R1 = ReturnType<(s: string) => void>; // void
type R2 = ReturnType<<T>() => T>; // unknown
type R3 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
type R4 = ReturnType<typeof f1>; // {a: number; b: string;}
type R5 = ReturnType<any>; // any
type R6 = ReturnType<never>; // never
// type R7 = ReturnType<string>; // error
// type R8 = ReturnType<Function>; // error
