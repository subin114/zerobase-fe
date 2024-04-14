// 02. in

/*
- JS에서 이미 존재하는 타입 검사 연산자
- 객체가 특정 속성을 가지고 있는지 검사해서 불리언으로 반환함
*/

interface Dog {
  name: string;
  bark(): "멍멍";
}

interface Cat {
  name: string;
  meow(): "냐옹";
}

function sayAnimal(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark();
    // animal.meow()  // error
  }

  if ("meow" in animal) {
    animal.meow();
  }
}
