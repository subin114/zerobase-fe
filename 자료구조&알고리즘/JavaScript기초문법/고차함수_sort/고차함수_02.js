/** 오름차순 **/
let ascending_order = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x > y) return 1;
  else if (y > x) return -1;
  else return 0;
};

/** 내림차순 **/
let descending_order = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x < y) return 1;
  else if (y < x) return -1;
  else return 0;
};

let fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort(ascending_order));   // ['apple', 'melon', 'Orange', 'orange']
console.log(fruits.sort(descending_order));  // ['Orange', 'orange', 'melon', 'apple']