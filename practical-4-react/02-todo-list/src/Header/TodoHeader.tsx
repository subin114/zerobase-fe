import styles from "./TodoHeader.module.scss";

interface TodoHeaderProps {
  count: number;
}

const TodoHeader = ({ count }: TodoHeaderProps) => {
  return (
    <header>
      <h1 className={styles.headerTitle}>
        <mark className={styles.todoCount}>{count}</mark>개의 할일
      </h1>
    </header>
  );
};

export default TodoHeader;
