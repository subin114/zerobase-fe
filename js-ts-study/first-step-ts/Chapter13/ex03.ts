// 03. Readonly<T>

/*
모든 속성을 Readonly로 변경된 타입으로 반환함
*/

interface SomeType {
  a: string;
  b: number;
}

type ReadonlyType = Readonly<SomeType>;

// let value: ReadonlyType = {
//   a: "hello",
//   b: 100,
// };

// value.a = "hi";  --> error  다른 값으로 변경이 불가능함
