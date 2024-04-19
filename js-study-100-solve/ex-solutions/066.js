const solution = str => str.trim().split(/\s+/g) // +기호를 붙이면 1개 이상을 뜻함
// const solution = str => str.split(' ').filter(Boolean)

console.log(solution(' i    love  you')) // ["i", "love", "you"]
console.log(solution('    programmers  ')) // ["programmers"]
