// 03. extends

/* */

interface Animal1 {
  name: string;
  run(): string;
}

interface Person2 extends Animal {
  // name: number; // 타입이 다르기 때문에 충돌해서 에러 발생
  sayName(): string;
}

const bin: Person2 = {
  name: "Bin",
  run() {
    return "string";
  },
  sayName() {
    return "string2";
  },
};
