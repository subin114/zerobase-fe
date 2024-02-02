/*
배열 요소 별 함수 호출 및 결과를 배열로 반환 : Array.map(function(item, index, array){})
item : 배열 요소,  index : 배열 위치,  array : 배열 
*/

// [ use for loop ]
let nums = [1, 2, 3, 4, 5];
let use_for_loop = [];
for (let i = 0; i < nums.length; i++) {
  use_for_loop.push(nums[i] * 2);
}
console.log(use_for_loop);   // [2, 4, 6, 8, 10]


// [ use map ]
let num = [1, 2, 3, 4, 5];
let use_map = nums.map(function(item) {
  return item * 2;
});
console.log(use_map);        // [2, 4, 6, 8, 10]