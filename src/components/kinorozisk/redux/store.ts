import { configureStore } from "@reduxjs/toolkit";

import filmListSlice from "./filmListSlice";

const store = configureStore({
    reducer: {
        filmList: filmListSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch