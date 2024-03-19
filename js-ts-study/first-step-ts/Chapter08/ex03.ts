// 03. 제네릭 클래스, 제네릭 인터페이스

class List<T> {
  data: T[];
  constructor(data: T[]) {
    this.data = data;
  }

  add(item: T) {
    this.data = [...this.data, item];
  }
}

const list = new List<string>([]);
list.add("1");

// ex. interface에서 제네릭 사용하기
interface Person<T> {
  name: string;
  id: T;
}

let person: Person<number> = {
  name: "asd",
  id: 10,
};
