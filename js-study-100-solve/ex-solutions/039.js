const solution = (intStrs, k, s, l) => intStrs.map(str => +str.slice(s, s + l)).filter(n => n > k)

console.log(solution(['0123456789', '9876543210', '9999999999999'], 50000, 5, 5))
// [56789, 99999]
