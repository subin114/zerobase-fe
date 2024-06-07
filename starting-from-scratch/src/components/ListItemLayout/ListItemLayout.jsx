import cx from "clsx";
import styles from "./ListItemLayout.module.css";

const ListItemLayout = ({ children, className }) => {
  // console.log("Received className:", className);
  return (
    <div className={cx(styles.wrapper, className)}>
      <input
        type="checkbox"
        className={styles.checkbox}
        // value={checked}
        // onChange={onChangeCheckBox}
      />

      {children}
    </div>
  );
};

export default ListItemLayout;
