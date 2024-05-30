import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ReactPage = () => {
  const [docs, setDocs] = useState([]);

  // const docs = [
  //   {
  //     id: 1,
  //     title: "리액트 공부를 시작하면서",
  //     date: "05/25/2024",
  //   },
  //   {
  //     id: 2,
  //     title: "Vite로 리액트 프로젝트 시작하기",
  //     date: "05/26/2024",
  //   },
  //   {
  //     id: 3,
  //     title: "이제는 사용해보자 useMemo & useCallback",
  //     date: "05/27/2024",
  //   },
  //   {
  //     id: 4,
  //     title: "리액트 프로젝트에 Prettier 적용하기",
  //     date: "05/28/2024",
  //   },
  //   {
  //     id: 5,
  //     title: "리액트의 setState() 제대로 사용하기",
  //     date: "05/29/2024",
  //   },
  // ];

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json(res);
      // console.log(result);
      // setDocs(result);
      return result;
    }

    fetchData().then((res) => {
      setDocs(res);
    });
  }, []);

  return (
    <>
      {docs.map((doc) => (
        <Link
          to={`${doc.id}`}
          key={doc.id}
          style={{ display: "block", margin: "1rem 0", color: "skyblue" }}
        >
          {doc.title}
        </Link>
      ))}
      {/* <Outlet /> */}
    </>
  );
};

export default ReactPage;
