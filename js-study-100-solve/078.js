// No.78 sum matrix

/*
2차원 정수 배열 matrix가 주어지면 모든 요소의 합을 반환하는 함수를 구현한다.
*/

const sumMatrix = matrix => matrix.flat().reduce((acc, n) => acc + n, 0)

console.log(
  sumMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
) // 45
console.log(sumMatrix([])) // 0
