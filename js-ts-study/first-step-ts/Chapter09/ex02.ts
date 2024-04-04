// 02. 타입 서술어 (is)

/*
리턴 타입이 타입 서술어(predicate)인 함수를 정의하여 사용
매개변수 is Type 순으로 작성함
*/

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const fish: Fish = { swim: () => console.log("swim") };
const bird: Bird = { fly: () => console.log("fly") };

console.log(isFish(fish)); // true
console.log(isFish(bird)); // false

/*
[타입 가드 예시]
어떤 스코프 안에서 특정 타입을 보장하는 런타임 검사를 수행한다는 표현식
*/
function action(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}
