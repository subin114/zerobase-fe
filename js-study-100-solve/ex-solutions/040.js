const solution = arr => {
  const stk = []

  for (let i = 0; i < arr.length; i++) {
    if (stk.at(-1) === arr[i]) stk.pop()
    else stk.push(arr[i])
  }

  return stk.length === 0 ? [-1] : stk
}

console.log(solution([0, 1, 1, 1, 0])) // [0, 1, 0]
console.log(solution([0, 1, 0, 1, 0])) // [0, 1, 0, 1, 0]
console.log(solution([0, 1, 1, 0])) // [-1]
