// No.19 Star pattern 6

/*
아래와 같은 도형을 콘솔에 출력하는 함수를 구현한다.

*********
 *******
  *****
   ***
    *
*/

const star6 = n => {
  for (let i = n; i > 0; i--) {
    console.log(' '.repeat(n - i) + '*'.repeat(i * 2 - 1))
  }
}

star6(5)
