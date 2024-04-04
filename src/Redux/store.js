import { configureStore } from "@reduxjs/toolkit";
import managerReducer from "./states/managerSlice";


export const store = configureStore({
    reducer: {
        managerReducer: managerReducer,
    }
})