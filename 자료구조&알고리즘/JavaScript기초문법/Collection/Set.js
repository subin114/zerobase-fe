/*
[ 요소 추가 & 삭제 ]
요소 추가 : Set.add(value),  요소 존재 여부 : Set.has(value),  요소 삭제 : Set.delete(value)
다양한 자료형을 value로 사용 가능하며, set.add 호출 시 set이 반환되므로 체이닝(chaining) 가능
*/

let set = new Set();                  // 빈 Set 객체 생성
let num = new Set([1, 2, 3, 4, 5]);   // 숫자로 이루어진 Set 객체 생성
let str = new Set("Hello!");          // 문자열로 이루어진 Set 객체 생성

console.log(set);             // Set(0) {}
console.log(num);             // Set(5) { 1, 2, 3, 4, 5 }
console.log(str);             // Set(5) { 'H', 'e', 'l', 'o', '!' }

// Set에 요소 추가
set.add(1).add(1).add(10).add(20);
console.log(set);             // Set(3) { 1, 10, 20 }

// Set에서 요소 존재 여부 확인
console.log(set.has(10));     // true
console.log(set.has(2));      // false

// Set에서 요소 삭제
set.delete(1);
set.delete(-1);
console.log(set);             // Set(2) { 10, 20 }