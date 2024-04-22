const solution = (str, part) => str.slice(0, str.lastIndexOf(part)) + part

console.log(solution('AbCdEFG', 'dE')) // 'AbCdE'
console.log(solution('AAAAaaaa', 'a')) // 'AAAAaaaa'
