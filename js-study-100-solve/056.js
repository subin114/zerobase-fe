// No.56 접미사 배열

/*
어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다.
예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.

문자열 str이 매개변수로 주어질 때,
str의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
*/

const solution = str => Array.from({ length: str.length }, (_, i) => str.substring(i)).sort()

console.log(solution('banana')) // ['a', 'ana', 'anana', 'banana', 'na', 'nana']
console.log(solution('programmers')) // ['ammers', 'ers', 'grammers', 'mers', 'mmers', 'ogrammers', 'programmers', 'rammers', 'rogrammers', 'rs', 's']
