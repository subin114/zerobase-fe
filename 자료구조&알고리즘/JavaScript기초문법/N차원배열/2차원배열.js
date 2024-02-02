/* 2차원 배열은 array[N][M]으로 접근하며, 배열 전체를 push(), pop() 가능 */

let array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

console.log(array);             // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 301, 302, 303 ] ]
console.log(array[0]);          // [ 101, 102, 103 ]
console.log(array[1][0]);       // 201
console.log(array[2][2]);       // 303

let arr_2 = array.pop();
console.log(array.length);      // 2
console.log(arr_2);             // [ 301, 302, 303 ]     pop 메서드를 사용하면 배열에서 제거된 요소가 반환되기 때문에 제거된 배열이 저장됨
console.log(array);             // [ [ 101, 102, 103 ], [ 201, 202, 203 ] ]

let array_num = array.push([401, 402, 403]);
console.log(array.length);      // 3
console.log(array_num);         // 3     push 메서드가 반환하는 배열의 길이가 저장되기 때문에 배열이 아니라 숫자가 출력됨
console.log(array);             // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ]