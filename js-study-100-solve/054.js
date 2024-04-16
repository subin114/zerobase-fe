// No.54 문자열 겹쳐쓰기

/*
문자열 str, overwriteStr과 정수 s가 주어집니다.
문자열 str의 인덱스 s부터 overwriteStr의 길이만큼을 문자열 overwriteStr으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
*/

const solution = (str, overwriteStr, s) => str.slice(0, s) + overwriteStr + str.slice(s + overwriteStr.length)

console.log(solution('He11oWor1d', 'lloWorl', 2)) // 'HelloWorld'
console.log(solution('Program29b8UYP', 'merS123', 7)) // 'ProgrammerS123'
