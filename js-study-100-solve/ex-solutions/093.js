const solution = strings => {
  // {'a', 'bc', 'd', 'efg', 'hi'} = {1: 2, 2: 2, 3: 1} => 2
  // key: length, value: count

  const hash = {}

  for (const str of strings) {
    hash[str.length] = (hash[str.length] || 0) + 1
  }

  return Math.max(...Object.values(hash))
}

console.log(solution(['a', 'bc', 'd', 'efg', 'hi'])) // 2
