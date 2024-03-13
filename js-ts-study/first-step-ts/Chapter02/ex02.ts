// 02. object 타입

interface PersonType {
  name: string;
  age: number;
  isStudent: boolean;
  studentNum?: number;
}

let value: string = "hello";

const person: PersonType = {
  name: "김개발",
  age: 10,
  isStudent: true,
};

const getPersonAge = (person: PersonType) => {
  console.log(person.age);
};
