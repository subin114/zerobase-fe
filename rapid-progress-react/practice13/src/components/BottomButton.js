import React from "react";
import styles from "./BottomButton.module.css";

export default function BottomButton({ onClick, children }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
