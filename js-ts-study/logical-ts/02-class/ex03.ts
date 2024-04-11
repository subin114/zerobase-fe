// 03. 메서드

class Person2 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  /*
  [메서드]
  - 객체(클래스)에서는 행동을 뜻함
  */
  introduce(): string {
    return `${this.name}의 나이는 ${this.age}입니다.`;
  }
}

const p3 = new Person2("Jang", 25);
console.log(p3.introduce()); // "Jang의 나이는 25입니다."

const p4 = new Person2("Poco", 27);
console.log(p4.introduce()); // "Poco의 나이는 27입니다."
