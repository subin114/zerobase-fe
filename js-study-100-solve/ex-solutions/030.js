const average = scores => Math.round(scores.reduce((acc, score) => acc + score, 0) / scores.length) || 0

console.log(average([73, 82, 99])) // 85
console.log(average([50, 100, 90, 45, 70])) // 71
console.log(average([100])) // 100
console.log(average([])) // 0
