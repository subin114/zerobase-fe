// 03. 함수 타입 작성하기

// ex.01
type BinaryFn = (a: number, b: number) => number;
// 여기서 매개변수의 이름을 다른 것으로 바꿔도 상관 X

const sum: BinaryFn = (a, b) => {
  return a + b;
};

const sub: BinaryFn = (a, b) => {
  return a - b;
};

const mul: BinaryFn = (a, b) => {
  return a * b;
};

const div: BinaryFn = (a, b) => {
  return a / b;
};

// ex.02
type ShowMsgType = (msg: string) => void;

const showMsg: ShowMsgType = (msg) => {
  alert(msg);
};

const someFunc = (msg: string, showMsg: ShowMsgType) => {
  showMsg(msg.toUpperCase());
};

someFunc("hello", showMsg);
