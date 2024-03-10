/*
every()
- 배열 내 모든 요소가 콜백 함수의 조건을 만족한다면 true, 아니면 false를 반환 (빈 배열일 경우 true)
- Array.every(function(item, index, array){}), item : 배열 요소, index : 배열 위치, array : 배열
*/

let users = [
  { name: "bob", age: 17, job: false },
  { name: "alice", age: 20, job: false },
  { name: "john", age: 27, job: true },
];

let some_job = users.every(function (user) {
  return user.job == false;
});
console.log(some_job); // false

let some_age = users.every(function (user) {
  return user.age < 16;
});
console.log(some_age); // true

let empty = [].every((item) => item > 16);
console.log(empty); // true
