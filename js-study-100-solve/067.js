// No.67 인덱스 바꾸기
// prettier-ignore

/*
문자열 str과 정수 num1, num2가 매개변수로 주어질 때,
str에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
*/

const solution = (str, num1, num2) => {
  const arr = str.split('')
  [arr[num1], arr[num2]] = [arr[num2], arr[num1]]

  return arr.join('')
}

console.log(solution('hello', 1, 2)) // 'hlelo'
console.log(solution('I love you', 3, 6)) // 'I l veoyou'
