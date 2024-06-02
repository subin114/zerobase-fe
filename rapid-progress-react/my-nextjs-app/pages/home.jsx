import Link from "next/link";

const Home = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/my/account">My Account</Link>
        </li>
        <li>
          <Link href="/my/info">My Info</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
