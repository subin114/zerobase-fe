import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getUser } from "../mocks/api";

export default function Home() {
  const navigate = useNavigate();

  const { data } = useQuery("@getUser", getUser, {
    staleTime: Infinity,
    suspense: true,
  });

  // if (isLoading) return <span>Loading...</span>;

  return (
    <div>
      <h1>Home</h1>
      <h2>Hello, {data?.nickName}</h2>
      <button onClick={() => navigate("/edit")}>Go Edit Page</button>
    </div>
  );
}
