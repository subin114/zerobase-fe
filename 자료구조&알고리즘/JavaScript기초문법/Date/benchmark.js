/*
[ 성능 측정 ]
벤치마크 측정 대상 함수 전후로 시간을 비교하여 알고리즘 성능 측정
*/

// 날짜를 뺄셈하여 차이를 계산하는 함수
function dateSub(old_date, new_date) {
  return new_date - old_date;
}

// getTime() 메서드를 사용하여 밀리초로 변환 후 뺄셈하여 차이를 계산하는 함수
function getTimeSub(old_date, new_date) {
  return new_date.getTime() - old_date.getTime();
}

// 주어진 함수를 벤치마크하고 수행을 측정하는 함수
function benchmark(callback_func) {

  // 시작 날짜를 2020-01-01로 설정
  let date_1 = new Date("2020-01-01");
  // 현재 날짜를 사용
  let date_2 = new Date();

  // 벤치마크를 시작할 때의 시간 기록
  let start = Date.now();

  // 100,000번 반복하여 주어진 함수 수행
  for (let i = 0; i < 100000; i++) {
    callback_func(date_1, date_2);
  }

  // 벤치마크 종료 후 소요된 전체 시간 측정
  return Date.now() - start;
}

// 벤치마크 하고 결과 출력
console.log("dateSub: " + benchmark(dateSub) + "ms");   // dateSub: 13ms
console.log("getTimeSub: " + benchmark(getTimeSub) + "ms");   // getTimeSub: 2ms