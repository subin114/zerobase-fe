import { useRef } from "react";

// ref를 활용 -> 비제어 컴포넌트 방식으로 Form을 다뤄보자!
const UnControlledForm = () => {
  const inputRef = useRef();

  console.log(inputRef);
  console.log(inputRef.current);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임 : </label>
      <input type="text" name="nickname" ref={inputRef} />
      <input type="submit" value="제출" />
    </form>
  );
};

export default UnControlledForm;
