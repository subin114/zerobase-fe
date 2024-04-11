// 04. getter setter

/*
- 필드에 접근할 권한을 가진 제어자
- getter O / setter X => 속성은 자동으로 읽기 전용
- setter 매개변수 타입 X => getter의 반화나 타입에서 추론
- private 속성은 .연산자로 접근할 수 X
*/

class Person3 {
  name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
  }

  get age() {
    if (this._age === 0) {
      return "설정되지 않았습니다.";
    }

    return `나이는 ${this._age}세로 추정됩니다.`;
  }

  set age(age) {
    if (typeof age === "number") {
      this._age = age;
    }

    this._age = 0;
  }
}

const p5 = new Person3("Jang", 25);
console.log(p5.age); // "나이는 25세로 추정됩니다."
console.log(p5.name); // "Jang"
