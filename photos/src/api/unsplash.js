import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID mT1ZOKUGQ6Y-8zq2pkoiMghzEKjrw2h5OQwXUU6JsFI",
  },
});
