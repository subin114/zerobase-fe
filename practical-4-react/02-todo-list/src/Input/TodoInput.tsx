import { RiChatNewLine } from "react-icons/ri";
import styles from "./TodoInput.module.scss";
import { ChangeEvent, FormEvent } from "react";
import {
  useInputTodoDispatch,
  useInputTodoState,
  useTodoDispatch,
} from "../Todo/TodoProvider";

const TodoInput = () => {
  const todoDispatch = useTodoDispatch();
  const inputDispatch = useInputTodoDispatch();
  const inputState = useInputTodoState();
  // text={inputState.text}
  // onTextChange={handleTextChange}
  // onSubmit={handleSubmit}

  const handleInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
      type: "change",
      payload: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputState.text) {
      return;
    }

    todoDispatch({
      type: "add",
      payload: {
        text: inputState.text,
      },
    });

    inputDispatch({
      type: "clear",
    });
  };

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="해야할 Todo"
          value={inputState.text}
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
