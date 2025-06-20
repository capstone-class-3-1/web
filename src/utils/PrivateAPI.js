import axios from "axios";
import { store } from "../store/store";

const PrivateServer = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER,
    timeout: 5000,
});

PrivateServer.interceptors.request.use(
    async (config) => {
        const state = store.getState();
        const token = state.auth.token;

        config.headers.Authorization = `Bearer ${token}`

        return config
    }
)

export default PrivateServer;