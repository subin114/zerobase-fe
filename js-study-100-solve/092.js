// No.92 한 번만 등장한 문자

/*
문자열 str이 매개변수로 주어집니다.
str에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
*/

const solution = str =>
  [...new Set(str)]
    .filter(c => str.indexOf(c) === str.lastIndexOf(c))
    .sort()
    .join('')

console.log(solution('abcabcadc')) // "d"
console.log(solution('abdc')) // "abcd"
console.log(solution('hello')) // "eho"
