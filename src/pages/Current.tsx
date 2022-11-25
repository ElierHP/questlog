import Quests from "../components/quests/Quests";

export default function Current() {
  return (
    <div>
      <h2 className="center">Current Quests</h2>
      <Quests showCompleted={false} />
    </div>
  );
}
