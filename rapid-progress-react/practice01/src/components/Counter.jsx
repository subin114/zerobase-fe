import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const operators = ["+", "-", "*"];
  const [operator, setOperator] = useState(operators[0]);

  return (
    <div>
      <button
        onClick={() => {
          let result;
          if (operator === "+") result = count + 1;
          if (operator === "-") result = count - 1;
          if (operator === "*") result = count * 1;
          setCount(result);
        }}
      >
        {operator}1
      </button>
      <button onClick={() => setShow(!show)}>Show and Hide</button>
      <button
        onClick={() => {
          const idx = Math.floor(Math.random() * operators.length);
          setOperator(operators[idx]);
        }}
      >
        Change Operator
      </button>
      <br />
      {show && `Counter: ${count}`}
    </div>
  );
};

export default Counter;
