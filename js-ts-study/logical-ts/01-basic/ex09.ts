// 09. any

/*
- 모든 값(타입)의 집합
- 사용하지 않는 것이 좋음
- noImplicitAny or strict 옵션 true 권장
*/

function func(anyParam: any) {
  anyParam.trim(); // any를 사용하면 .을 찍었을 때 자동완성이 뜨지 않음
}

func([1, 2, 3]);
