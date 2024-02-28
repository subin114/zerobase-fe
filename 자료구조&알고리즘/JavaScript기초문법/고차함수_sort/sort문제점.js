/*
sort() 문제점 : 일의 자리 4가 10의 자리보다 뒤쪽에 정렬
원인 : sort()로 정렬될 때 배열의 요소가 일시적으로 문자열로 변경되어 발생
*/

let nums = [1, -1, 4, 0, 2, 3, 10, 20, 12];
console.log(nums.sort());      // [-1, 0, 1, 10, 12, 2, 20, 3, 4]
console.log(nums.reverse());   // [4, 3, 20, 2, 12, 10, 1, 0, -1]


/*
한계점 : 대소문자 구분 없이 정렬하고 싶지만, 대소문자 구분되어 정렬
*/

let fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort());      // ['Orange', 'apple', 'melon', 'orange']
console.log(fruits.reverse());   // ['orange', 'melon', 'apple', 'Orange']