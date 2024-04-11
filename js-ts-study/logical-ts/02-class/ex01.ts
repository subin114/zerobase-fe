// 01. 클래스 소개

class Person {
  /*
  [필드]
  - 일종의 속성
  - public으로 사용가능
  */
  name: string;
  age: number;
  readonly location: string = "Korea"; // readonly를 사용함으로써 수정 불가능해짐 (=읽기 전용)
}

/*
[인스턴스]
- 클래스에서 파생된 고유한 것
- 실제로 생성된 후 메모리에 올라감
*/
const p = new Person(); // 클래스를 인스턴스화 한 것
