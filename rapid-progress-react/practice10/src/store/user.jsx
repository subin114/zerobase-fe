/* eslint-disable no-unreachable */
import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialUser = {
  name: "hwarari",
  job: "FE-developer",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "changeJob":
      return { ...state, job: action.text };
      break;

    default:
      break;
  }
};

const UserStore = (props) => {
  const [user, dispatch] = useReducer(userReducer, initialUser);
  console.log("user", user);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
