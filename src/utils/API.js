import axios from "axios";

const Server = axios.create({
    baseURL: process.env.REACT_APP_SERVER
});

export default Server;