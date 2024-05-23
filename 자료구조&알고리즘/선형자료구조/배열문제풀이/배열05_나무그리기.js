/*
조카가 나무 그리기를 어려워하고 있다. 어린 조카를 위해 나무를 그려주는 프로그램을 만들어주자.
자연수를 높이로 입력 받고 대칭형 형태로 나무 문자열을 만들어 반환한다.
각 행 별로 개행 문자(\n)를 넣어주면서 *을 찍으며 출력 값 형태로 나무를 그려준다.
*/

/* user code */
function answer(height) {
  let str = "\n";

  for (let i = 0; i < height; i++) {
    // 1. 공백 처리 " "
    for (let j = 0; j < height - i - 1; j++) {
      str += " ";
    }

    // 2. * 처리 "*" 2n + 1
    for (let j = 0; j < i * 2 + 1; j++) {
      str += "*";
    }

    // 3.개행문자 추가
    str += "\n";
  }

  return str;
}

/* main code */
let input = [3, 5, 7];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
