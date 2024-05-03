const solution = emergency => {
  // [3, 76, 24] => [76, 24, 3] => Map {76 => 1, 24 => 2, 3 => 3}
  const sortedMap = new Map(emergency.toSorted((a, b) => b - a).map((n, i) => [n, i + 1]))

  // sortedMap의 순서가 emergency 순으로 유지되지 않는다.
  // 따라서 emergency를 다시 순회해야 한다.
  return emergency.map(n => sortedMap.get(n))
}

// const solution = emergency => {
//   // [3, 76, 24] => [76, 24, 3]
//   const sorted = emergency.toSorted((a, b) => b - a);
//   return emergency.map(n => sorted.indexOf(n) + 1);
// };

console.log(solution([3, 76, 24])) // [3, 1, 2]
console.log(solution([1, 2, 3, 4, 5, 6, 7])) // [7, 6, 5, 4, 3, 2, 1]
console.log(solution([30, 10, 23, 6, 100])) // [2, 4, 3, 5, 1]
