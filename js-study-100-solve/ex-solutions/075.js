const solution = (strings, parts) => parts.map(([s, e], i) => strings[i].slice(s, e + 1)).join('')
// strings.map((str, i) => str.slice(parts[i][0], parts[i][1] + 1)).join('')

// prettier-ignore
console.log(
  solution(
    ['progressive', 'hamburger', 'hammer', 'ahocorasick'],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
) // "programmers"
