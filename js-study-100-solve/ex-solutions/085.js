const sumOfDigits = n => {
  let sum = 0

  while (n > 0) {
    sum += n % 10 // 3, 2, 1
    n = Math.trunc(n / 10) // 123 => 12, 12 => 1, 1 => 0
  }

  return sum
}

console.log(sumOfDigits(1)) // 1
console.log(sumOfDigits(123)) // 6
console.log(sumOfDigits(1010)) // 2
console.log(sumOfDigits(54321)) // 15
