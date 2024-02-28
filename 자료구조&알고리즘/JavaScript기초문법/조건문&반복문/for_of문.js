let language = "JavaScript";
let text = "";

for (let x of language) {
  text += x;
  console.log(x);  // J \n a \n ... t
}


/*
for of 반복문
: Collection 객체 자체가 Symbol.iterator 속성을 가지고 있어야 동작 가능한 유형
*/