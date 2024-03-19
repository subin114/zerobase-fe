// 04. 제네릭 제약 조건

interface Lengthwise {
  length: number;
}

function identity4<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

identity4([1, 2, 3, "hello"]);
identity4({ name: "hello", length: 100 });
