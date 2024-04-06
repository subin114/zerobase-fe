// No.14 Star pattern 1

/*
아래와 같은 도형을 콘솔에 출력하는 함수를 구현한다.

 *
 **
 ***
 ****
 *****
*/

// O(n^2)
const star1 = n => {
  for (let i = 1; i <= n; i++) {
    '*'.repeat(i)
  }
}

/*
// 1 + n + n = 2n + 1 (= O(2n + 1))
// 즉, 아래의 함수 복잡도는 O(n)

const star1 = (n) => {
  let res = "";

  for (let i = 0; i < n; i++) {
      res += "*";
      console.log(res)
  }
}
*/

star1(5)
