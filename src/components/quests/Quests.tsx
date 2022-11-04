import { useAppSelector } from "../redux/hooks";

export default function Quests() {
  const { quests } = useAppSelector((state) => state.quests);

  return (
    <div>
      <ul>
        {quests.map((quest) => (
          <li key={quest.name}>{quest.name}</li>
        ))}
      </ul>
    </div>
  );
}
