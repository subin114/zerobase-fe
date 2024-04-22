const solution = str => {
  const splited = str.split(' ')

  return `${Math.min(...splited)} ${Math.max(...splited)}`
}

console.log(solution('1 2 3 4')) // '1 4'
console.log(solution('-1 -2 -3 -4')) // '-4 -1'
console.log(solution('-1 -1')) // '-1 -1'
