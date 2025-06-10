import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    isLogin: false,
    token: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email;
            state.isLogin = true;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.email = '';
            state.isLogin = false;
            state.token = '';
        }
    }
})


export const {login, logout} = authSlice.actions;

export default authSlice.reducer