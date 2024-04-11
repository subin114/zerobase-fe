// 08. static

/*
- 클래스의 속성과 메서드를 new로 인스턴스화 하지 않고 호출할 수 있음
- 접근 제어자를 활용할 수 있음
- 몇 가지 정적 이름을 사용할 수 X
  * 클래스는 그 자체로 new로 호출할 수 있는 함수이기 때문
  * ex. function.name
*/

class StaticClass {
  private static type = "Type";

  static test() {
    return `static method()`;
  }

  static getType() {
    return this.type;
  }
}

console.log(StaticClass.test()); // "static method()"
console.log(StaticClass.getType()); // "Type"
