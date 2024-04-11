// 10. 추상 클래스

/*
- abstract를 선언한 클래스로 직접 인스턴스화 될 수 없는 클래스
- 직접 인스턴스화 될 수 없지만, extends 후 파생된 클래스를 인스턴스화하도록 유도함
- 추상 클래스는 구현된 메서드를 포함시킬 수 있음
- abstract 선언한 메서드는 파생된 클래스에서 메서드를 구현해야 함
*/

abstract class Animal {
  // 선언된 메서드
  abstract hello(): string;

  // 구현된 메서드
  run() {
    return this.hello() + "run";
  }
}

// 직접 인스턴스가 될 수 없다
// const animal = new Animal();

class Person7 extends Animal {
  hello() {
    return "Person"; // 추상 클래스에서 string이라고 지정했기 때문에 문자열이 아닌 다른 것이 오면 에러 발생
  }
}

class Dog extends Animal {
  hello() {
    return "Dog";
  }
}

const person = new Person7();
console.log(person.hello()); // "Person"

const dog = new Dog();
console.log(dog.hello()); // "Dog"
