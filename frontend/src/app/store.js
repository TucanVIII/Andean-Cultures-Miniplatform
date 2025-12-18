import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import uiReducer from "../features/ui/uiSlice.js";

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        // auth: authReducer, 
        // sections: sectionsReducer,
        ui: uiReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})