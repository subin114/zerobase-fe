// Q. 두 정수를 입력 받아 가장 큰 값을 출력해주는 함수를 작성하시오.

// case 1
function MAX(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

// case 2
function MAX(x, y) {
  return x > y ? x : y;
}



console.log(MAX(0, 3));    // 3
console.log(MAX(-1, 5));   // 5
console.log(MAX(100, 7));  //100