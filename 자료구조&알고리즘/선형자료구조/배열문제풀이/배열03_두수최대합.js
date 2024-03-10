/*
수열이 주어질 때, 이 중 두 개의 수를 선택하여 최대 합이 나올 수 있도록 프로그램을 제작하시오.
입력은 정수로 된 배열을 받고, 최대 합이 나올 수 있는 두 수를 배열 형태로 반환한다.
배열로 입력되는 정수는 10 ~ 20개 사이이며, 정수의 범위는 -20 ~ +20 사이의 값이 입력된다.
*/

/* user code */
function answer(nums) {
  let result = [];

  // result[0] <--- 첫번째 최대값, result[1] <--- 두번째 최대값
  result = nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]];

  // i = 2인 이유는 idx 0과 1을 초기값으로 줬기 때문
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > result[0]) {
      result[1] = result[0];
      result[0] = nums[i];
    } else if (nums[i] > result[1]) {
      result[1] = nums[i];
    }
  }

  return result;
}

/* main code */
let input = [
  [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9],
  [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19],
  [
    -15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18,
    14,
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
