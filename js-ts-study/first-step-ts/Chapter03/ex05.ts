// 05. 나머지 매개변수 (Rest Parameter)

// 매개변수의 개수가 가변적일 때 배열 형태로 받아올 수 있음

const func3 = (first: number, second: number, ...rest: number[]) => {
  console.log("first", first);
  console.log("second", second);
  console.log("rest", rest);
};

func3(1, 2, 3);

const func4 = (...rest: (number | string)[]) => {
  console.log("rest", rest);
};

func4(1, 2, "hello");
