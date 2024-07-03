import styles from "./TodoItem.module.scss";
import { BsCheckCircle } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { useTodoDispatch } from "../Todo/TodoProvider";

interface TodoItemProps {
  id: number;
  text: string;
  isChecked: boolean;
}

const TodoItem = ({ id, text, isChecked }: TodoItemProps) => {
  const todoDispatch = useTodoDispatch();

  const handleToggleClick = () => {
    todoDispatch({
      type: "checked",
      payload: {
        id: id,
      },
    });
  };

  const handleRemoveClick = () => {
    todoDispatch({
      type: "remove",
      payload: {
        id: id,
      },
    });
  };

  return (
    <li className={styles.container}>
      <BsCheckCircle
        className={[
          styles.checkIcon,
          `${
            isChecked ? styles.checkedCircleIcon : styles.unCheckedCircleIcon
          }`,
        ].join(" ")}
        onClick={handleToggleClick}
      />
      <span className={isChecked ? styles.lineTrough : ""}>{text}</span>
      <IoIosRemoveCircleOutline
        className={styles.removeIcon}
        onClick={handleRemoveClick}
      />
    </li>
  );
};

export default TodoItem;
