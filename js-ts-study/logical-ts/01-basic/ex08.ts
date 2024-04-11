// 08. undefined null

/*
- JS에서와 마찬가지로 고유의 특별한 타입으로 인정함
- 이외에 void, never와 같이 더 세밀한 타입도 제공함
- strictNullChecks가 핵심
*/

const nu: null = null;
const un: undefined = undefined;

function sayHello(word: string) {
  if (word === "world") {
    return "hello" + word;
  }

  return null;
}

function log(message: string | number) {
  console.log(message);

  return undefined;
}
