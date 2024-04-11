// 03. 객체 타입

const obj: { str: string; num: number; child: { str: string; num: number } } = {
  str: "str",
  num: 123,
  child: {
    str: "str",
    num: 123,
  },
};

obj.num;

/* 아래는 any와 다른 게 없는 상황임 */

// const obj: object = {
//   str: 'str',
//   num: 123,
//   child : {
//     str: 'str',
//     num: 123,
//   }
// }

// obj.str
