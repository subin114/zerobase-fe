/*
우리 출판사는 출판되는 모든 책의 단어들이 앞 글자가 대문자로 표기되어야 한다.
업무로 바쁜 동료를 위해, 원고의 단어 앞 글자를 모두 대문자로 변경시켜주는 함수를 구현하시오.
입력 값은 문자형 형태의 단어들이며, 교정된 문자형으로 치환시켜 반환한다.
*/


/* user code */
function answer(str) {
  let fix_str = "";
  str = str.split(" ")
  
  for (let i of str) {
    fix_str += i[0].toUpperCase() + i.slice(1) + " "
  }

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