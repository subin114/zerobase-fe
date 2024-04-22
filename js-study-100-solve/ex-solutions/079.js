const solution = babbling => babbling.filter(w => w.replace(/aya|ye|ma|woo/g, '') === '').length

/** 정규표현식 사용 */
// const solution = babbling => {
//   let count = 0

//   for (const word of babbling) {
//     if (word.replace(/aya|ye|ma|woo/g, '') === '') count += 1
//   }

//   return count
// }

/** replace 사용 */
// const solution = babbling => {
//   const res = []

//   for (const word of babbling) {
//     res.push(word.replace('aya', ' ').replace('ye', ' ').replace('ma', ' ').replace('woo', ' '))
//   }

//   return res.filter(str => str.trim() === '').length
// }

console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo'])) // 1
console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'])) // 3
