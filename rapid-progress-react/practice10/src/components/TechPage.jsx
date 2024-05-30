import { Outlet, Link } from "react-router-dom";

const TechPage = () => {
  return (
    <>
      <h1>Tech Page</h1>
      <Link to="./javascript">JavaScript</Link> |<Link to="./react">React</Link>
      <Outlet />
    </>
  );
};

export default TechPage;
