import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import vedioSlice from "./vedioSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    vedio: vedioSlice,
  },
});

export default store;
