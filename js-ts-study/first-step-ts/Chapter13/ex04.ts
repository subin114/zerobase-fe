// 04. Record<K, T>

/*
속성의 키가 K이고, 속성의 값이 T인 타입을 반환함
*/

type a = Record<"a" | "b" | "c", number>;
type b = Record<"a" | "b" | "c", { name: string; age: number }>;
