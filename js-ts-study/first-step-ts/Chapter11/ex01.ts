// 01. 매핑 타입

/*
중복을 피하기 위해 기존에 정의된 타입을 새로운 타입으로 변환하는 문법
*/

type OptionsFlags<T> = {
  [Property in keyof T]: boolean;
};

type Input = {
  value: string;
  onChange: () => void;
  disabled: boolean;
};

type InputOptions = OptionsFlags<Input>;
