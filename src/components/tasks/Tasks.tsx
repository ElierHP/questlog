import { useAppSelector } from "../../app/hooks";
import styles from "./Tasks.module.scss";

export default function Quests() {
  const { tasks } = useAppSelector((state) => state.tasks);

  return (
    <main className={styles.main}>
      <ul className={styles.list}>
        {/* Render list items based on tasks global state */}
        {tasks.map((task) => (
          <li key={task.name}>
            <h2>{task.name}</h2>
            <p>{task.description}</p>
            <div>
              <button className={styles.button}>Complete Task</button>
              <p className={"center font-small"}>abandon task</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
