import axios from "axios";

const productInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/product`,
});

export default productInstance;
