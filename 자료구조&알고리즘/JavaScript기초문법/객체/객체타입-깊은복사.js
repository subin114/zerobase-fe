let user = {
  name: "john",
  age: 27,
  sizes: {
    height: 180,
    weight: 72,
  }
};

let admin = JSON.parse(JSON.stringify(user));

admin.sizes.height = admin.sizes.height + 1;  // 180 => 181
console.log(admin.sizes.height);   // 깊은 복사를 해서 admin만 변경
console.log(user.sizes.height);

// .JSON 객체를 이용해서 깊은 복사를, stringify는 객체를 문자열로 변환하는데 이때 원본 객체와의 참조가 끊김