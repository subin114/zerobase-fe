// prettier-ignore

/** set 사용 */
const solution = (spell, dic) => {
  
  for (const word of dic) {
      const set = new Set(word)
          if (spell.length === word.length && spell.every(c => set.has(c))) return 1
        }
      
        return 2
  }

/** includes 사용 */
// const solution = (spell, dic) => {
//   for (const word of dic) {
//         if (spell.length === word.length && spell.every(c => word.includes(c))) return 1
//       }

//       return 2
// }

/** sort 사용 */
// const solution = (spell, dic) => {
//   const str = spell.sort().join('')

//   for (const word of dic) {
//     if (str === [...word].sort().join('')) return 1
//   }

//   return 2
// }

console.log(solution(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo'])) // 2
console.log(solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw'])) // 1
console.log(solution(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])) // 2
