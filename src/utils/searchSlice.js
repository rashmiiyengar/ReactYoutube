import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    info:[]
  },
  reducers: {
    cacheResults: (state, action) => {
      state.info.push(action.payload)
    },
  },
});
export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
