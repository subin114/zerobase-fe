// No.95 최빈값 구하기

/*
최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
정수 배열 nums가 매개변수로 주어질 때,
최빈값을 return 하도록 solution 함수를 완성해보세요.
최빈값이 여러 개면 -1을 return 합니다.
*/

const solution = nums => {
  let newArray = new Array(Math.max(...nums) + 1).fill(0)

  // nums 반복문을 통해, 해당 값에 해당하는 index의 값 += 1
  for (let i = 0; i < nums.length; i++) {
    newArray[nums[i]] += 1
  }

  // newArray의 최댓값에 해당 하는 index 출력
  // 만약 indexOf와 lastIndexOf가 지칭하는 값이 같으면, -1 출력 (중복인 경우 확인)
  if (newArray.indexOf(Math.max(...newArray)) !== newArray.lastIndexOf(Math.max(...newArray))) {
    return -1
  } else {
    return newArray.indexOf(Math.max(...newArray))
  }
}

console.log(solution([1, 2, 3, 3, 3, 4])) // 3
console.log(solution([1, 1, 2, 2])) // -1
console.log(solution([1])) // 1
