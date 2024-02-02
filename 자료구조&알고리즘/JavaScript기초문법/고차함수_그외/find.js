/*
콜백함수의 조건을 만족하는, 단 하나의 값만 반환 : Array.find(function(item, index, array){})
item : 배열 요소,  index : 배열 위치,  array : 배열 
*/

let users = [
  {name: "bob", age: 17, job: false},
  {name: "alice", age:20, job: false},
  {name: "john", age: 27, job: true},
];

let find_job = users.find(function (user) {
  return user.job == false;
});
console.log(find_job);     // {name: 'bob', age: 17, job: false}

let find_age = users.find(function (user) {
  return user.age > 19;
});
console.log(find_age);     // {name: 'alice', age: 20, job: false}