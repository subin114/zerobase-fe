let user = {
  name: "john",
  age: 27,
}


let admin = {...user};  // {user.name, user.age}


/*  [02. using Object]
let admin = Object.assign({}, user);
*/


/*  [03. for in 문]
let admin = {};

for (let key in user) {
  admin[key] = user[key];
}
*/


admin.name = "park";
console.log(admin.name);
console.log(user.name);  // john -> park

user.age = 30;
console.log(user.age);  // 30
console.log(admin.age);  // 27