/*
Collection 객체인 Set이 가지고 있는 iterator 속성을 이용하여 for ~ of 구문을 통해 반복문 수행 가능

중복값을 허용하지 않기 때문에 같은 문자열이 들어가면 하나로만 취급함
*/

let str = new Set("Hello!");

console.log(str);     // Set(5) { 'H', 'e', 'l', 'o', '!' }

for (let item of str) console.log(item);                // H e l o !
for (let item of str.keys()) console.log(item);         // H e l o !     Set은 key가 없기 때문에 value를 반환함
for (let item of str.values()) console.log(item);       // H e l o !
for (let item of str.entries()) console.log(item);      // ['H', 'H'] ['e', 'e'] ['l', 'l'] ['o', 'o'] ['!', '!']

console.log(str.keys());      // [Set Iterator] { 'H', 'e', 'l', 'o', '!' }
console.log(str.entries());
/*
[Set Entries] {
  [ 'H', 'H' ],
  [ 'e', 'e' ],
  [ 'l', 'l' ],
  [ 'o', 'o' ],
  [ '!', '!' ]
}

※ Map과 호환성을 지키기 위해 위의 포맷으로 출력됨
※ 결국은 key와 value가 같은 것을 호출하는 것으로 생각하면 됨
*/