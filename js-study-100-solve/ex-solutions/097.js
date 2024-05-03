const fib = n => (n < 2 ? n : fib(n - 1) + fib(n - 2))

// const fib = n => {
//   if (n < 2) return n
//   let [a, b] = [0, 1]

//   for (let i = 2; i <= n; i++) {
//     ;[a, b] = [b, a + b]
//   }

//   return b
// }

console.log(fib(0)) // 0
console.log(fib(3)) // 2
console.log(fib(5)) // 5
console.log(fib(7)) // 13
console.log(fib(10)) // 55
console.log(fib(30)) // 832040
