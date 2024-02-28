/* 아주 큰 숫자나 아주 작은 숫자를 표기하기 위해 지수 표기법(e)으로 0의 개수를 대체 표기 가능 */

let billion_1 = 1000000000;  // 10억
let billion_2 = 1e9;         // 1 + 0 9개
let us = 1e-6;               // micro sec, 왼쪽으로 6번 소수점 이동

console.log(billion_1);  // 1000000000
console.log(billion_2);  // 1000000000
console.log(us);         // 0.000001