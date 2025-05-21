import axios from "axios";

const Server = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER
});

export default Server;