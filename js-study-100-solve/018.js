// No.18 Star pattern 5

/*
아래와 같은 도형을 콘솔에 출력하는 함수를 구현한다.

    *
   ***
  *****
 *******
*********
*/

const star5 = n => {
  for (let i = 0; i < n; i++) {
    let star = ''

    // 공백 추가
    for (let j = n; j > i; j--) {
      star += ' '
    }

    // 별추가
    for (let k = 0; k < 2 * i + 1; k++) {
      star += '*'
    }

    console.log(star)
  }
}

star5(5)
