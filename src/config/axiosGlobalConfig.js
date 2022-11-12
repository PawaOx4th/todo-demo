import axios from "axios"

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API,
  headers: {
    userkey: "usersecret"
  }
})

export default http
