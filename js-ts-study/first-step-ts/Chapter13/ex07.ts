// 07. Exclude<T, U>

/*
T타입에서 U타입을 제외시킨 타입을 반환함

[Omit과 Exclude의 차이점]
- Omit : 객체 타입에서 프로퍼티를 제외시킴
- Exclude : 유니언 타입에서 프로퍼티를 제외시킴
*/

type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number
