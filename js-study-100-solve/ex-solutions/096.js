// eslint-disable-next-line no-constant-condition
const solution = (ineq, eq, n, m) => {
  const operators = {
    '>=': (n, m) => n >= m,
    '<=': (n, m) => n <= m,
    '>!': (n, m) => n > m,
    '<!': (n, m) => n < m,
  }

  return +operators[ineq + eq](n, m)
}

console.log(solution('<', '=', 20, 50)) // 1
console.log(solution('>', '!', 41, 78)) // 0
