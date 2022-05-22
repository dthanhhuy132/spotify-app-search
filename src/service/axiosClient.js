import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api.spotify.com";
console.log(Cookies.get("spotifyAuthToken"));

const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer " + Cookies.get("spotifyAuthToken"),
  },
});

export default axiosClient;
