import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import UserStore from "./store/user.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserStore>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserStore>
);
