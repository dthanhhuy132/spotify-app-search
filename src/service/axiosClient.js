import axios from "axios";

const baseURL = "https://api.spotify.com";

const TOKEN =
  "BQDuphsjva-1erK8Y415gccGqLUHpAvHjBsGKj2HmUtt51YEMpt5mpvOth8915ydFBmR3_XhEAieIFq-TKYvHEaFqFTUcEEKb-2HnPC18OH4ekBygixigpsN2vitqEdWnC8n5kwdqtR1XVznUdqLI9OYr8DvEDoFO2M";

console.log("env", process.env);

const axiosClient = axios.create({
  baseURL,
  headers: {
    Authorization: "Bearer " + TOKEN,
  },
});

export default axiosClient;
