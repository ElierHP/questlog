import styles from "./Checklist.module.scss";
import { checkQuest, QuestType } from "../../app/features/questSlice";
import { useAppDispatch } from "../../app/hooks";

type ChecklistType = {
  quest: QuestType;
};

export default function Checklist({ quest }: ChecklistType) {
  const dispatch = useAppDispatch();

  return (
    <ul className={styles.checklist}>
      {quest.checklist.map((listItem) => (
        <li key={listItem.id}>
          <label htmlFor={listItem.name}> {listItem.name}</label>
          {/* If name isn't an empty string, display input */}
          {listItem.name !== "" && (
            <input
              type="checkbox"
              name={listItem.name}
              id={listItem.name}
              checked={listItem.checked}
              onChange={() =>
                dispatch(checkQuest({ id: listItem.id, questId: quest.id }))
              }
              data-testid={listItem.id}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
