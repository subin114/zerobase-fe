/*
자바스크립트에서 배열은 다른 언어에서 말하는 일반적인 배열이 아닌 Hash 기반의 객체
메모리가 연속적인 밀집 배열(dense array)가 아닌 비연속적인 희소 배열(sparse array)
*/

let nums = [];

nums.push("one");
nums.push("two");
console.log(nums.length);   // 2
console.log(nums);          // ['one', 'two']

nums["once"] = "once";
nums["twice"] = "twice";
console.log(nums.length);   
// 2    문자열 키를 사용하여 배열 객체에 속성을 추가하게 되면 length 속성은 숫자 인덱스만 고려하기 때문에 4가 아니라 2가 출력됨
console.log(nums);          // ['one', 'two', once: 'once', twice: 'tiwce']

console.log(Object.getOwnPropertyDescriptors(nums));
/*
{
  '0': { value: 'one',writable: true, enumerable: true, configurable: true },
  '1': { value: 'two', writable: true, enumerable: true, configurable: true },
  length: { value: 2, writable: true, enumerable: false, configurable: false },
  once: { value: 'once', writable: true, enumerable: true, configurable: true },
  twice: { value: 'twice', writable: true, enumerable: true, configurable: true }
}
*/