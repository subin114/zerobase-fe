// 05. Pick<T, K>

/*
리터럴타입으로 부분적인 프로퍼티들을 선택해 타입을 반환함
*/

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
