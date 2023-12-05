import { createSlice } from '@reduxjs/toolkit';

export const vedioSlice = createSlice({
  name: 'vedio',
  initialState: null,
  reducers: {
    setVedio: (state, action) => {
      return action.payload;
    },
  },
});

export const { setVedio } = vedioSlice.actions;

export const selectVedio = (state) => state.vedio;

export default vedioSlice.reducer;