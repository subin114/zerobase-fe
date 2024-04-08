// No.16 Star pattern 3

/*
아래와 같은 도형을 콘솔에 출력하는 함수를 구현한다.

    *
   **
  ***
 ****
*****
*/

const star3 = n => {
  for (let i = 1; i <= n; i++) {
    let star = ''

    // 공백 추가
    for (let j = n - 1; j >= i; j--) {
      star += ' '
    }

    // 별 추가
    for (let k = 1; k <= i; k++) {
      star += '*'
    }

    console.log(star)
  }
}

star3(5)
