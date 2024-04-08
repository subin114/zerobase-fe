const star4 = n => {
  // space : 0 1 2 3 4 => i
  // star : 5 4 3 2 1 => n - i

  for (let i = 0; i < n; i++) {
    console.log(' '.repeat(i) + '*'.repeat(n - i))
  }
}

star4(5)
