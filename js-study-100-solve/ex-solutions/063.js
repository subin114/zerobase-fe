const solution = str => [...new Set(str)].join('')
// const solution = str => [...str].filter((c, i) => str.indexOf(c) === i).join('')

console.log(solution('people')) // 'peol'
console.log(solution('We are the world')) // 'We arthwold'
