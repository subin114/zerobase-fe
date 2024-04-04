// 03. in 연산자 사용하기

/*
자바스크립트에서 객체 안에 어떤 속성이 있는지 여부를 확인할 때 in 연산자를 사용
*/

type Fish1 = { swim: () => void };
type Bird1 = { fly: () => void };

function isFish1(pet: Fish1 | Bird1): pet is Fish1 {
  return (pet as Fish1).swim !== undefined;
}

const fish1: Fish1 = { swim: () => console.log("swim") };
const bird1: Bird1 = { fly: () => console.log("fly") };

console.log(isFish1(fish1)); // true
console.log(isFish1(bird1)); // false

/*
[타입 가드 예시]
*/
function action1(pet: Fish1 | Bird1) {
  if ("swim" in pet) {
    pet.swim();
  } else {
    pet.fly();
  }
}
