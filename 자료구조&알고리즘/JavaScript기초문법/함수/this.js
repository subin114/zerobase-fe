let user = { name: "john" };
let admin = { name: "admin" };

//hello_func 내 this 값은 런타임에 결정
function hello_func() {
  console.log("hello" + this.name);
}

user.func = hello_func;  // user.func 수행할 때, (this == user.name)
admin.func = hello_func;  // admin.func 수행할 때, (this == admin.name)

user.func();  // hello john
admin.func();  // hello admin

user["func"]();  // hello john
admin["func"]();  //  hello admin