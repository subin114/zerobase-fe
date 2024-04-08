const star2 = n => {
  for (let i = 0; i < n; i++) {
    console.log('*'.repeat(n - i))
  }
}

star2(5)

// const star2 = n => {
//   const star = '*'.repeat(n)

//   for (let i = 0; i < n; i++) {
//     console.log(star.slice(0, n - i))
//   }
// }

// star2(5)
