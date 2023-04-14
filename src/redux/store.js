import { configureStore } from "@reduxjs/toolkit";

import userData from "./user";

export default configureStore({
  reducer: {
    user: userData,
  },
});
