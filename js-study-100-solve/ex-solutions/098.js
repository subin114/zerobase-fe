const maxProfit = prices => {
  let [buyPrice, maxProfit] = [prices.at(0), 0]

  for (const currentPrice of prices) {
    if (currentPrice > buyPrice) maxProfit = Math.max(maxProfit, currentPrice - buyPrice)
    else buyPrice = currentPrice
  }

  return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
console.log(maxProfit([7, 6, 4, 3, 1])) // 0
