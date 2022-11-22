import {
  completeQuest,
  deleteQuest,
  QuestType,
} from "../../app/features/questSlice";
import { useAppDispatch } from "../../app/hooks";
import Checklist from "../checklist/Checklist";
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
          <li className={styles.listItem} key={quest.name}>
            <h2>{quest.name}</h2>
            <p>{quest.description}</p>

            {/* If there is a checklist, render it. */}
            {quest.checklist ? (
              <Checklist checklist={quest.checklist} questId={quest.id} />
            ) : null}

            {!quest.completed ? (
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
            ) : (
              <div>
                <button
                  className="width-100"
                  onClick={() => dispatch(deleteQuest(quest.id))}
                >
                  clear quest
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
