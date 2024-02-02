/* Collection 객체인 Map이 가지고 있는 iterator 속성을 이용하여 for ~ of 구문을 통해 반복문 수행 가능 */

let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);

for (let item of recipe_juice.keys()) console.log(item);         // strawberry banana ice
for (let amount of recipe_juice.values()) console.log(amount);   // 50 100 150
for (let entity of recipe_juice) console.log(entity);            // [ 'strawberry', 50 ] [ 'banana', 100 ] [ 'ice', 150 ]

console.log(recipe_juice);                // Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
console.log(recipe_juice.entries());
/*
[Map Entries] {
  [ 'strawberry', 50 ],
  [ 'banana', 100 ],
  [ 'ice', 150 ]
}
*/