import { useContext } from "react";
import { UserContext } from "../store/user";

const BlogPage = () => {
  const { dispatch } = useContext(UserContext);
  console.log(dispatch);

  return (
    <>
      <h1>Blog Page</h1>
      <button
        onClick={() => dispatch({ type: "changeJob", text: "BE-developer" })}
      >
        Change Job
      </button>
    </>
  );
};

export default BlogPage;
