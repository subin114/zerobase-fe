console.log("ZA" > "AAAA");    // true
console.log("Hello" < "Hi");   // true
console.log("Hello" >= "Helloo");   // false
console.log("5" <= 10);        // true
console.log(true == 1);        // true
console.log(false != 123);     // true
console.log(true === 1);       // false
console.log(false !== 123);    // true

console.log(true || false);           // true
console.log(Boolean(0 || false));     // false
console.log(Boolean(123 || false));   // true
console.log(Boolean(false && true));  // false
console.log(Boolean(true && 3));      // true
console.log(Boolean(0 && false));     // false
console.log(!false);    // true
console.log(!123);     // false