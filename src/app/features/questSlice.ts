import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export type QuestType = {
  name: string;
  description: string;
  completed: boolean;
  id: string;
};

type InitialState = QuestType[];

const initialState: InitialState = [
  {
    name: "Compelete App!",
    description: "Complete the quest log application within a week.",
    completed: false,
    id: uuidv4(),
  },
  {
    name: "Test the app!",
    description: "Test the quest log application.",
    completed: true,
    id: uuidv4(),
  },
];

const questSlice = createSlice({
  name: "quests",
  initialState,
  reducers: {
    // Add a new quest, payload should be an object.
    addQuest: (state, action: PayloadAction<QuestType>) => {
      state.push(action.payload);
    },
    // Delete a quest, payload should be quest id.
    deleteQuest: (state, action: PayloadAction<string>) => {
      return state.filter((quest) => action.payload !== quest.id);
    },
    // Set completed to true, payload should be quest id.
    completeQuest: (state, action: PayloadAction<string>) => {
      state.forEach((quest) => {
        if (quest.id === action.payload) {
          quest.completed = true;
        }
      });
    },
  },
});

export default questSlice.reducer;
export const { addQuest, deleteQuest, completeQuest } = questSlice.actions;
