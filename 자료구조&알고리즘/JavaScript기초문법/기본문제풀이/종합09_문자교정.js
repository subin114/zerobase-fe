/*
우리 출판사는 출판되는 모든 책의 단어들이 앞 글자가 대문자로 표기되어야 한다.
업무로 바쁜 동료를 위해, 원고의 단어 앞 글자를 모두 대문자로 변경시켜주는 함수를 구현하시오.
입력 값은 문자형 형태의 단어들이며, 교정된 문자형으로 치환시켜 반환한다.
*/

/* user code */
function answer(str) {
  let fix_str = "";

  // 1. 단어 기준으로 나눈다. (=> 공백 기준으로 나눈다는 뜻)
  let tmp_list = str.split(" ");

  // 2. 단어의 앞 철자를 대문자로 변환시켜주고, 단어들을 다시 문장으로 변환시켜준다.
  for (let item of tmp_list) {
    fix_str += item[0].toUpperCase() + item.slice(1) + " ";
  };

  // 만약 위의 코드들을 한 문장으로 작성하고 싶다면
  /*
  for (let item of str.split(" ")) {
    fix_str += item[0].toUpperCase() + item.slice(1) + " ";
  };
  */


  return fix_str;
}



/* main code */
let input = [
  "Hello, My name is john",
  "This week is closed due to COVID-19",
  "fifty percent off this week",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}