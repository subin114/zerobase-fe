/*
최근 스팸 메일이 급증하여, 메일 업무 처리에 지장이 생겼다.
대소문자를 구분하지 않고 Advert로 시작하는 메일 제목은 스팸 처리하는 함수를 구현하시오.
입력 값은 문자형이며, 출력 값은 스팸으로 판단할 경우 true, 아닐 경우 false를 반환한다.
*/


/* user code */
function answer(str) {
  let spam_flag;

  spam_flag = str.toLowerCase().includes("advert");

  /*
  1. 대소문자 변환
  str = str.toLowerCase();

  2. advert 단어가 메일 제목 내 포함되는지 판단
  spam_flag = str.includes("advert");
  */

  return spam_flag;
}


/* main code */
let input = [
  "RE: Request documents",
  "[Advertisement] free mobile!",
  "50% off this week (advertising)",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}