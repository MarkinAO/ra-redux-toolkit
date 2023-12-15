import { configureStore } from "@reduxjs/toolkit";

import filmListSlice from "./filmListSlice";
import filmCardSlice from "./filmCardSlice";

const store = configureStore({
    reducer: {
        filmList: filmListSlice,
        filmCard: filmCardSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch