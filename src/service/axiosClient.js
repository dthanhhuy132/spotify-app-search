import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api.spotify.com";

const TOKEN = Cookies.get("spotifyAuthToken");

const axiosClient = axios.create({
  baseURL,
  headers: {
    Authorization: "Bearer " + TOKEN,
  },
});

export default axiosClient;
