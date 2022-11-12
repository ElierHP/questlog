import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type QuestType = {
  name: string;
  description: string;
  completed: boolean;
};

type InitialState = QuestType[];

const initialState: InitialState = [
  {
    name: "Compelete App!",
    description: "Complete the quest log application within a week.",
    completed: false,
  },
  {
    name: "Test the app!",
    description: "Test the quest log application.",
    completed: true,
  },
];

const questSlice = createSlice({
  name: "quests",
  initialState,
  reducers: {
    // Add a new quest, payload should be an object.
    add: (state, action: PayloadAction<QuestType>) => {
      state.push(action.payload);
    },
  },
});

export default questSlice.reducer;
export const { add } = questSlice.actions;
