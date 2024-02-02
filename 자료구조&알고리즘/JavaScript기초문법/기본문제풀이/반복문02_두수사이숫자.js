/*
Q. 두 수 사이의 숫자들을 출력하는 함수를 작성하시오.
입력은 두 숫자 값이 주어지며, 입력된 숫자를 포함한 두 수 사이의 자연수를 배열로 반환한다.
*/

function answer(x, y) {
  let result = [];

  if (x > y) {
    let t = x;  // 3 > 7     let t = 3
    x = y;      // x = 7
    y = t;      // y = 3

    // [x, y] = [y, x]
  }

  for (let i = x; i <= y; i++) {
    result.push(i);
  }

  return result;
}


/* main code */
let input = [ [3, 7], [8, 3], [12, 10] ];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}