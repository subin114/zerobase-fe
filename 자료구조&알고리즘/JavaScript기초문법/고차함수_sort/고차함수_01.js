/* sort() 함수의 매개변수로 함수를 넣어 고차함수를 이용한 정렬 수행 가능 */

// [ before ]
let nums = [1, -1, 4, 0, 2, 3, 10, 20, 12];
console.log(nums.sort());      // [-1, 0, 1, 10, 12, 2, 20, 3, 4]
console.log(nums.reverse());   // [4, 3, 20, 2, 12, 10, 1, 0, -1]


// [ after ]   
let ascending_order = function (x, y) { return x - y; }  // 0보다 큰 값으로 반환될 때 x와 y의 자리가 바뀜
let descending_order = function (x, y) { return y - x; }

console.log(nums.sort(ascending_order));    // [-1, 0, 1, 4, 10, 12, 20]
console.log(nums.sort(descending_order));   // [20, 12, 10, 4, 1, 0, -1]