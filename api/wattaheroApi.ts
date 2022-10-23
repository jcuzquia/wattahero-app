import axios from "axios";

const wattaheroApi = axios.create({
  baseURL: "/api",
});

export default wattaheroApi;
