// 06. 리터럴 타입

/*
- let은 값의 타입을 추론, const는 값으로 추론함
- (const는 재할당이 안되기 때문)
*/

let letString = "Hello";
letString; // string으로 추론

const constString = "Hello";
constString; // "Hello"로 추론

let letNumber = 123;
letNumber; // number로 추론

const constNumber = 123;
constNumber; // 123으로 추론
