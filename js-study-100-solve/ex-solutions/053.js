const solution = (str1, str2) => [...str1].map((str, i) => str + str2[i]).join('')

console.log(solution('aaaaa', 'bbbbb')) // 'ababababab'

// console.log(str.split('')) // X  --> 이렇게 사용하지 말 것 (예전 방법)
// console.log([...str]) // O
