// 02. 제네릭 타입 변수

function identity1<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

let output2 = identity1<number>([1, 2, 3]);

// ex. 매개변수가 2개일 때
function identity3<T, U>(arg1: T, arg2: U): [T, U] {
  return [arg1, arg2];
}

identity3<number, string>(3, "hello");
