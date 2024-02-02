/*
[ Date 생성자 종류 ]
new Date(), new Date(miniseconds), new Date(datestring)
new Date(year, month, date, hours, minutes, seconds, ms)

month 값 범위는 1월(0) ~ 12월(11)
*/

/* 1. Default */
let date_now = new Date();
let date_now_str = Date();
console.log(date_now);                          // 2024-01-15T14:38:27.764Z
console.log(date_now_str);                      // Mon Jan 15 2024 23:38:27 GMT+0900 (대한민국 표준시)
console.log(typeof date_now);                   // object
console.log(typeof date_now_str);               // string     new 키워드 안쓰면 문자열로 출력된다는 차이가 있음

/* 2. milliseconds (1/1000)sec */
let date_ms_1 = new Date(0);
let date_ms_2 = new Date(24 * 3600 * 1000);
console.log(date_ms_1);                         // 1970-01-01T00:00:00.000Z
console.log(date_ms_2);                         // 1970-01-02T00:00:00.000Z      하루가 증가된 날짜를 출력

/* 3. date string */
let date_str = new Date("2020-01-01");
console.log(date_str);                          // 2020-01-01T00:00:00.000Z

/* 4. year, month, ..., ms */
let date_params_1 = new Date(2021, 0, 1);
let date_params_2 = new Date(Date.UTC(2021, 0, 1, 6, 12, 18, 24));
let date_params_3 = new Date(Date.UTC(2021, 0, 1));
console.log(date_params_1);                     // 2020-12-31T15:00:00.000Z      UTC를 기준으로 함. 우리나라를 기준으로 -9시간
console.log(date_params_2);                     // 2021-01-01T06:12:18.024Z      UTC 고정한 값 출력
console.log(date_params_3);                     // 2021-01-01T00:00:00.000Z