import styles from "./App.module.css";
import Header from "./layout/Header/Header";
import ListContainer from "./layout/ListContainer/ListContainer";
import Footer from "./layout/Footer/Footer";

function App() {
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
