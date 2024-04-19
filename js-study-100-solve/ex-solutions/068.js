const solution = str =>
  [...str]
    .filter(c => Number.isInteger(+c))
    .map(Number)
    .sort()

console.log(solution('hi12392')) // [1, 2, 2, 3, 9]
console.log(solution('p2o4i8gj2')) // [2, 2, 4, 8]
console.log(solution('abcde0')) // [0]
