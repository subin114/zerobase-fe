/*
식별자 명명규칙을 따르지 않는 객체의 프로퍼티 키는 .을 사용해서 접근할 수 없으며,
obj[]와 같이 대괄호로 접근할 수 있음
---> 유사배열객체 라고 함 (= 배열이 아닌데 배열처럼 사용하는 것)

[유사배열객체의 특징]
- length가 있어야 함
- 프로퍼티가 존재하거나 아님 하나도 존재하지 않아야 됨
  ex. {0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e'}
- 문자열은 배열처럼 동작함
*/

const solution = (l, r) => {
  const arr = Array.from({ length: r - l + 1 }, (_, i) => i + l).filter(
    n => [...(n + '')].every(c => c === '5' || c === '0')
    // (!/[^05]/g).test(n + '')
  )

  return arr.length === 0 ? [-1] : arr
}

console.log(solution(5, 555)) // [5, 50, 55, 500, 505, 550, 555]
console.log(solution(10, 20)) // [-1]
