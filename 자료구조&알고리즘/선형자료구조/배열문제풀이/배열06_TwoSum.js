/*
배열과 정수 값이 주어질 때, 배열 내 두 값을 합하여 정수 값을 만들 수 있도록 두 개의 index를 반환하는 함수를 작성하시오.
각 입력에 정확히 하나의 솔루션이 있다고 가정하고, 동일한 요소를 두 번 사용하지 않는다.
배열의 index는 오름차순으로 정렬하여 반환한다.
*/

/* user code */
function answer(nums, target) {
  // O(n^2)
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }

  // O(n)
  let map = {}; // key, value

  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] != undefined) {
      return [map[target - nums[i]], i];
    }

    map[nums[i]] = i; // map: { '2' : 0 } ...
  }
}

/* main code */
let input = [
  [[2, 7, 11, 15], 9],
  [[3, 2, 4], 6],
  [[3, 3], 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i][0], input[i][1]));
}
