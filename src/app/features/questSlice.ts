import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      // Set quests state to the payload. Used on first page load.
      return [...action.payload];
    },

    // Add a new quest, payload should be an object.
    addQuest: (state, action: PayloadAction<QuestType>) => {
      state.push(action.payload);
      // Save to local storage.
      localStorage.setItem("quests", JSON.stringify(state));
    },

    // Delete a quest, payload should be quest id.
    deleteQuest: (state, action: PayloadAction<string>) => {
      const editedQuests = state.filter((quest) => action.payload !== quest.id);

      // If there are no quests left
      if (editedQuests.length === 0) {
        // delete key from local storage.
        localStorage.removeItem("quests");
      } else {
        // Save to local storage.
        localStorage.setItem("quests", JSON.stringify(editedQuests));
      }

      return editedQuests;
    },

    // Set completed to true, payload should be quest id.
    completeQuest: (state, action: PayloadAction<string>) => {
      state.forEach((quest) => {
        if (quest.id === action.payload) {
          quest.completed = true;
          // Save to local storage.
          localStorage.setItem("quests", JSON.stringify(state));
        }
      });
    },
  },
});

export default questSlice.reducer;
export const { addQuest, deleteQuest, completeQuest, setQuests } =
  questSlice.actions;
