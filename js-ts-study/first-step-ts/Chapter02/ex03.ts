// 03. array, Tuple, Enum 타입

/*
Array 타입
- ex. string[], Array<string>

Tuple 타입
- 길이와 타입이 고정된 배열
- ex. [string, number, number]

enum 타입
- enumeration의 약자
- 이름이 있는 상수들이 열거되는 집합
*/

let user: [string, number, boolean] = ["hello", 10, true];
// user.push(100); <-- 이렇게 push를 사용하면 튜플을 사용한 의미가 X

enum BloodType {
  A = 100, // 100
  B = 200, // 200
  O, // 201
  AB, // 202
}

const myBloodType = BloodType.AB;
console.log(myBloodType); // 202
