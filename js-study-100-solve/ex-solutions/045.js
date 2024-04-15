// 문제 변형
const getTodosByFinished = (todos, finished) => todos.filter(todo => todo.finished === finished)

const todos = [
  { name: 'problemsolving', finished: true },
  { name: 'practiceguitar', finished: false },
  { name: 'swim', finished: true },
  { name: 'studygraph', finished: false },
]

console.log(getTodosByFinished(todos, false).map(todo => todo.name))
