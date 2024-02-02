/*
날짜 정보 설정 (년/월/일) : Date.setFullYear(), Date.setMonth(), Date.setDate()
날짜 정보 설정 (시/분/초/ms) : Date.setHours(), Date.setMinutes(), Date.setSeconds()
*/

let date = new Date();
console.log(date);                 // 2024-01-15T15:00:52.270Z

/* 1. set year */
let ms_year = date.setFullYear(2020, 3, 15);
console.log(date);                 // 2020-04-14T15:00:52.270Z     실제 3은 4라서 4월로 표시됨
console.log(new Date(ms_year));    // 2020-04-14T15:00:52.270Z


/* 2. set date */
date.setDate(1);
console.log(date);                 // 2020-03-31T15:00:52.270Z     ?? 이거 왜 03-01이 아닌지 알아보기
date.setDate(0);                   // 이전 달의 마지막 날
console.log(date);                 // 2020-03-30T15:00:52.270Z


/* 3. set hours */
date.setHours(date.getHours() + 2);
console.log(date);                 // 2020-03-30T17:00:52.270Z