import "./App.css";
import KakaoMapScriptLoader from "./Map/KakaoMapScriptLoader";
import DynamicMap from "./Map/DynamicMap";

function App() {
  return (
    <KakaoMapScriptLoader>
      <DynamicMap />
    </KakaoMapScriptLoader>
  );
}

export default App;
