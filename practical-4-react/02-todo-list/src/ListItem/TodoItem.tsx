import styles from "./TodoItem.module.scss";
import { BsCheckCircle } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";

interface TodoItemProps {
  id: number;
  text: string;
  isChecked: boolean;
  onToggleClick: (id: number) => void;
  onRemoveClick: (id: number) => void;
}

const TodoItem = ({
  id,
  text,
  isChecked,
  onToggleClick,
  onRemoveClick,
}: TodoItemProps) => {
  const handleToggleClick = () => {
    onToggleClick(id);
  };

  const handleRemoveClick = () => {
    onRemoveClick(id);
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
