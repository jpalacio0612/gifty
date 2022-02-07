import axios from "axios";

const token = process.env.REACT_APP_GIPHY_TOKEN;

const instance = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs/",
  params: {
    api_key: token,
  },
});

export default instance;
