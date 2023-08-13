import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

export const getAllProductHttp = () => axios.get("/product");

export const signUpHttp = (data) => axios.post("/user/register", data);

export const loginHttp = (data) => axios.post("/user/login", data);
