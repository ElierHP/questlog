import styles from "./Header.module.scss";
import { useAppDispatch } from "../../app/hooks";
import { add } from "../../app/features/taskSlice";
import { BsExclamationLg } from "react-icons/bs";

export default function Header() {
  const dispatch = useAppDispatch();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Heading */}
        <h1 className={`center ${styles.heading}`}>Task Notes</h1>

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
                  name: "New Task",
                  description: "Amazing task to complete",
                  completed: false,
                })
              )
            }
          >
            New Task!
          </li>
          <li>Current</li>
          <li>Completed</li>
        </ul>
      </nav>
    </header>
  );
}
