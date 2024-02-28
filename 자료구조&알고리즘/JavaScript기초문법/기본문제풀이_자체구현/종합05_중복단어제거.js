/*
중복 단어를 제거해주는 함수를 구현하시오.
입력 값은 배열 형태로 요소들은 문자형이 입력되고, 중복 단어가 제거된 배열을 반환합니다.
*/


/* user code */
function answer(arr) {
  let new_arr = Array.from(new Set(arr));
  // Set은 새로운 객체를 생성하는 것이기 때문에 객체에서 배열로 변환해주는 Array.from을 작성해줌

  return new_arr;
}


/* main code */
let input = [
  ["john", "alice", "alice"],
  ["Helio", "hello", "HELLO", "hello"],
  ["kiwi", "banana", "mango", "kiwi", "banana"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}