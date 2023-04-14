import { configureStore } from "@reduxjs/toolkit";

import toggleReducer from "./toggleNav";
import userData from "./user";

export default configureStore({
  reducer: {
    toggle: toggleReducer,
    user: userData,
  },
});
