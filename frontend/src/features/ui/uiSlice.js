import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState:{
        selectedUserId: null
    },
    reducers: {
        setSelectedUserId: (state,action) => {
            state.selectedUserId  = action.payload
        } 
    }
})

export const { setSelectedUserId } = uiSlice.actions;
export default uiSlice.reducer;