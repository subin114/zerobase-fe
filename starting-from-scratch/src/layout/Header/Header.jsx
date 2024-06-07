import Button from "../../components/Button/Button";
import Space from "../../components/Space/Space";
import Tabs from "../../components/Tabs/Tabs";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.buttonContainer}>
          <Button className={styles.button}>Watch</Button>
          <Space />
          <Button className={styles.button}>
            Fork
            <div className={styles.circle}>5</div>
          </Button>
          <Space />
          <Button className={styles.button}>Star</Button>
        </div>
        <Tabs title="title" number={5} />
      </div>
    </div>
  );
};

export default Header;
