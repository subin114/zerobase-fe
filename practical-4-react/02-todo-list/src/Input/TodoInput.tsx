import { RiChatNewLine } from "react-icons/ri";
import styles from "./TodoInput.module.scss";
import { ChangeEvent, FormEvent } from "react";

interface TodoInputProps {
  text: string;
  onTextChange: (text: string) => void;
  onSubmit: () => void;
}

const TodoInput = ({ text, onTextChange, onSubmit }: TodoInputProps) => {
  const handleInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
    onTextChange(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit();
  };

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="해야할 Todo"
          value={text}
          onChange={handleInputChanged}
        />
        <button type="submit">
          <RiChatNewLine />
        </button>
      </form>
    </section>
  );
};

export default TodoInput;
