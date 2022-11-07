import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type questType = {
  name: string;
  description: string;
  completed: boolean;
};

type InitialState = {
  quests: questType[];
};

const initialState: InitialState = {
  quests: [
    {
      name: "Compelete App!",
      description: "Complete the quest log application within a week.",
      completed: false,
    },
  ],
};

const questSlice = createSlice({
  name: "quests",
  initialState,
  reducers: {
    // Add a new quest, payload should be an object.
    add: (state, action: PayloadAction<questType>) => {
      state.quests.push(action.payload);
    },
  },
});

export default questSlice.reducer;
export const { add } = questSlice.actions;
