import React, { useState } from "react";
import { useQuery, useQueries, useMutation, useQueryClient } from "react-query";
import { getUser, updateNickname, getPosts } from "./../mocks/api";

// api를 통해 현재 닉네임값 가져오기
// handleSubmit : 업데이트된 inputValue를 서버에 전송해서, 닉네임 값 업데이트 하기

export default function Edit() {
  const [inputValue, setInputValue] = useState("");
  const queryClient = useQueryClient();

  // const { data: user } = useQuery("@getUser", getUser, {
  //   staleTime: Infinity,
  // });

  // const { data: posts } = useQuery("@getPosts", getPosts, {
  //   staleTime: Infinity,
  // });

  const results = useQueries([
    { queryKey: ["@getUser"], queryFn: getUser, staleTime: Infinity },
    { queryKey: ["@getPosts"], queryFn: getPosts, staleTime: Infinity },
  ]);

  console.log(results);

  const user = results[0].data;
  const posts = results[1].data;

  const mutation = useMutation(updateNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries("@getUser");
    },
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(inputValue);
  };

  return (
    <>
      <h1>Edit</h1>
      <h3>현재 닉네임: {user?.nickName}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          변경할 닉네임:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
      <ul>
        {posts?.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
