import {
  checkQuest,
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
          <li className={styles.listItem} key={quest.name}>
            <h2>{quest.name}</h2>
            <p>{quest.description}</p>

            {/* If there is a checklist, render it. */}
            {quest.checklist && (
              <ul className={styles.checklist}>
                {quest.checklist.map((listItem) => (
                  <li key={listItem.id}>
                    {listItem.name}

                    {/* If name isn't an empty string, display input */}
                    {listItem.name !== "" && (
                      <input
                        type="checkbox"
                        name={listItem.id}
                        id={listItem.id}
                        checked={listItem.checked}
                        onChange={() =>
                          dispatch(
                            checkQuest({ id: listItem.id, questId: quest.id })
                          )
                        }
                      />
                    )}
                  </li>
                ))}
              </ul>
            )}

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
              <button onClick={() => dispatch(deleteQuest(quest.id))}>
                delete quest
              </button>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
