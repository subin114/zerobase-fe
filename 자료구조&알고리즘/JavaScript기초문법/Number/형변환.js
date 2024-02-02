/*
[ 형 변환 ]
Number to String : Number.toString(), String(Number), Number+"" 를 통해 변환 가능
*/

let us = 1e-6;
console.log(us.toString());         // string
console.log(typeof us.toString());  // string
console.log(typeof String(us));     // string
console.log(typeof (us + ""));     // string


/*
[ 자리 수 표현 ]
소수의 자리 수 길이를 제한 : Number.toFixed(pos)
정수와 소수의 자리 수를 합한 길이로 제한 : Number.toPrecision(pos)
*/

let num_1 = 125.0;
let num_2 = 123.456;
console.log(num_1 - num_2);     // 1.54399999999997
console.log((num_1 - num_2).toFixed(3));       // 1.544
console.log((num_1 - num_2).toPrecision(3));   // 1.54


/*
[ Number 자료형 확인 ]
부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값(NaN)인지 확인 : Number.isNaN()
정상적인 유한수인지 확인 : Number.isFinite()
*/
console.log(!Number.isNaN(0.123));           // true
console.log(!Number.isNaN(123 / "hello"));   // false
console.log(Number.isFinite(-123));          // true
console.log(Number.isFinite(Infinity));      // true
console.log(Number.isFinite("hello"));       // false


/*
[ 정수와 실수형 변환 ]
정수로 변환하는 방법(N 진수로 명시적 변환도 가능) : Number.parseInt()
실수로 변환하는 방법 : Number.parseFloat()
*/
console.log(Number.parseInt("125px"));      // 125
console.log(Number.parseFloat("1.25em"));   // 1.25
console.log(Number.parseInt("1.25em"));     // 1
console.log(Number.parseInt("t123"));       // NaN
console.log(Number.parseInt("0f", 16));     // 15