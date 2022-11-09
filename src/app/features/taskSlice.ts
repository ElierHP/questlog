import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type taskType = {
  name: string;
  description: string;
  completed: boolean;
};

type InitialState = {
  tasks: taskType[];
};

const initialState: InitialState = {
  tasks: [
    {
      name: "Compelete App!",
      description: "Complete the quest log application within a week.",
      completed: false,
    },
  ],
};

const taskSlice = createSlice({
  name: "quests",
  initialState,
  reducers: {
    // Add a new quest, payload should be an object.
    add: (state, action: PayloadAction<taskType>) => {
      state.tasks.push(action.payload);
    },
  },
});

export default taskSlice.reducer;
export const { add } = taskSlice.actions;
