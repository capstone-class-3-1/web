import { configureStore } from "@reduxjs/toolkit";
import {persistStore} from 'redux-persist'
import { authPersistReducer } from "./persistConfig";

const store = configureStore({
    reducer: {
        auth: authPersistReducer,
    }
})

const persistor = persistStore(store)

export { store, persistor }
