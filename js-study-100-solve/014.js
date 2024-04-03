// No.14 Star pattern 1

/*
아래와 같은 도형을 콘솔에 출력하는 함수를 구현한다.

 *
 **
 ***
 ****
 *****
*/

const star1 = (n) => {
  let res = "";

  for (let i = 1; i <= n; i++) {
    res += "*".repeat(i);

    if (i !== n) res += "\n";
  }

  return res;
};

/*
[다른 풀이]

const star1 = (n) => {
  let res = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      res += "*";
    }
    res += "\n";
  }

  return res;
}
*/

console.log(star1(5));
