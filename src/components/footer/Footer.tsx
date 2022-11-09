import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`center ${styles.footer}`}>
      Built with React. All Rights Reserved, Copyright &copy; 2022.
    </footer>
  );
}
