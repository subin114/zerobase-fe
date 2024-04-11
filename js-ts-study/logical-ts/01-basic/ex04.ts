// 04. 함수 타입

/*
- 매개변수와 반환값의 타입을 지정
- 반환값의 타입은 타입 추론을 해주기 때문에 굳이 작성하지 않아도 됨
- 타입을 Function이라고 지정해주면 X --> 구체적으로 작성해주기
*/

function func1(num1: number, str1: string): string {
  return num1 + str1;
}

func1(123, "str");

function func2(num2: number, str2: string): number {
  return num2 + Number(str2);
}

func2(123, "123");

function func3(num3: number, str3: string): void {
  console.log(num3 + str3);
}

func3(123, "123");

const func4 = (str1: string, str2: string) => {
  return str1 + " " + str2;
};

func4("hello", "world");

const func5 = (obj: { str1: string; str2: string }) => {
  return obj.str1 + " " + obj.str2;
};

func5({ str1: "hello", str2: "world" });
