import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { CgRadioCheck } from "react-icons/cg";
import styles from "./TodoListTools.module.scss";

interface TodoListToolsProps {
  onToggleAllClick: () => void;
  onRemoveAllClick: () => void;
  isAllChecked: boolean;
}

const TodoListTools = ({
  onToggleAllClick,
  onRemoveAllClick,
  isAllChecked,
}: TodoListToolsProps) => {
  const handleToggleAllClick = () => {
    onToggleAllClick();
  };
  const handleRemoveAllClick = () => {
    onRemoveAllClick();
  };

  return (
    <section className={styles.container}>
      <button onClick={handleToggleAllClick}>
        {isAllChecked ? (
          <>
            <CgRadioCheck className={styles.checkAllIcon} />
            전체해제
          </>
        ) : (
          <>
            <IoCheckmarkDoneCircleOutline className={styles.checkAllIcon} />
            전체완료
          </>
        )}
      </button>
      <button className={styles.removeAllButton} onClick={handleRemoveAllClick}>
        <MdDelete className={styles.removeAllIcon} />
        전체삭제
      </button>
    </section>
  );
};

export default TodoListTools;
