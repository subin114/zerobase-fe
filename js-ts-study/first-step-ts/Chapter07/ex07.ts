// 07. 추상 클래스 (abstract Class)

/*
- 클래스, 클래스 메서드에 abstract 키워드를 사용해서 표현함
- 추상 메서드는 정의만 되어있고, 구현은 되어있지 않음
- 추상 클래스는 인스턴스를 만들 수 X
-  추상 클래스를 상속받은 하위 클래스에서 추상 클래스 내에 정의된 추상 메서드를 반드시 구현해야 함
*/

abstract class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

class Student3 extends Person {
  constructor(name: string) {
    super(name);
  }

  getName() {
    return this.name;
  }

  sayBye() {
    console.log("Bye!");
  }
}

const someone = new Student3("홍길동");
someone.printName(); // "Hello, 홍길동"
