let str = "hello world";
console.log(typeof str);

console.log(typeof undefined);
console.log(typeof 123);
console.log(typeof 456n);          // bigInt
console.log(typeof 123.123);
console.log(typeof true);
console.log(typeof "hello");
console.log(typeof Symbol("id"));  // symbol
console.log(typeof Math);          // object
console.log(typeof null);          // object
console.log(typeof console.log);   // function



let num_1 = 123.0;
let num_2 = 123.456;
let num_3 = 1 / 0;

console.log(num_1 - num_2);   // -0.04560000000000307
console.log((num_1 - num_2).toFixed(3));   // -0.0456 
console.log(num_3);
console.log(num_1 / "hello");  // NaN



let str_1 = "hello";
let str_2 = 'hello';
let num = 3;
let str_3 = `hello ${num}`;

console.log(str_3);