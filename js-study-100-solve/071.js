// No.71 꼬리 문자열

/*
문자열들이 담긴 리스트가 주어졌을 때, 모든 문자열들을 순서대로 합친 문자열을 꼬리 문자열이라고 합니다.
꼬리 문자열을 만들 때 특정 문자열을 포함한 문자열은 제외시키려고 합니다.
예를 들어 문자열 리스트 ["abc", "def", "ghi"]가 있고 문자열 "ef"를 포함한 문자열은 제외하고 꼬리 문자열을 만들면 "abcghi"가 됩니다.

문자열 리스트 strList와 제외하려는 문자열 ex가 주어질 때,
strList에서 ex를 포함한 문자열을 제외하고 만든 꼬리 문자열을 return하도록 solution 함수를 완성해주세요.
*/

const solution = (strList, ex) => strList.filter(s => !s.includes(ex)).join('')

console.log(solution(['abc', 'def', 'ghi'], 'ef')) // 'abcghi'
console.log(solution(['abc', 'bbc', 'cbc'], 'c')) // ''
