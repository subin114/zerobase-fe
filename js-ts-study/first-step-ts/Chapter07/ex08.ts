// 08. 메서드 오버라이딩 (Overriding)

/*
- 상위클래스에서 정의됐던 메서드를 하위클래스에서 재정의하는 것
- 상위클래스에 동일한 이름의 메서드를 무시하고 하위클래스에서 재정의할 필요가 있을 때,
  추상클래스에서 정의한 추상메서드를 구현할 때 사용함
*/

class Person1 {
  sayHello() {
    console.log("Hello!");
  }
}

class Student4 extends Person1 {
  sayHello(name?: string) {
    if (name === undefined) {
      super.sayHello();
    } else {
      console.log("Hello, " + name);
    }
  }
}

const student1 = new Student4();
student1.sayHello("김개발"); // "Hello, 김개발"
