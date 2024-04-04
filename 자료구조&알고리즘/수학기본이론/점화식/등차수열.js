// F(n) = F(n - 1) + a

let result;

// s: 초기값, t: 간격, number: 반복횟수
function recursive(s, t, number) {
  // 멈출 조건
  if (number === 1) {
    return s;
  }

  // 반복할 코드
  return recursive(s, t, number - 1) + t;
}

// number: 5  recursive(s, t, 4) + 2
// number: 4  recursive(s, t, 3) + 2
// number: 3  recursive(s, t, 2) + 2
// number: 2  recursive(s, t, 1) + 2
// number: 1  if => 3

// number: 2  3 + 2 = 5
// number: 3  5 + 2 = 7
// number: 4  7 + 2 = 9
// number: 5  9 + 2 = 11

result = recursive(3, 2, 5);
console.log(result); // 11
