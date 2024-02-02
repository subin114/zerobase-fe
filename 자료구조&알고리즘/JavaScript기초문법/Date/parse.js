/*
[ 날짜 정보 설정 ]
문자열 기반 날짜 정보 설정 : Date.parse(YYYY-MM-DDTHH:mm:ss.sssZ)
YYYY-MM-DD → 날짜(연-월-일),  "T" → 구분 기호,  HH:mm:ss.sss → 시:분:초.밀리초
'Z'(option) → 미 설정할 경우 현재 로컬 기준 UTC로, 설정할 경우 UTC+0 기준으로 시간 설정
*/

let ms_parse = Date.parse("2020-03-31T00:00:00.000");

console.log(ms_parse);                    // 1585580400000
console.log(new Date(ms_parse));          // 2020-03-30T15:00:00.000Z

console.log(new Date(Date.parse("2020-03-31T00:00:00.000Z")));    // 2020-03-31T00:00:00.000Z