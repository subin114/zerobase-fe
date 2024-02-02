/* 생성자 함수와 new 연산자를 통해 빠른 객체 생성 가능 */

// 빵틀
function FishBread(flavor, price) {
  this.flavor = flavor;
  this.price = price;
  this.base = "flour";   // 변하는 변수가 아닌 같은 값으로 고정시킴
}

// 붕어빵
let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1);   // FishBread { flavor: 'cream', price: 1200, base: 'flour' }
console.log(bread_2);   // FishBread { flavor: 'redbean', price: 1000, base: 'flour' }
console.log(bread_3);   // FishBread { flavor: 'milk', price: 1500, base: 'flour' }