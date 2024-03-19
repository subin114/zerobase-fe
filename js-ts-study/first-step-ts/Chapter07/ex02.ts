// 02. 클래스 상속

/*
- 상속을 통해 하위 클래스가 상위 클래스의 프로퍼티와 메서드를 상속받을 수 있다. (extends 키워드 사용)
- 상위 클래스의 생성자(constructor)의 호출을 하기 위해 하위 클래스의 생성자에서 super() 메서드를 사용해야 한다.
*/

class User1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }
}

class Student extends User1 {
  level: number;
  constructor(name: string, level: number) {
    super(name);
    this.level = level;
  }
  study() {
    console.log(this.name + " 학생 공부해!");
  }
  sayLevel() {
    console.log(this.name + "은 레벨" + this.level);
  }
}

const student = new Student("김개발", 3);
student.sayLevel();
