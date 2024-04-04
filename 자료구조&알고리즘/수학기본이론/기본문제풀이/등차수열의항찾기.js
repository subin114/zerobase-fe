/*
입력된 값을 통해서 등차 수열의 몇 번째 항인지를 구하는 프로그램을 작성하시오.
입력은 초항 a, 인접한 차이 d, 찾는 항의 수 n이 주어지며, n 값에 해당하는 항 번호를 반환한다.
단, 만약 항 번호가 없을 시에는 -1을 반환한다.

예를 들어 a = 1, d = 2, n = 7이 주어졌을 때
f(1) = 1, f(2) = 3, f(3) = 5, f(4) = 7이 되므로 n = 7에 해당하는 항인 4를 반환한다.
*/

/* user code */
const answer = (a, d, n) => {
  let index = -1;

  if ((n - a) % d === 0) {
    index = (n - a) / d + 1; // +1은 초항 때문에 더해준 것임
  } else index - 1;

  // 1, 3, 5, 7
  // (7 - 1) => 6 % 2 === 0

  return index;
};

/* main code */
let input = [
  [1, 2, 7],
  [2, 3, 10],
  [3, 5, 23],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
