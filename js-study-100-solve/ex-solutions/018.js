const star5 = n => {
  // space : 4 3 2 1 0 (등차) => n - 1 - i
  // star : 1 3 5 7 9 (등차) => 1 + 2 * i

  for (let i = 0; i < n; i++) {
    console.log(' '.repeat(n - 1 - i) + '*'.repeat(1 + 2 * i))
  }
}

star5(5)
