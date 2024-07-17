import "./App.css";
import KakaoMapScriptLoader from "./Map/KakaoMapScriptLoader";
import DynamicMap from "./Map/DynamicMap";
import SearchLocation from "./Map/SearchLocation";

function App() {
  return (
    <KakaoMapScriptLoader>
      <DynamicMap />
      <SearchLocation />
    </KakaoMapScriptLoader>
  );
}

export default App;
