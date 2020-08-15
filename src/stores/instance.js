import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8000"
  baseURL: "https://sheltered-hollows-72913.herokuapp.com",
});

export default instance;
