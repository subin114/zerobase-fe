import TodoItem from "../ListItem/TodoItem";
import { useTodoState } from "../Todo/TodoProvider";
import styles from "./TodoList.module.scss";

const TodoList = () => {
  const todoState = useTodoState();

  return (
    <section className={styles.container}>
      <ol>
        {todoState.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isChecked={todo.isChecked}
          />
        ))}
      </ol>
    </section>
  );
};

export default TodoList;
