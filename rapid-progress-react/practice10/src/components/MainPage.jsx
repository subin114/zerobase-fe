import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <h1>Main Page</h1>
      <Link to="/blog">Blog</Link> | <Link to="/tech">Tech</Link>
    </>
  );
};

export default MainPage;
