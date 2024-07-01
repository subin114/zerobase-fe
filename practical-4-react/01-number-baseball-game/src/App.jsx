import { useState } from "react";
import "./App.scss";
import { generateRandomNumber } from "./random";
import { useEffect } from "react";
import Logs from "./Logs";

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [answer, setAnswer] = useState("");
  const [logs, setLogs] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {}, [randomNumber]);

  const handleAnswerChanged = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    const answers = answer.split("").map((item) => Number(item));

    if (answers.some((num) => isNaN(num))) {
      alert("숫자만 입력해주세요.");
      return;
    }

    if (answers.length !== 4) {
      alert("4자리 숫자를 입력해주세요.");
      return;
    }

    const isDuplicate = answers.some((num) => {
      // [1, 2, 3, 4]
      // -> 앞에서 탐색했을 때 idx 0
      // <- 뒤에서 탐색했을 때 idx 0
      // [1, 1, 2, 4]
      // -> 앞에서 탐색했을 때 idx 0
      // <- 뒤에서 탐색했을 때 idx 1

      return answers.indexOf(num) !== answers.lastIndexOf(num);
    });

    if (isDuplicate) {
      alert("입력 값에 중복이 있어요.");
      return;
    }

    console.log(isDuplicate);

    const { strike, ball } = randomNumber.reduce(
      (prev, cur, idx) => {
        // 스트라이크
        if (answers[idx] === cur) {
          return {
            ...prev,
            strike: prev.strike + 1,
          };
        }

        // 볼
        if (answers.includes(cur)) {
          return {
            ...prev,
            ball: prev.ball + 1,
          };
        }

        return prev;
      },
      {
        strike: 0,
        ball: 0,
      }
    );

    if (strike === 4) {
      alert("정답입니다!");
      setLogs([...logs, `${answer} (축하합니다. 정답입니다!)`]);
      setIsSuccess(true);
      return;
    }

    setLogs([...logs, `${answer} (strike: ${strike}, ball: ${ball})`]);
  };

  const handleRetry = () => {
    setRandomNumber(generateRandomNumber());
    setAnswer("");
    setLogs([]);
    setIsSuccess(false);
  };

  return (
    <div className="App">
      <h1>숫자 야구 게임</h1>
      <header className="header">
        {isSuccess ? `정답: ${answer}` : "------"}
      </header>
      <section>
        <input
          type="text"
          value={answer}
          onChange={handleAnswerChanged}
          disabled={isSuccess}
        />
        {isSuccess ? (
          <button onClick={handleRetry}>다시하기</button>
        ) : (
          <button onClick={handleSubmit}>맞춰보기</button>
        )}
      </section>
      <Logs logs={logs} />
    </div>
  );
}

export default App;
