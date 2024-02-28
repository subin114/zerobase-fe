console.log(Number.MAX_VALUE);   // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);   // 5e-324

console.log(Number.MAX_SAFE_INTEGER);   // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);   // -9007199254740991

console.log(Number.POSITIVE_INFINITY);  // Infinity
console.log(Number.NEGATIVE_INFINITY);  // -Infinity

console.log(Number.NaN);  // NaN
console.log(NaN);         // NaN



/*
Number 상수 값
- 지수로 표기되는 양수 최대/최소 값 : Number.MAX_VALUE, Number.MIN_VALUE
- 안전하게 표기되는 최대(양수)/최소(음수) 값 : Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER
- 무한대 양수/음수 값 : Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY
- 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값으로 해석될 수 있는 숫자 데이터 유형 : Number.NaN
*/