// 01. 조건부 타입

/*
타입을 조건적으로 부여할 수 있음

SomeType extends OtherType ? TrueType : FalseType;
*/

// ex01
interface User {
  name: string;
}
interface Student extends User {
  studentId: number;
}

type Example1 = Student extends User ? number : string;

// ex02
interface IdLabel {
  id: number;
}
interface NameLabel {
  name: string;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel("typescript");
let b = createLabel(2.9);
let c = createLabel(Math.random() ? "hello" : 42);
