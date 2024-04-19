const solution = str => str.split('x').map(c => c.length)

console.log(solution('oxooxoxxox')) // [1, 2, 1, 0, 1, 0]
console.log(solution('xabcxdefxghi')) // [0, 3, 3, 3]
