import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./components/MainPage";
import TechPage from "./components/TechPage";
import BlogPage from "./components/BlogPage";
import JavaScriptPage from "./components/JavaScriptPage";
import ReactPage from "./components/ReactPage";
import ReactDocPage from "./components/ReactDocPage";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <h1
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "skyblue",
          cursor: "pointer",
          display: "inline",
        }}
      >
        Logo
      </h1>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="tech" element={<TechPage />}>
          <Route path="javascript" element={<JavaScriptPage />} />
          <Route path="react" element={<ReactPage />} />
          <Route path="react/:docId" element={<ReactDocPage />} />
        </Route>
        <Route path="blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
