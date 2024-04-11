// 05. 배열 타입

const strArr: string[] = ["str", "str2", "str3"];
const strArr2: Array<string> = ["str", "str2", "str3"];
const numArr: Array<number> = [1, 2, 3];
const boolArr: boolean[] = [false, true, false, true];

// strArr.push(1) // error
// numArr.push('str') // error
boolArr.push(false);
