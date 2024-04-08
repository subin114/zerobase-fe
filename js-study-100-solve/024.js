// No.24 n부터 m까지의 합

/*
양수 n, m이 주어지면 n부터 m까지 자연수의 합을 반환하는 함수를 구현한다.

- n > m 이면 0을 반환한다.
- n = m 이면 n 또는 m을 반환한다.
*/

const sum = (n, m) => {
  let totalSum = 0

  if (n > m) return 0
  else if (n === m) return n

  for (let i = n; i <= m; i++) {
    totalSum += i
  }

  return totalSum
}

console.log(sum(3, 8)) // 33
console.log(sum(3, 3)) // 3
console.log(sum(3, 2)) // 0
