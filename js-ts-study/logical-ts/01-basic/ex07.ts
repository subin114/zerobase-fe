// 07. 튜플 타입

/*
- 길이 고정 & 인덱스 타입이 고정
- 여러 다른 타입으로 이루어진 배열을 안전하게 관리
- 배열 타입의 길이 조절
*/

const arr: string[] = ["A", "B", "C"];

const tuple: [number, string] = [1, "A"];

const tuple1: (number | string)[] = [1, "A"];

const tuple2: [number, ...string[]] = [0, "A", "B"];
