import Quests from "../components/quests/Quests";
import { useAppSelector } from "../app/hooks";

export default function Current() {
  // Get quests from global store with completed: false
  const quests = useAppSelector((state) =>
    state.quests.filter((quest) => !quest.completed)
  );

  return (
    <div>
      <h2 className="center">Current Quests</h2>
      <Quests quests={quests} />
    </div>
  );
}
