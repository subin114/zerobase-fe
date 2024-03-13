// 06. Symbol 타입

/* 
Symbol 타입
- ES6에 새롭게 추가된, number나 string과 같은 기본 데이터 타입 (원시 타입)
- 변경 불가능한 유일한 값
- 객체에서 많이 사용
*/

let value3: number = 10;

let sym1 = Symbol();
let sym2 = Symbol("hello");
let sym3 = Symbol("hello");

let obj = {
  name: "kim",
  [sym1]: "value",
};

console.log(sym2 === sym3); // false
console.log(sym2); // "symbol"

console.log(obj.name); // "kim"
console.log(obj["name"]); // "kim"
console.log(obj[sym1]); // "value"
