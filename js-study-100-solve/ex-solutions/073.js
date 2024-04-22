// const solution = (str, n) => Array.from({ length: Math.ceil(str.length / n) }, (_, i) => str.slice(i * n, (i + 1) * n))
const solution = (str, n) => str.match(new RegExp(`.{1,${n}}`, 'g'))
//  /.{1,6}/g   => 어떤 문자든 상관없이(= .) 1이상 6이하를 매칭해서 찾아라

console.log(solution('abc1Addfggg4556b', 6)) // ["abc1Ad", "dfggg4", "556b"]
console.log(solution('abcdef123', 3)) // ["abc", "def", "123"]
