// 04. readonly 지정자

// constructor 외부에서 값 할당이 불가능하게 막음

class User3 {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayHi() {
    // this.name = "김개발"; // 읽기 전용 속성이기 때문에 name에 할당할 수 없어서 에러 발생함
    console.log(this.name);
  }
}

let user3 = new User3("John");
user3.sayHi();
