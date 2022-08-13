import axios from "axios";

const categoryInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/category`,
});

export default categoryInstance;
