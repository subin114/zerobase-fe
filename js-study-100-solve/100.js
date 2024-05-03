// No.100 3Sum

/*
정수 배열 nums가 주어지면 i != j, i != k, j != k, nums[i] + nums[j] + nums[k] == 0이 성립하는
모든 삼중항 [nums[i], nums[j], nums[k]]을 반환한다.

반환하는 삼중항에 중복된 요소가 포함되어서는 안된다.

예를 들어, nums = [-1,0,1,2,-1,-4]일 때, nums에 -1이 2개 존재하므로
nums[0] + nums[1] + nums[2] == 0가 성립하는 조합이 [[ -1, -1, 2 ], [ -1, 0, 1 ], [ -1, 0, 1 ]]처럼
3개 존재하지만 [ -1, 0, 1 ]이 중복되므로 [[ -1, -1, 2 ], [ -1, 0, 1 ]]을 반환해야 한다.
*/

const threeSum = nums => {
  // do something
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([-2, 0, 1, 1, 2])) // [[-2, 0, 2], [-2, 1, 1]]
console.log(threeSum([0, 1, 1])) // []
console.log(threeSum([0, 0, 0])) // [[0, 0, 0]]
