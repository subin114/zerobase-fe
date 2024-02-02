for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + "*" + j + " = " + i * j);
    break;
  }
}


// label을 사용해서 i와 j가 0일 때만 출력하고, break로 빠져나오는데 이중 for문 자체가 끝남
end: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + "*" + j + " = " + i * j);
    break end;
  }
}