const star3 = n => {
  // space + star
  // space : 4 3 2 1 0 => n - 1 - i
  // star : 1 2 3 4 5 => i + 1

  for (let i = 0; i < n; i++) {
    console.log(' '.repeat(n - 1 - i) + '*'.repeat(i + 1))
  }
}

star3(5)
