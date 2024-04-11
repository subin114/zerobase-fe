// 02. 생성자

class Person1 {
  name: string;
  age: number;
  readonly location: string = "Korea";

  /*
  [생성자]
  - 초기화를 담당
  - 일종의 함수처럼 사용되는 것
  - 인자를 받을 수 있음
  - this는 생성될 인스턴스를 가리킴
  */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person1("Jang", 25);
console.log(p1);
/*
Person: {
  "location": "Korea",
  "name": "Jang",
  "age": 25
}
*/

const p2 = new Person1("Poco", 27);
console.log(p2);
/*
Person: {
  "location": "Korea",
  "name": "Poco",
  "age": 27
}
*/
