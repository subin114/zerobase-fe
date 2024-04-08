// No.20 Star pattern 7

/*
아래와 같은 도형을 콘솔에 출력하는 함수를 구현한다.

*****
*****
*****
*****
*****
*/

const star7 = n => {
  for (let i = 1; i <= n; i++) {
    let star = ''

    for (let j = 1; j <= n; j++) {
      star += '*'
    }

    console.log(star)
  }
}

star7(5)
