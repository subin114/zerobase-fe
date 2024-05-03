// No.97 피보나치 수

/*
피보나치 수는 F(0) = 0, F(1) = 1일 때,
1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

예를들어

- F(2) = F(0) + F(1) = 0 + 1 = 1
- F(3) = F(1) + F(2) = 1 + 1 = 2
- F(4) = F(2) + F(3) = 1 + 2 = 3
- F(5) = F(3) + F(4) = 2 + 3 = 5

와 같이 이어집니다.

2 이상의 n이 입력되었을 때,
n번째 피보나치 수를 리턴하는 함수, solution을 완성해 주세요.
*/

const fib = n => (n === 1 || n === 0 ? n : fib(n - 1) + fib(n - 2))

console.log(fib(0)) // 0
console.log(fib(3)) // 2
console.log(fib(5)) // 5
console.log(fib(7)) // 13
console.log(fib(10)) // 55
console.log(fib(30)) // 832040
