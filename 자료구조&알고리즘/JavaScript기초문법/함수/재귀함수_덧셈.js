/*
function recursive(num) {
  if(num == 0) return 0;
  return num + recursive(num - 1);
}
// 3 + (2 + (1 + 0))

console.log(recursive(3));
*/



function recursive(num) {
  if (num == 0) return;
  recursive(num - 1);
  console.log(num);
}

recursive(3);