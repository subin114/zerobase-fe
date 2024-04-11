// 09. readonly

class Person6 {
  name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  setAge(newAge: number) {
    // this.age = newAge; // error
  }
}

const p7 = new Person6("Jang", 25);

// p7.age = 27; // error
