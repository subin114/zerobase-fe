// 06. super

/*
- 기본 클래스 호출 시 사용
- 생성자에서 this 사용 전 호출되어야 함
*/

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayName() {
    return `동물의 이름은 ${this.name}`;
  }
}

class Person4 extends Animal {
  constructor(name: string) {
    super(name);
  }

  sayName() {
    return `${super.sayName()} 사람의 이름은 ${this.name}`;
  }
}

const person = new Person4("Jang");
console.log(person.sayName()); // "동물의 이름은 Jang 사람의 이름은 Jang"
