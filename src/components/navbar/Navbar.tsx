import styles from "./Navbar.module.scss";
import { useAppDispatch } from "../../app/hooks";
import { add } from "../../app/features/questSlice";
import { BsExclamationLg } from "react-icons/bs";

export default function Navbar() {
  const dispatch = useAppDispatch();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Heading */}
        <h1 className={`center ${styles.heading}`}>Quest Log</h1>

        {/* Exclamation Icon */}
        <div className={styles.iconContainer}>
          <BsExclamationLg className={styles.icon} size={37} />
        </div>
      </div>

      {/* Nav list */}
      <nav>
        <ul className={styles.navlist}>
          <li
            onClick={() =>
              dispatch(
                add({
                  name: "New Quest",
                  description: "Amazing quest to complete",
                  completed: false,
                })
              )
            }
          >
            New Quest!
          </li>
          <li>Current</li>
          <li>Completed</li>
        </ul>
      </nav>
    </header>
  );
}
