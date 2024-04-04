// 01. 인덱스 시그니처 사용하기

/*
객체의 키 이름을 아직 모르고 있고, 타입만 알고 있는 경우 사용함

어떤 타입이 오는지 알 수 있는 상황이라면
인덱스 시그니처를 사용하기보다는 최대한 정확하게 타입을 정의하는 것이 좋음
*/

// ex01
interface UserType {
  [index: string]: string;
}

const user: UserType = {
  name: "김개발",
  age: "20",
};

console.log(user.address); // undefined  (에러 발생하지 않고 접근이 가능하다는 단점이 있음)

// ex02
interface NumberDic {
  readonly [index: string]: number | string;
  length: number;
}
