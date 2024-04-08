const star6 = n => {
  // space : 0 1 2 3 4 => i
  // star : 9 7 5 3 1 => 2 * n - 1 - 2 * i

  for (let i = 0; i < n; i++) {
    console.log(' '.repeat(i) + '*'.repeat(2 * n - 1 - 2 * i))
  }
}

star6(5)
