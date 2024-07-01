const Logs = ({ logs }) => {
  return (
    <>
      <h2>기록</h2>
      <ol>
        {logs.map((log, idx) => (
          <li key={`${log}_${idx}`}>{log}</li>
        ))}
      </ol>
    </>
  );
};

export default Logs;
