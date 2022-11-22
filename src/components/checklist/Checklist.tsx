import styles from "./Checklist.module.scss";
import { checkQuest, QuestChecklist } from "../../app/features/questSlice";
import { useAppDispatch } from "../../app/hooks";

type ChecklistType = {
  checklist: QuestChecklist[];
  questId: string;
};

export default function Checklist({ checklist, questId }: ChecklistType) {
  const dispatch = useAppDispatch();

  return (
    <ul className={styles.checklist}>
      {checklist.map((listItem) => (
        <li key={listItem.id}>
          {listItem.name}
          {/* If name isn't an empty string, display input */}
          {listItem.name !== "" && (
            <input
              type="checkbox"
              name={listItem.name}
              id={listItem.id}
              checked={listItem.checked}
              onChange={() =>
                dispatch(checkQuest({ id: listItem.id, questId }))
              }
            />
          )}
        </li>
      ))}
    </ul>
  );
}
