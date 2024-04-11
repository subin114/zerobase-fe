// 01. interface 소개

/*
- JS에서는 존재하지 X
- 객체의 타입을 정의하고 생김새를 가지도록 할 수 있음
- TS에서의 클래스 기능은 C#에서 유래된 것이 많음
- 일부 기능은 TS에서만 존재하는 고유 문법으로 컴파일 후에 사라짐
- extends가 아닌 implements 키워드로 구현함

[interface]
- 정의
- 설계

[implements]
- 구현
*/

interface Person {
  name: string;
  age: number;
}

const jang: Person = {
  name: "Jang",
  age: 99,
};
