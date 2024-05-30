import { useParams } from "react-router-dom";

const ReactDocPage = () => {
  const params = useParams();
  console.log(params);

  return (
    <>
      <h2>ReactDocPage ##{params.docId}</h2>
    </>
  );
};

export default ReactDocPage;
