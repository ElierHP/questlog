import {
  completeQuest,
  deleteQuest,
  QuestType,
} from "../../app/features/questSlice";
import { useAppDispatch } from "../../app/hooks";
import styles from "./Quests.module.scss";

type QuestsProps = {
  quests: QuestType[];
};

export default function Quests({ quests }: QuestsProps) {
  const dispatch = useAppDispatch();

  return (
    <main className={styles.main}>
      <ul className={styles.list}>
        {/* Render list items based on tasks global state */}
        {quests.map((quest) => (
          <li key={quest.name}>
            <h2>{quest.name}</h2>
            <p>{quest.description}</p>
            <div className={styles.btnContainer}>
              {/* Complete Button */}
              <button
                className="width-100"
                onClick={() => dispatch(completeQuest(quest.id))}
              >
                Complete Quest
              </button>
              {/* Delete Button */}
              <button
                className={styles.deleteButton}
                onClick={() => dispatch(deleteQuest(quest.id))}
              >
                abandon quest
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
