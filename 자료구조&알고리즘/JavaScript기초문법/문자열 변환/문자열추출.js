/*
위치 기반 문자열 추출 : String.slice(start, end), String.substring(start, end)
길이 기반 문자열 추출 : String.substr(start, length)
*/

let text = "hello, world!!!";

console.log(text.slice(0, 5));       // hello            index[0]부터 시작해서 index[5] 전까지 출력 (= index[4]까지 출력)
console.log(text.slice(4, 5));       // o
console.log(text.slice(4));          // o, world!!!      index[4]부터 맨 끝까지 출력
console.log(text.slice(-4));         // d!!!             맨 뒤(index[-1] = !)를 기준으로 잡아서 index[-4] (= d) 까지 출력

// substring: end > start -> start > end
console.log(text.slice(2, 6));       // llo,
console.log(text.slice(6, 2));       //                  slice는 start 값이 end 보다 클 경우, 출력 X
console.log(text.substring(2, 6));   // llo,
console.log(text.substring(6, 2));   // llo,             substring은 start 값이 end 보다 클 경우, start와 end 숫자를 서로 바꿔줌

console.log(text.substr(2, 6));      // llo, w           index[2]부터 시작해서 index[6]까지 출력
console.log(text.substr(-5, 3));     // ld!              맨 뒤에서부터 index[-5]를 기준으로 시작해서 3개 값을 출력