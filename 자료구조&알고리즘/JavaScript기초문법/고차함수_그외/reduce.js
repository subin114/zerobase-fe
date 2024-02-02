/*
요소 별 함수 수행 누적 결과 값 반환 : Array.reduce(function(accumulator, item, index, array){})
accumulator : 이전 함수 결과(initial로 초기값 설정 가능),  item : 배열 요소,  index : 배열 위치,  array : 배열

accumulator : 이전 함수 결과값이 누적돼서 저장됨
*/

let nums = [1, 2, 3, 4, 5];
let call_count = 0;

console.log("result\tvalue\tindex");
let sum = nums.reduce(function (accumulator, item, index, array) {
  console.log(accumulator, "\t\t", item, "\t\t", index);
  call_count++;
  return accumulator + item;
}, 0);   // initial 없다면 index 1부터 시작
/*
result	value	index
0 		 1 		 0
1 		 2 		 1
3 		 3 		 2
6 		 4 		 3
10 		 5 		 4
*/


console.log(call_count);   // 5
console.log(sum);          // 15