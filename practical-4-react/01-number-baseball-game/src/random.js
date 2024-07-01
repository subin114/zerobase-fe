const shuffle = (array) => {
  // Math.random
  return array.sort(() => {
    return Math.random() - 0.5;
  });
};

export const generateRandomNumber = () => {
  // 1 ~ 9까지 숫자를 이용
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 랜덤하게 섞어서 4자리 숫자만 이용할 예정
  const pickedNumbers = shuffle(candidates).splice(0, 4); // 4자리를 뽑음

  return pickedNumbers;
};
