import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./reducers/accountReducer";
import messageThunkReducer from './reducers/sentMessageThunks';

export const store = configureStore({
    reducer: {
        account: accountReducer,
        sentMessageStatus: messageThunkReducer
    }
})