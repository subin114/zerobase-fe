let list = ["john", 27, function hello_func() {console.log("hello");}];
let obj = {
  name: "john",
  age: 27,
  hello_func() {
    console.log("hello");
  }
};
function hello_func() {console.log("hello");}

hello_func();  // hello
obj.hello_func();  // hello
list[2]();  // hello

console.log(typeof hello_func);  // function
console.log(typeof obj.hello_func);  // function
console.log(typeof list[2]);  // function

console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.getOwnPropertyDescriptors(list));