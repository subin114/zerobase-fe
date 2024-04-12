// const solution = (arr, intervals) => intervals.flatMap(([s, e]) => arr.slice(s, e + 1))
// const solution = (arr, intervals) => intervals.map(([s, e]) => arr.slice(s, e + 1)).flat()

const solution = (arr, intervals) => {
  const [[s1, e1], [s2, e2]] = intervals

  return [...arr.slice(s1, e1 + 1), ...arr.slice(s2, e2 + 1)]
}

// prettier-ignore
console.log(solution([1, 2, 3, 4, 5], [[1, 3], [0, 4]]));
// [2, 3, 4, 1, 2, 3, 4, 5]
