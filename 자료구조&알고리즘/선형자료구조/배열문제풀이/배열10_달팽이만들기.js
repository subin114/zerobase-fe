/*
조카를 잠재우기 위해 달팽이 모양으로 숫자를 하나씩 적어주는 프로그램이 필요하게 되었다.
이를 위해 정사각형 모양의 달팽이 2차원 배열을 그려주는 함수를 작성하시오.
입력한 크기의 정사각형으로, 아래 그림처럼 시계방향으로 돌면서 숫자를 채워 2차원 배열을 반환한다.
*/

/* user code */
function answer(length) {
  let result = [];

  // 1. result => 2차원 배열
  for (let i = 0; i < length; i++) {
    result[i] = [];
  }

  // 2. 패턴 기반으로 반복문 구현
  // 2-1. length 길이만큼 시작해서 숫자를 채워준다.
  // 2-2. length - i, 방향, 2회
  // 2-3. length === 0, 프로그램이 멈춘다

  let direction = 1;
  let x, y, num;
  x = y = num = 0;
  x--;
  while (1) {
    for (let i = 0; i < length; i++) {
      x += direction;
      result[y][x] = ++num;
    }

    length--;

    if (length === 0) break;

    for (let j = 0; j < length; j++) {
      y += direction;
      result[y][x] = ++num;
    }

    direction *= -1;
  }

  return result;
}

/* main code */
let input = [3, 5, 6];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
