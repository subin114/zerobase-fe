// 04. 선택적 매개변수와 기본 매개변수

// 선택적 매개변수 (Optional Parameters)
const func2 = (name: string, job?: string) => {
  console.log(name + " " + job);
};

func2("김개발"); // "김개발 undefined"

// 기본 매개변수 (Default Parameter)
const func = (name: string, job = "학생") => {
  console.log(name + " " + job);
};

func("김개발"); // "김개발 학생"
