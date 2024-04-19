const solution = nums => nums.join('').match(/7/g)?.length || 0

// const solution = nums => [...nums.join('')].filter(c => c === '7').length

console.log(solution([7, 77, 17])) // 4
console.log(solution([10, 29])) // 0
