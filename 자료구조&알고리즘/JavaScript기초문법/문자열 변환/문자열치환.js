/*
처음 만나는 요소 문자열 치환 (치환된 문자열 반환) : String.replace(origin_str, change_str)
정규 표현식 활용 문자열 치환 : 치환 문자열에 정규 표현식 기입 → /치환문자열/g(전체)i(대소문자 구분 X)
*/

let text = "helLo, world!!!";
let changed_text = "";

changed_text = text.replace("world", "earth");

console.log(changed_text);              // helLo, earth!!!
console.log(text);                      // helLo, world!!!

console.log(text.replace("!", "?"));    // helLo, world?!!
console.log(text.replace("l", "i"));    // heiLo, world!!!

console.log(text.replace(/l/g, "i"));   // heiLo, worid!!!    대소문자 구분해서 변경
console.log(text.replace(/l/gi, "i"));  // heiio, worid!!!    대소문자 구분하지 않고 모두 변경
