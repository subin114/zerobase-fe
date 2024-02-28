let fruits = "apple banana melon";

result = fruits.split(" ");
console.log(result);      // ['apple', 'banana', 'melon']

console.log(result[0]);   // apple
console.log(result[1]);   // banana
console.log(result[2]);   // melon

let text = "hello";

result = text.split("");
console.log(result);           // ['h', 'e', 'l', 'l', 'o']
console.log(result.length);    // 5
console.log(result[0]);        // h

result = text.split("", 3);
console.log(result);           // ['h', 'e', 'l']
console.log(result.length);    // 3