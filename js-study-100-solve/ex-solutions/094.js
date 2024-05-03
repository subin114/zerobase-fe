const solution = nums => {
  // 사전
  const dictionary = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }

  // Object => array
  for (const [key, val] of Object.entries(dictionary)) {
    nums = nums.replace(key, val)
  }

  return nums
}

console.log(solution('onetwothreefourfivesixseveneightnine')) // 123456789
console.log(solution('onefourzerosixseven')) // 14067
