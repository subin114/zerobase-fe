/*
업무 성과를 보상해주기 위해, 핸드폰을 가장 많이 판매한 종업원에게 인센티브를 부여하고자 한다.
핸드폰 판매 수량을 입력 받아서, 가장 많이 판매한 종업원 번호를 반환해주는 함수를 작성하시오.
입력은 배열 형태로 종업원 별 판매 수량 값이 주어지며, 가장 많이 판매한 번호를 반환한다.
가장 첫번째 번호는 1번이다.
*/


/* user code */
function answer(employee) {
  let employee_id;  // 최댓값의 인덱스를 저장하는 변수

  let max = 0;      // 최댓값을 저장하는 변수. 초기값은 0
  for (let i = 0; i < employee.length; i++) {
    if (employee[i] > max) {
      max = employee[i];     // 더 큰 값이 발견되면 최댓값을 업데이트
      employee_id = i + 1;   // 현재 인덱스 + 1로 employee_id를 업데이트 (인덱스는 0부터 시작하기 때문)
    }
  }

  return employee_id;   // 최댓값의 employee_id를 반환
}


/* main code */
let input = [
  [3, 7, 9, 6, 1],
  [2, 7, 1, 4, 3, 0, 5],
  [7, 5, 0, 1, 2, 12, 6],
]

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}