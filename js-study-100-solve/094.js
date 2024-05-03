// No.94 영어가 싫어요

/*
영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
문자열 nums가 매개변수로 주어질 때,
nums를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
*/

const solution = nums => {
  const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  arr.forEach((v, i) => (nums = nums.replaceAll(v, i)))

  return +nums
}

console.log(solution('onetwothreefourfivesixseveneightnine')) // 123456789
console.log(solution('onefourzerosixseven')) // 14067
