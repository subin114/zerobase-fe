import cx from "clsx";
import styles from "./Badge.module.css";

const Badge = ({ title, color }) => {
  return <span className={cx(styles.badge, styles[color])}>{title}</span>;
};

export default Badge;
