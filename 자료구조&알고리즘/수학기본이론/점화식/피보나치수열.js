// F(n) = F(n - 1) + F(n - 2)

let result;

function recursive(number) {
  if (number === 1 || number === 0) {
    return number;
  }

  return recursive(number - 1) + recursive(number - 2);
}

// number: 5  recursive(4) + recursive(3)
// number: 4  recursive(3) + recursive(2)
// number: 3  recursive(2) + recursive(1)
// number: 2  if => 1
// number: 1  if => 1

// number: 2  1
// number: 3  1 + 1 = 2
// number: 4  1 + 2 = 3
// number: 5  2 + 3 = 5

result = recursive(5);
console.log(result); // 5
