import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState:{
        selectedUserId: null
    },
    reducers: {
        setSelectedUserId: (state,action) => {
            state.selectedUserId  = action.payload
        },
        clearSelectedUserId: (state)  => {
            state.selectedUserId = null
        }
    }
})

export const { setSelectedUserId,clearSelectedUserId } = uiSlice.actions;
export default uiSlice.reducer;