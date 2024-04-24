const solution = num => Number(BigInt(num) % 9n)
// BigInt를 숫자로 바꾸려면 명시적으로 Number를 작성해줘야 함.

console.log(solution('123')) // 6
console.log(solution('78720646226947352489')) // 2
