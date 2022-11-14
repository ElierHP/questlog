import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export type QuestType = {
  name: string;
  description: string;
  completed: boolean;
  id: string;
};

type InitialState = QuestType[];

const initialState: InitialState = [];

const questSlice = createSlice({
  name: "quests",
  initialState,
  reducers: {
    setQuests: (state, action: PayloadAction<InitialState>) => {
      return [...action.payload];
    },
    // Add a new quest, payload should be an object.
    addQuest: (state, action: PayloadAction<QuestType>) => {
      state.push(action.payload);
      localStorage.setItem("quests", JSON.stringify(state));
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
export const { addQuest, deleteQuest, completeQuest, setQuests } =
  questSlice.actions;
