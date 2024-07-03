import { ReactNode } from "react";

interface TodoListAreaProps {
  children: ReactNode;
  todoCount: number;
}

const TodoListArea = ({ children, todoCount }: TodoListAreaProps) => {
  if (todoCount < 1) {
    return null;
  }

  return <>{children}</>;
};

export default TodoListArea;
