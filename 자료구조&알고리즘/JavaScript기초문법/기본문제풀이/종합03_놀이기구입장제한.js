/*
본 놀이기구는 안전상의 이유로 키 150cm 이상만 탈 수 있다.
탑승하려는 고객이 놀이기구를 탈 수 있는지 판단하는 함수를 구현하시오.
입력 값은 객체로 이름/나이/키가 입력되며, 출력 값은 탑승가능 시 true, 불가능 시 false를 반환한다.
*/


/* user code */
function answer(user) {
  let permit;

  permit = user.height >= 150;


  // if (user.height >= 150) permit = true;
  // else permit = false;

  return permit;
}


/* main code */
let input = [
  { name: "john", age: 27, height: 181 },
  { name: "alice", age: 12, height: 148 },
  { name: "bob", age: 14, height: 156 },
];

for (let i = 0; i < input.length; i++) {
  console.log( `#${i + 1} ${answer(input[i])}` );
}