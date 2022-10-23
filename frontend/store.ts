import { userSlice } from './services/userSlice';
import { configureStore } from "@reduxjs/toolkit";


export const rootReducer = {
    user: userSlice.reducer
}


export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch