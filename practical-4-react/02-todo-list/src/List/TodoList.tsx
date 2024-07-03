import TodoItem from "../ListItem/TodoItem";
import { TodoType } from "../Todo/TodoReducer";
import styles from "./TodoList.module.scss";

interface TodoListProps {
  todos: TodoType[];
  onToggleClick: (id: number) => void;
  onRemoveClick: (id: number) => void;
}

const TodoList = ({ todos, onToggleClick, onRemoveClick }: TodoListProps) => {
  return (
    <section className={styles.container}>
      <ol>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isChecked={todo.isChecked}
            onToggleClick={onToggleClick}
            onRemoveClick={onRemoveClick}
          />
        ))}
      </ol>
    </section>
  );
};

export default TodoList;
