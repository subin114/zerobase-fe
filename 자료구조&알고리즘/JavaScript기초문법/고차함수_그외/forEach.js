/*
배열 요소 별 콜백함수 각각에 실행 : Array.forEach(function(item, index, array){})
item : 배열 요소,  index : 배열 위치,  array : 배열 
*/

// [ before ]
let nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);     // 1, 2, 3 
}

// [ after ]
let num = [1, 2, 3];
num.forEach(function (i) {
  console.log(i);           // 1, 2, 3 
});