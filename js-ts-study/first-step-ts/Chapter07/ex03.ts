// 03. public, protected, private 지정자

/*
- 접근 제한자
- 클래스 내부의 특정 메서드나 프로퍼티를 클래스 외부에서 컨트롤할 수 있는지를 제어

public : 어디서나 접근 가능 (default 값)
protected : 상속받은 하위클래스까지만 접근 가능, 외부에서는 불가능
private : 선언한 클래스 내에서만 접근 가능 (외부 혹은 하위클래스에서 불가능)

*/

class User2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  public sayHi() {
    alert(this.name);
  }
}

class Student1 extends User2 {
  sayBye() {
    this.sayHi();
  }
}

let user2 = new User2("John");
user2.sayHi();
