// 01. 유니언 타입 (|)

/*
자바스크립트의 OR 연산자 (||)
ex. x || y

타입스크립트의 유니언 타입(|)
ex. string | number
*/

const func = (id: string | number | null) => {
  // undefined는 id뒤에 ?를 붙여서 선택적으로 작성할 수 있음
  if (typeof id === "string") {
    console.log("ID", id.toUpperCase());
  } else {
    console.log("ID", id);
  }
};

func("1234"); // "ID", "1234"
func(1234); // "ID", 1234
