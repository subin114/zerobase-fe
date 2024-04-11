// 02. implements

/*
- interface의 설계를 구현함
*/

interface Animal {
  name: string;
  run(): string;
}

interface Person1 {
  sayName(): string;
}

class AnyClass {}

class Jang extends AnyClass implements Animal, Person1 {
  constructor(public name: string) {
    super();
  }

  run() {
    return this.name;
  }

  sayName() {
    return `사람의 이름은 ${this.name}`;
  }
}
