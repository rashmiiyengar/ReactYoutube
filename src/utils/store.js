import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import vedioSlice from "./vedioSlice";
import liveChatSlice from "./liveChatSlice";


const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    vedio: vedioSlice,
    liveChat:liveChatSlice
  },
});

export default store;
