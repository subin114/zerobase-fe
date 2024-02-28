let text = "hello, world!!!";

console.log(text.indexOf("l"));       // 2
console.log(text.indexOf("l", 3));    // 3    3번째부터 l을 검색해라
console.log(text.lastIndexOf("l"));   // 10

console.log(text.includes("Hello"));      // false   전체 문자열 중 해당 문자열이 포함되는지
console.log(text.startsWith("ello"));     // false   맨 처음부터 ello가 시작되는 것이 아니기 때문
console.log(text.startsWith("ello", 1));  // true    첫번째부터 ello를 찾아라
console.log(text.endsWith("world"));      // false
console.log(text.endsWith("!!!"));        // true