const solution = str => Array.from({ length: str.length }, (_, i) => str.slice(i)).sort()

console.log(solution('banana')) // ['a', 'ana', 'anana', 'banana', 'na', 'nana']
console.log(solution('programmers')) // ['ammers', 'ers', 'grammers', 'mers', 'mmers', 'ogrammers', 'programmers', 'rammers', 'rogrammers', 'rs', 's']
