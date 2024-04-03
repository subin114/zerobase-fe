// No.15 Star pattern 2

/*
아래와 같은 도형을 콘솔에 출력하는 함수를 구현한다.

 *****
 ****
 ***
 **
 *
*/

const star2 = (n) => {
  let res = "";

  for (let i = n; i >= 1; i--) {
    res += "*".repeat(i);

    if (i !== 1) res += "\n";
  }

  return res;
};

/*
[다른 풀이]

const star2 = (n) => {
  let res = "";

  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      res += "*";
    }
    res += "\n";
  }

  return res;
};
*/

console.log(star2(5));
