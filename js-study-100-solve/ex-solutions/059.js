const solution = (str, indices) => [...str].filter((_, i) => !indices.includes(i)).join('')

console.log(solution('apporoograpemmemprs', [1, 16, 6, 15, 0, 10, 11, 3])) // 'programmers'
