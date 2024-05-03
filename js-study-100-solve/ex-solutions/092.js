const solution = str => {
  const hash = {}

  // 'abcabcadc' => {a: 3, b: 2, c: 3, d: 1}
  for (const c of str) {
    hash[c] = (hash[c] || 0) + 1
  }

  // {a: 3, b: 2, c: 3, d: 1} => [['a', 3], ['b', 2], ['c', 3], ['d', 1]]
  // => [['d', 1]] => ['d'] => ['d'] => 'd
  return Object.entries(hash)
    .filter(([, val]) => val === 1)
    .map(([key]) => key)
    .sort()
    .join('')
}

// const solution = str =>
//   [...str]
//     .filter(c => str.indexOf(c) === str.lastIndexOf(c))
//     .sort()
//     .join('');

console.log(solution('abcabcadc')) // "d"
console.log(solution('abdc')) // "abcd"
console.log(solution('hello')) // "eho"
