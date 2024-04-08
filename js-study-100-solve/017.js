// No.17 Star pattern 4

/*
아래와 같은 도형을 콘솔에 출력하는 함수를 구현한다.

*****
 ****
  ***
   **
    *
*/

const star4 = n => {
  for (let i = 0; i < n; i++) {
    let star = ''

    // 공백 추가
    for (let j = 0; j <= i; j++) {
      star += ' '
    }

    // 별 추가
    for (let k = n; k > i; k--) {
      star += '*'
    }

    console.log(star)
  }
}

star4(5)
