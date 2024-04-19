const solution = str => [...str.toLowerCase()].sort().join('')

console.log(solution('Bcad')) // "abcd"
console.log(solution('heLLo')) // "ehllo"
console.log(solution('Python')) // "hnopty"
