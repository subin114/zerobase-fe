/*
두 정수를 입력 받아 문자열 형태의 대소비교 부등호를 반환하는 함수를 작성하시오.
- 첫번째 수가 두번째 수보다 크면 >
- 첫번째 수가 두번째 수보다 작으면 <
- 첫번째 수와 두번째 수가 같으면 =
*/


/* user code */
function answer(x, y) {
  let result = "";

  if (x > y) {
    result = ">";
  } else if (x < y) {
    result = "<";
  } else if (x = y) {
    result = "=";
  }

  return result;
}


/* main code */
let input = [
  [3, 5],
  [7, 4],
  [2, 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}