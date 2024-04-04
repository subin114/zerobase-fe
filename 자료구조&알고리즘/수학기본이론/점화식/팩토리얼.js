// F(n) = F(n - 1) * n

let result;

function recursive(number) {
  if (number === 1) {
    return number;
  }

  return recursive(number - 1) * number;
}

// number: 5  recursive(4) * 5
// number: 4  recursive(3) * 4
// number: 3  recursive(2) * 3
// number: 2  recursive(1) * 2
// number: 1  if => 1

// number: 2  1 * 2 = 2
// number: 3  1 * 2 * 3 = 6
// number: 4  1 * 2 * 3 * 4 = 24
// number: 5  1 * 2 * 3 * 4 * 5 = 120

result = recursive(5); // 5! => 5 * 4 * 3 * 2 * 1
console.log(result); // 120
