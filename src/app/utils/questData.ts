import { v4 as uuidv4 } from "uuid";
import { QuestType } from "../features/questSlice";

// Initial quest data, on app first launch.
export const questData: QuestType[] = [
  {
    name: "Welcome to Quest-Log!",
    description:
      "Questlog is a task management application with a game-like theme. Your daily tasks shouldn't be boring. Embark on your new adventures and complete all of your quests!",
    completed: false,
    id: uuidv4(),
    checklist: [
      {
        name: "Create a new quest.",
        checked: false,
        id: uuidv4(),
      },
      {
        name: "Complete a quest.",
        checked: false,
        id: uuidv4(),
      },
      {
        name: "Abandon a quest.",
        checked: false,
        id: uuidv4(),
      },
      {
        name: "Check the completed quests.",
        checked: false,
        id: uuidv4(),
      },
      {
        name: "Checkmark a list item.",
        checked: false,
        id: uuidv4(),
      },
    ],
  },
  {
    name: "Create a new quest!",
    description:
      'You can create new quests by going to the "New" section in the navigation bar. Start using the application by creating a new quest!',
    completed: false,
    id: uuidv4(),
    checklist: [
      {
        name: "Create a new quest.",
        checked: false,
        id: uuidv4(),
      },
      {
        name: "Checkmark this item.",
        checked: false,
        id: uuidv4(),
      },
    ],
  },
  {
    name: "Launch this application!",
    description:
      "You have successfully launched the quest log application. Great job! This is where all the completed quests go. You may clear this quest.",
    completed: true,
    id: uuidv4(),
    checklist: [
      {
        name: "Check this page.",
        checked: true,
        id: uuidv4(),
      },
      {
        name: "Launch application.",
        checked: true,
        id: uuidv4(),
      },
      {
        name: "Look at this page.",
        checked: true,
        id: uuidv4(),
      },
      {
        name: "Clear this quest.",
        checked: true,
        id: uuidv4(),
      },
      {
        name: "Check the navbar.",
        checked: true,
        id: uuidv4(),
      },
    ],
  },
];
