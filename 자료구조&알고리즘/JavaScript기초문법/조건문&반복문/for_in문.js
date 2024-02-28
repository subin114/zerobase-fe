const person = { fname: "John", lname: "Bob", age: 25};

let text = "";
for (let x in person) {
  text += person[x];
}

console.log(text);  // JohnBob25


/*
for in 반복문
: 객체의 key, value 형태를 반복하여 수행하는데 최적화 된 유형
첫 번째부터 마지막까지, 객체의 키 개수만큼 반복
*/