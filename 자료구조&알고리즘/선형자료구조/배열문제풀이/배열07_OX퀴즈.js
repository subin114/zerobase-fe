/* 
네카라쿠배 대학교에서 OX 퀴즈 쇼를 진행한다.
정답을 맞췄을 경우 문제당 1점을 부여하며, 연속적으로 맞출 경우 연속한 정답 개수 만큼의 가산점을 부여해준다.
진행자를 위해 채점표를 보고 점수를 산출해주는 프로그램을 제작해주자.
배열 형태의 채점 값이 1(정답), 0(오답)으로 입력되며, 점수의 합계를 반환한다.
*/

/* user code */
function answer(mark) {
  let result = 0;

  // 1 -> 1점, 연속한 1인 경우 연속한 count 만큼 점수 추가
  let score = 0; // 누적

  for (let i = 0; i < mark.length; i++) {
    if (mark[i] === 1) {
      result += ++score;
    } else {
      score = 0;
    }
  }

  /*
  0 -> 1 : result(1), score(1)
  1 -> 0 : result(0), score(0)
  2 -> 1 : result(2), score(1)
  3 -> 1 : result(4), score(2)
  4 -> 1 : result(7), score(3)
  5 -> 0 : result(7), score(0)
  6 -> 1 : result(8), score(1)
  7 -> 1 : result(10), score(2)
  */

  return result;
}

/* main code */
let input = [
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
