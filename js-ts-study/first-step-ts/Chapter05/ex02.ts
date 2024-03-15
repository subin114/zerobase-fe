// 02. Type Aliases vs Interface

/*
타입 앨리어스와 인터페이스의 차이

[ 타입 앨리어스 ]
- '='을 사용
- 교차 타입(&)으로 확장
- 동일한 이름으로 작성하면 에러 발생
- 유니언, 튜플 등 사용 가능

[ 인터페이스 ]
- '=' 사용 X
- extends를 사용해서 확장
- 동일한 이름으로 정의함으로써 '선언적 확장'이 가능
- 객체에서만 사용 가능 (유니언, 튜플 X)
*/

// 타입 앨리어스 확장 (교차 타입)
type Person1 = {
  name: string;
  age: number;
};

type Student1 = Person1 & {
  id: number;
};

// 인터페이스 확장
interface Person2 {
  name: string;
  age: number;
}

interface Person2 {
  id: number;
}

interface Student2 extends Person2 {
  id: number;
}

// 아래와 같이 유니언, 튜플 타입은 타입 앨리어스를 사용하고, 그 외의 것들은 인터페이스를 사용하는 것이 좋음
// 그 이유는 인터페이스는 동일한 이름으로 타입 확장이 가능하기 때문
type AB = "A" | "B";
type TupleType1 = [string, number];
