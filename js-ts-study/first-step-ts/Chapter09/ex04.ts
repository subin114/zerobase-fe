// 04. instanceof 사용하기

/*
object의 프로토타입 체인에 constructor.prototype이 존재하는지 판별함
- object : 판별할 객체
- constructor : 판별 목표 함수

작성 방법 : object instanceof constructor
*/

// ex01
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const hello = new User("hello");

console.log(hello instanceof User); // true
console.log(typeof hello); // object
console.log(hello instanceof Object); // true

// ex02
const arr = [1, 2, 3];

console.log(arr instanceof Array); // true
console.log(typeof arr); // object

// ex03
class User1 {
  id = 100;
  name = "user";
}

class Staff {
  staffId = 200;
  name = "staff";
}

function getId(arg: User1 | Staff) {
  if (arg instanceof User1) {
    console.log(arg.id);
  } else {
    console.log(arg.staffId);
  }
  console.log(arg.name);
}
