import authReducer from "./reducers/authSlice";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: 'auth',
    storage
}

export const authPersistReducer = persistReducer(authPersistConfig, authReducer)