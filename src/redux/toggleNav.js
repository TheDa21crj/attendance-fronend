import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "toggleNav",
    initialState: {
        toggle: "false",
    },
    reducers: {
        toggleN: (state, action) => {
            state.toggle = action.payload.toggle;
        },
    },
});

export const { toggleN } = toggleSlice.actions;
export default toggleSlice.reducer;