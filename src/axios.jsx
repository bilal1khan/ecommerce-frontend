import axios from "axios";

const API = axios.create({
  baseURL: "https://ecomxpressbackend.azurewebsites.net/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;
