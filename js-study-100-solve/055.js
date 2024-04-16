// No.55 문자열 곱하기

/*
문자열 str과 정수 k가 주어질 때,
str을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

const solution = (str, k) => str.repeat(k)

console.log(solution('string', 3)) // 'stringstringstring'
console.log(solution('love', 10)) // 'lovelovelovelovelovelovelovelovelovelove'
