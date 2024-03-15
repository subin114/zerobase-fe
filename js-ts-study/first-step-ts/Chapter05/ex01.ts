// 01. Type Aliases 사용하기

/*
타입 앨리어스 (Type Aliases)
- 번역하면 "타입 별칭"
- 중복되거나 복잡한 타입들은 이름을 지어줘서 재사용
*/

// 타입 앨리어스 예시
type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: "김개발",
  age: 20,
};

const user2: User = {
  name: "이개발",
  age: 25,
};

// 유니언 타입 사용
type studentId = number | null;

let id: studentId = null;

// 교차 타입 사용
type Student = User & {
  id: studentId;
};

// 튜플 타입 사용
type TupleType = [number, string];
const tuple1: TupleType = [10, "hello"];
const tuple2: TupleType = [20, "hi"];
