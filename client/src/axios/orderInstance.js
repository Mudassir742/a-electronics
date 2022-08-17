import axios from "axios";

const orderInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/order`,
})

export default orderInstance