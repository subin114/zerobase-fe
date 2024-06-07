import styles from "./App.module.css";
import Header from "./layout/Header/Header";
import ListContainer from "./layout/ListContainer/ListContainer";
import Footer from "./layout/Footer/Footer";
import axios from "axios";

function App() {
  async function getData() {
    const data = await axios.get(
      `https://api.github.com/repos/facebook/react/issues`
    );
    console.log({ data });
  }

  getData();

  return (
    <>
      <div className={styles.nav}>Nav</div>
      <Header />
      <ListContainer />
      <Footer />
    </>
  );
}

export default App;
