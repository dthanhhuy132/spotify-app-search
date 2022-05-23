import axios from "axios";

const baseURL = "https://api.spotify.com";

const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("spotifyAuthToken"),
  },
});

export default axiosClient;
