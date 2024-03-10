let input = ["a", "b", "c"];
let count = 0;

// arr = 배열, s = 시작할 위치, r = 몇 개를 뽑을지
function permutation(arr, s, r) {
  // 1. 재귀함수를 멈춰야 할 조건
  if (s == r) {
    count++;
    console.log(arr.join(" "));
    return;
  }

  // 2. 재귀를 돌면서 변경되어야 될 부분 (= 메인로직)
  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]]; // swap
    permutation(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]]; // 원상복귀
    /*
    s = 0, r = 2         ["a", ]
    s = 1, r = 2, i = 1  ["a", "b", ]
    s = 2, r = 2         ["a", "b", "c"]
    ...
    s = 1, r = 2, i = 2  ["a", "c", ]
    s = 2, r = 2         ["a", "c", "b"]
    s = 1, r = 2, i = 2  ["a", "b", ]
    ...
    s = 0, r = 2, i = 1  ["b", "a", "c"]
    ...
    s = 0, r = 2, i = 2 ["a", ]
    */
  }
}

permutation(input, 0, 2);
console.log(count);
