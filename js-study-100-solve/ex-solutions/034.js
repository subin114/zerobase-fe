// sort: O(nlogn)   -->   O(n) < O(nlogn) < O(n^2)    sort를 남발하지 말자 !!
const solution = nums => nums.toSorted((a, b) => a - b).splice(5)
// const solution = nums => [...nums].sort((a, b) => a - b).splice(5)

console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]))
// [15, 32, 38, 46, 56]
