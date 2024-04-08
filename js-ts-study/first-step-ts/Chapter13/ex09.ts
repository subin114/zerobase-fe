// 09. NonNullable<T>

/*
T에서 null과 undefined를 제외하고 타입을 반환함
*/

type T5 = NonNullable<string | number | undefined>; // string | number
type T6 = NonNullable<string[] | null | undefined>; // string[]
