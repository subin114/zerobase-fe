// No.48 첫 번째로 나오는 음수

/*
정수 리스트 nums가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요.
음수가 없다면 -1을 return합니다.
*/

const solution = nums => {
  const res = nums.findIndex(n => n < 0)
  return res !== -1 ? res : -1
}

console.log(solution([12, 4, 15, 46, 38, -2, 15])) // 5
console.log(solution([13, 22, 53, 24, 15, 6])) // -1
