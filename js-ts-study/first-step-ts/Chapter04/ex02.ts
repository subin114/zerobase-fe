// 02. 교차 타입 (&)

/*
자바스크립트의 AND 연산자 (&&)
ex. x && y

타입스크립트의 교차 타입(&)
ex. AType & BType

=> 교차 타입은 두 개의 타입을 합쳐서 새로운 타입을 만들어준다는 차이가 있음
*/

type Person = {
  name: string;
  age: number;
};

type Student = Person & {
  school: string;
};

const func2 = (student: Student) => {
  console.log(student.name);
};

// type SomeType = string & number;
// 위처럼 작성하면 SomeType이 never로 됨. 이렇게 작성하면 X
