/*
콜백함수의 조건을 만족하는 값을 배열로 반환 : Array.filter(function(item, index, array){})
item : 배열 요소,  index : 배열 위치,  array : 배열
*/

let users = [
  {name: "bob", age: 17, job: false},
  {name: "alice", age:20, job: false},
  {name: "john", age: 27, job: true},
];

let filter_job = users.filter(function (user) {
  return user.job == false;
});
console.log(filter_job);
/*
[
  { name: 'bob', age: 17, job: false },
  { name: 'alice', age: 20, job: false }
]
*/


let filter_age = users.filter(function (user) {
  return user.age > 19;
});
console.log(filter_age);
/*
[
  { name: 'alice', age: 20, job: false },
  { name: 'john', age: 27, job: true }
]
*/