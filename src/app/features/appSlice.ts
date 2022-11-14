import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  url: string;
};

const initialState: InitialState = {
  url: "/",
};

const questSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Used to change the Header highlighted anchor tag.
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },
});

export default questSlice.reducer;
export const { setUrl } = questSlice.actions;
