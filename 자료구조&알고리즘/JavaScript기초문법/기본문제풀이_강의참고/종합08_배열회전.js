/*
배열을 입력 받아 순서를 역으로 만들어 반환해주는 함수를 구현하시오.
(* 본 문제는 reverse 함수를 이용하지 않고 반복문을 통해 구현해야 한다.)
입력은 배열 형태로 값은 정수형과 문자형으로 구성되어 있으며, 역으로 변환된 배열을 반환한다.
*/


/* user code */
function answer(str) {
  let reverse = [];

  // 첫번째 방법 - for문 식 자체부터 역으로 반환
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reverse.push(str[i]);
  // };

  // 두번째 방법 - unshift를 사용
  // for (let i = 0; i < str.length; i++) {
  //   reverse.unshift(str[i]);
  // };

  // 세번째 방법 - 배열의 길이의 반만 돌리기
  let tmp;
  for (let i = 0; i < str.length / 2; i++) {
    tmp = str[i];
    str[i] = str[str.length - 1 - i];
    str[str.length - 1 -i] = tmp;
    // 0: 1, 3: 4
    // [4 2 3 1]
    // 1: 2, 2: 3
    // [4 3 2 1]
  }
  reverse = str;

  return reverse;
}


/* main code */
let input = [
  [1, 2, 3, 4],
  [-1, 6, "hello", -15],
  ["apple", "banana", "mango"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}