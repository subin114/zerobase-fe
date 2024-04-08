// 08. Extract<T, U>

/*
U에 할당 가능한 모든 유니언 멤버를 T에서 가져와서 반환함
Extract : 추출하다, 뽑다
*/

type T3 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T4 = Extract<string | number | (() => void), Function>; // () => void
