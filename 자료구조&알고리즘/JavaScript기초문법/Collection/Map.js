/*
[ 요소 추가 & 삭제 ]
요소 추가 : Map.set(key, value),  요소 접근 : Map.get(key),  요소 전체 삭제 : Map.clear()
다양한 자료형을 key로 사용 가능하며, map.set 호출 시 map이 반환되므로 체이닝(chaining) 가능

여기서 => 이렇게 표현되는 이유는 단순히 표현의 일부로써, 실제로는 맵 객체의 내용을 나타나기 위한 구분 기호일 뿐임.
(일반적으로 객체 리터럴에서는 : 이 사용되지만, Map 객체의 출력에서는 => 가 사용됨.)
*/

// Map 객체 생성
let map = new Map();

// 키-값 쌍 추가
map.set("name", "john");        // string key
map.set(123, 456);              // number key
map.set(true, "bool_type");     // boolean key

// Map 출력
console.log(map);               // Map(3) { 'name' => 'john', 123 => 456, true => 'bool_type' }

// 특정 키에 해당하는 값 가져오기
console.log(map.get(123));      // 456
console.log(map.get("name"));   // john

// Map 크기 출력
console.log(map.size);          // 3


/* ----------- chaining ----------- */

// Map 비우기
map.clear();
console.log(map);               // Map(0) {}

// 체이닝을 이용한 키-값 쌍 추가
map.set("name", "alice").set(123, 789).set(false, "bool_type");
console.log(map);               // Map(3) { 'name' => 'alice', 123 => 789, false => 'bool_type' }