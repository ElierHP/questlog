import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header>
      <h1 className={`center ${styles.heading}`}>Quest Log</h1>
    </header>
  );
}
