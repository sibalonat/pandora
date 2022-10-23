import { userSlice } from './services/userSlice';
import { configureStore } from "@reduxjs/toolkit";

// userSlice

export const rootReducer = {
    user: userSlice.reducer
}

export const storeCreator = () => configureStore({
    reducer: rootReducer
})

export const store = storeCreator()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch