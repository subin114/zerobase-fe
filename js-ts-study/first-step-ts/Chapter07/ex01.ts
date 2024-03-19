// 01. 클래스

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }
}

let user = new User("John");
user.sayHi();
