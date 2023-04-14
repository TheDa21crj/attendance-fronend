import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    _id: "",
    email: "",
    imgSrc: "",
  },
  reducers: {
    adduser: (state, action) => {
      state._id = action.payload._id;
      state.email = action.payload.email;
      state.imgSrc = action.payload.imgSrc;
    },
  },
});

export const { adduser } = userDataSlice.actions;
export default userDataSlice.reducer;
