const solution = (str, overwriteStr, s) => str.slice(0, s) + overwriteStr + str.slice(s + overwriteStr.length)

console.log(solution('He11oWor1d', 'lloWorl', 2)) // 'HelloWorld'
console.log(solution('Program29b8UYP', 'merS123', 7)) // 'ProgrammerS123'
