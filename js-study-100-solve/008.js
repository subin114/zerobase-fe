// No.8 swap

/*
2개 이상의 정수 요소를 가지는 배열과 2개의 인덱스를 전달받아 두 개의 요소값을 바꾼 배열을 반환하는 함수를 구현한다.
*/

const swap = (arr, i, j) => {
  arr.with(i, arr[j]).with(j, arr[i])

  // const copy = [...arr];
  // [copy[j], copy[i]] = [arr[i], arr[j]];
  // return copy;
}

const arr = [1, 2, 3, 4]
console.log(swap(arr, 1, 2)) // [1, 3, 2, 4]
