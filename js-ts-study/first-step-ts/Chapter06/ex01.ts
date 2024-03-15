// 01. 리터럴 타입

/*
- 고정된 값을 타입으로 가짐 (= const)
- string 등을 사용한 것보다 타입을 좁혀서 보다 정확하게 타입을 지정해줄 수 있음
- as const를 작성해주면 값까지 리터럴 타입으로 추론되기 때문에 readonly라고 뜸
- 바뀌면 안될 값을 실수로 바꿨을 때 as const를 사용해서 실수를 방지할 수 있음
*/

let a = 1 as const; // let이지만 as const를 사용함으로써 리터럴 타입으로 변환
const b = 1;

// ex01. 유니언 타입을 사용해서 타입을 좁히는 경우
type BloodType2 = "A" | "B" | "O" | "AB";

// ex02. 객체를 리터럴 타입으로 변환시키는 경우 (값이 고정됨)
const reasons = {
  withdrawal_reason_1: "내가 찾는 자료가 없어서",
  withdrawal_reason_2: "보려고 한 자료를 다 보아서",
  withdrawal_reason_3: "다른 서비스를 이용하려고",
  withdrawal_reason_4: "가격이 비싸서",
  withdrawal_reason_5: "서비스 이용이 복잡하고 어려워서",
  withdrawal_reason_6: "기타의견",
} as const;

// ex03. 배열을 리터럴 타입으로 변환시키는 경우 (값이 고정됨)
const options = ["착한맛", "보통맛", "매운맛", "아주매운맛"] as const;

// ex04. 리터럴 타입을 유니언 타입과 함께 사용
interface Item {
  code: 280 | 281 | 282 | 283;
  size: "small" | "medium" | "large" | "xlarge";
}

/*
위처럼 리터럴 타입과 유니언 타입을 사용해줌으로써
아래와 같이 잘못된 값이 들어가거나 실수로 들어가면 안 될 값이 들어갈 경우 에러를 발생시킴

const SelectedItem: Item = {
  code: 0,
  size: "XL",
};
*/
