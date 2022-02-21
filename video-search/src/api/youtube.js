import axios from "axios";
//get the key from console.developers.google.com
const KEY = "AIzaSyA5lGSiBHKiyDUgShEEkKRPGmKPiBHF6mo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
