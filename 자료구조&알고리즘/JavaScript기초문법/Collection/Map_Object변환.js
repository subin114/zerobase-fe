/* Object.entries(Object), Object.fromEntries(Map)를 통해 Map과 Object 간 변환이 가능 */

// Map 객체 생성 및 초기화
let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);

// Map을 기반으로 객체 생성.  Map 객체에서 얻은 key-value 쌍을 객체 형태로 변환하기 위해 fromEntries() 사용
let recipe_juice_obj = Object.fromEntries(recipe_juice);

// 객체를 key-value 배열로 변환
let recipe_juice_kv = Object.entries(recipe_juice_obj);   // [key, value]

// key-value 배열을 다시 Map으로 변환
let recipe_juice_map = new Map(recipe_juice_kv);

console.log(recipe_juice);        // Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
console.log(recipe_juice_obj);    // { strawberry: 50, banana: 100, ice: 150 }
console.log(recipe_juice_kv);     // [ [ 'strawberry', 50 ], [ 'banana', 100 ], [ 'ice', 150 ] ]
console.log(recipe_juice_map);    // Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }