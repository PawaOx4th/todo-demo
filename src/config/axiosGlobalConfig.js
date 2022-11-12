import axios from "axios"

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
  //   baseURL: process.env.REACT_APP_BASE_URL_API,
  //   withCredentials: false,
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Credentials": true
  //   }
})

export default http
