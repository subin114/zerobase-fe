// 07. 접근 제어자

/*
- 속성과 메서드에 접근을 제한할 수 있음
- 클래스 내부 구현 정보를 적당히 공개하여 일부분만 노출시킴
  * API와 비슷한 흉내를 낼 수 있음
  * 타입 시스템을 이용해 규칙을 강제할 수 있음

[제어자 종류]
- public : 어디서나 접근 가능 (기본값)
- protected : 해당 클래스와 서브 클래스에서만 접근 가능
- private : 해당 클래스의 인스턴스에서만 접근 가능
*/

class Person5 {
  public name: string;
  private age: number;
  protected gender: "M" | "F";

  constructor(name: string, age: number, gender: "M" | "F") {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  sayName() {
    return `이름은 ${this.name} 입니다`;
  }

  protected sayAge() {
    return `나이는 ${this.age} 입니다`;
  }

  private sayGender() {
    return `성별 타입은 ${this.gender} 입니다`;
  }
}

class Me extends Person5 {
  constructor(name: string, age: number, gender: "M" | "F") {
    super(name, age, gender);
  }

  sayInfo() {
    return `${super.sayName()} ${super.sayAge()}`;
  }
}

const p6 = new Person5("Jang", 25, "M");
