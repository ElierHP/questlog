import Quests from "../components/quests/Quests";

export default function Completed() {
  return (
    <div>
      <h2 className="center">Completed Quests</h2>
      <Quests showCompleted={true} />
    </div>
  );
}
