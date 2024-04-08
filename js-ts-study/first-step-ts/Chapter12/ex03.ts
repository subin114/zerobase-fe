// 03. 조건부 타입의 추론

/*
Infer 키워드를 사용하여 조건부 타입을 추론할 수 있음
extends 키워드와 함께 사용되며, 타입스크립트가 런타입에서 타입을 추론하게 됨

T extends infer U ? X : Y
*/

// ex01
type LengthType<T> = T extends { length: infer U } ? U : never;
type a = LengthType<{ length: number }>;

// ex02
type GetParamType<T> = T extends (x: infer U) => void ? U : never;

type BFunc = (x: string) => void;
type b = GetParamType<BFunc>;

type CFunc = (x: string, y: number) => void;
type c = GetParamType<CFunc>;

type DFunc = (x: string | number) => void;
type d = GetParamType<DFunc>;
