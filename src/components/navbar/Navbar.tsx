import styles from "./Navbar.module.scss";
import { useAppDispatch } from "../redux/hooks";
import { add } from "../redux/features/questSlice";
import { BsExclamationLg } from "react-icons/bs";

export default function Navbar() {
  const dispatch = useAppDispatch();
  return (
    <header>
      <div className={styles.wrapper}>
        <h1 className={`center ${styles.heading}`}>Quest Log</h1>
        <div className={styles.btnContainer}>
          <BsExclamationLg
            className={styles.icon}
            onClick={() => dispatch(add("New Quest!"))}
            size={37}
          />
        </div>
      </div>
    </header>
  );
}
