console.log(String(123));          // 123
console.log(String(1 / 0));        // Infinity
console.log(String(-1 / 0));       // -Infinity
console.log(String(NaN));          // NaN
console.log(String(true));         // true
console.log(String(false));        // false
console.log(String(undefined));    // undefined
console.log(String(null));         // null
console.log(String("haha"));       // haha

console.log(Number(""));           // 0
console.log(Number("123"));        // 123
console.log(Number("hello"));      // NaN
console.log(Number("123hello"));   // NaN
console.log(Number(true));         // 1
console.log(Number(false));        // 0
console.log(Number(null));         // 0
console.log(Number(undefined));    // NaN

console.log(parseInt("123.123"));    // 123
console.log(parseFloat("123.123"));  // 123.123

console.log(Boolean(""));           // false
console.log(Boolean("123"));        // true
console.log(Boolean("hello"));      // true
console.log(Boolean("0"));          // true
console.log(Boolean(0));            // false
console.log(Boolean(123));          // true
console.log(Boolean(NaN));          // false
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false