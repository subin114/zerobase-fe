/*
날짜 정보 얻기 (년/월/일) : Date.getFullYear(), Date.getMonth(), Date.getDate()
날짜 정보 얻기 (시/분/초/ms) : Date.getHours(), Date.getMinutes(), Date.getSeconds()
주어진 일시 - 1970/1/1 차분(ms) : Date.getTime()
현지시간 - 표준시간 차분(min) : Date.getTimezoneOffset()
*/

let date = new Date();
console.log(date);                           // 2024-01-15T14:52:52.850Z

/* 1. year, month, day: 0(sun) ~ 6(sat) */
console.log(date.getFullYear());             // 2024
console.log(date.getMonth());                // 0
console.log(date.getDay());                  // 1

/* 2. hours */
console.log(date.getHours());                // 23
console.log(date.getUTCHours());             // 14      23-9

/* 3. getTime: (now - date(0)) milliseconds
      getTimezoneOffset: (UTC+0 - currentZone) minutes */
console.log(date.getTime());                 // 1705330372850
console.log(date.getTimezoneOffset());       // -540