import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type questType = {
  name: string;
};
type InitialState = {
  quests: questType[];
};

const initialState: InitialState = {
  quests: [
    {
      name: "Compelete App!",
    },
  ],
};

const questSlice = createSlice({
  name: "quests",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.quests.push({
        name: action.payload,
      });
    },
  },
});

export default questSlice.reducer;
export const { add } = questSlice.actions;
