import { configureStore } from "@reduxjs/toolkit";
import managerReducer from "./states/managerSlice";
import howlerReducer from "./states/audioHowlerSlice";


export const store = configureStore({
    reducer: {
        managerReducer: managerReducer,
        howler:howlerReducer
    }
})