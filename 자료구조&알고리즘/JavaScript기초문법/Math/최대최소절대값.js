/*
최대값 : Math.max(...x),  최소값 : Math.min(...x),  절대값 : Math.abs(x)
배열을 인수로 받아 최대/최소를 산출하려면 apply 함수 혹은 스프레드 문법 사용 필요
*/

/* --------- 1. MAX / MIN --------- */
console.log(Math.max(1, -1));                  // 1
console.log(Math.min(1, -1));                  // -1
console.log(Math.max(1, -1, 5, 23, 17, -4));   // 23
console.log(Math.min(1, -1, 5, 23, 17, -4));   // 4

let nums = [1, -1, 5, 23, 17, -4];
// use apply  함수를 호출하는 메서드 중 하나로, 함수에 특정한 컨텍스트와 배열 형태의 인자들을 제공할 때 사용
// Math.max 함수를 호출하면서 nums 배열의 요소를 인자로 전달
console.log(`Max: ${Math.max.apply(null, nums)}`);   // Max: 23
console.log(`Min: ${Math.min.apply(null, nums)}`);   // Min: -4
// use spread
console.log(`Max: ${Math.max(...nums)}`);   // Max: 23
console.log(`Min: ${Math.min(...nums)}`);   // Min: -4

/* --------- 2. ABS --------- */
console.log(Math.abs(1));           // 1
console.log(Math.abs(-1));          // 1
console.log(Math.abs(-Infinity));   // Infinity