/* 0과 1 사이의 난수 랜덤 값 : Math.random() */

/* ----------- 1. Math property ----------- */
console.log(Math.E);   // 2.718281828459045
console.log(Math.PI);  // 3.141592653589793


/* ----------- 2. Random ----------- */
for (let i = 0; i < 3; i++) {
  console.log(Math.random());
}
/*
0.8817051268252609
0.5468782570111748
0.20352486971633033
이렇게 동일한 코드지만 0 ~ 1 사이의 난수이기 때문에 각각 다른 값이 출력됨
*/

console.log(Number.parseInt(Math.random() * 1000));  // 정수로 랜덤 값 출력됨




for (let i = 0; i < 3; i++) {
  console.log(Number.parseInt(Math.random() * 10));
}
/*
3
8
1
*/