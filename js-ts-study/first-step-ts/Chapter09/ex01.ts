// 01. 타입 단언 (as)

/*
타입 추론이 정확하지 않을 때 혹은 의도와 다르게 추론되고 있을 때,
as 키워드를 사용해서 타입을 단언해줄 수 있음

as 키워드를 사용해서 단언을 할 경우, 컴파일이 되면서 없어지게 되는데
실수로 잘못된 타입으로 단언을 해주더라도 값만 제대로 들어간다면 런타임 에러가 발생하지 X

반대로 컴파일할 때 잡아낼 수 있는 타입 에러들을 단언을 잘못함으로써
타입 에러가 발생하지 않아서 런타임 에러가 발생할 수 있음

따라서 타입 단언은 100% 확신할 수 있는 상황에서만 사용하는 것이 좋음
*/

// ex01
let a: unknown = "hi";
let b = (a as string).length;

// ex02
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
