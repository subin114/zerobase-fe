const solution = (array, n) => array.filter(num => num === n).length

// const solution = (array, n) => {
//   let count = 0

//   for (const num of array) {
//     if (num === n) count += 1
//   }

//   return count
// }

console.log(solution([1, 1, 2, 3, 4, 5], 1)) // 2
console.log(solution([0, 2, 3, 4], 1)) // 0

/*
map
[1, 2, 3] => [2, 4, 6] (transform)

filter
[1, 2, 3] => [1, 3]

reduce
[1, 2, 3] => 6
*/
