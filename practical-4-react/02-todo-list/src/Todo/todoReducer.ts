export type TodoType = {
  id: number;
  text: string;
  isChecked: boolean;
};

export type TodoStateType = {
  todos: TodoType[];
};

// add, remove, checked, allCheck, allRemove
export type TodoActionType =
  | {
      type: "add";
      payload: {
        text: string;
      };
    }
  | {
      type: "checked";
      payload: {
        id: number;
      };
    }
  | {
      type: "remove";
      payload: {
        id: number;
      };
    }
  | {
      type: "allChecked";
      payload: boolean;
    }
  | {
      type: "allRemove";
    };

export const todoReducer = (state: TodoStateType, action: TodoActionType) => {
  switch (action.type) {
    case "add":
      return {
        todos: state.todos.concat({
          id: Date.now(),
          text: action.payload.text,
          isChecked: false,
        }),
      };
    case "checked":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              isChecked: !todo.isChecked,
            };
          }
          return todo;
        }),
      };
    case "remove":
      return {
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };
    case "allChecked":
      return {
        todos: state.todos.map((todo) => {
          return {
            ...todo,
            isChecked: !action.payload,
          };
        }),
      };
    case "allRemove":
      return {
        todos: [],
      };
  }
};
