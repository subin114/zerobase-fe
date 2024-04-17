const solution = (str, s, e) => str.slice(0, s) + [...str.slice(s, e + 1)].reverse().join('') + str.slice(e + 1)

console.log(solution('Progra21Sremm3', 6, 12)) // 'ProgrammerS123'
console.log(solution('Stanley1yelnatS', 4, 10)) // 'Stanley1yelnatS'
