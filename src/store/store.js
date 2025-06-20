import { configureStore } from "@reduxjs/toolkit";
import {persistStore} from 'redux-persist'
import { authPersistReducer } from "./persistConfig";

const store = configureStore({
    reducer: {
        auth: authPersistReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    "persist/PERSIST",
                    "persist/REHYDRATE",
                    "persist/PAUSE",
                    "persist/FLUSH",
                    "persist/PURGE",
                    "persist/REGISTER",
                ]
            }
        })
})

const persistor = persistStore(store)

export { store, persistor }
