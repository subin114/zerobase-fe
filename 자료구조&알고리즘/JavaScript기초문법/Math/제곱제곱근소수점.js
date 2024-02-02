/*
제곱 : Math.pow(x, y),  제곱근 : Math.sqrt(x)
소수점 이하 반올림 정수 : Math.round(x)
소수점 이하 올림 : Math.ceil(x),  소수점 이하 내림 : Math.floor(x)
*/

/* 1. pow */
console.log(Math.pow(2, 3));  // 8
console.log(2 ** 3);          // 8

/* 2. sqrt */
console.log(Math.sqrt(4));    // 2
console.log(Math.sqrt(2));    // 1.4142135623730951

/* 3. round, ceil, floor */
console.log(Math.round(3.5));    // 4
console.log(Math.round(-2.3));   // -2
console.log(Math.round(-2.7));   // -3

console.log(Math.ceil(3.5));     // 4
console.log(Math.ceil(-2.3));    // -2
console.log(Math.ceil(-2.7));    // -2

console.log(Math.floor(3.7));    // 3
console.log(Math.floor(-2.3));   // -3
console.log(Math.floor(-2.7));   // -3