/* 
new.target 속성을 사용하여 new와 함께 호출했는지 확인 가능
즉, new.target 속성은 일반적인 함수 호출인지 혹은 new 키워드를 사용하여 호출되었는지의 여부를 판별할 때 사용함

*/

function User(name) {
  console.log(new.target);
  this.name = name;
}

let result_1 = User("john");       // undefined
console.log(result_2);             // undefined

let result_2 = new User("john");   // [Function: User]
console.log(result_2);             // User { name: 'john' }


// !new.target 을 사용해서 new 키워드를 잊고 안썼더라도 new를 붙여줄 수 있는 조건 처리를 해주는 방법
function Users(name) {
  if (!new.target) {   // 만약 undefined 라면, 자기 자신에 new를 붙여서 수행해라 라는 뜻
    return new Users(name);
  }
  this.name = name;
}

let result_11 = Users("john");       
console.log(result_11);             // User { name: 'john' }

let result_22 = new Users("john"); 
console.log(result_22);             // User { name: 'john' }