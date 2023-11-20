import axios from "axios";
import Cookies from "js-cookie";

// Select one of the following BASE_URLs
export const NEW_BASE_URL = import.meta.env.VITE_BASE_URL;
export const BASE_HEADERS = (headers) => {
  headers.set("Accept", "application/json");
  headers.set("Authorization", `Bearer ${Cookies.get("authToken")}`);
  headers.set("Accept-Language", "en");
  return headers;
};

export const BASE_AXIOS_HEADERS = () => ({
  Authorization: `Bearer ${Cookies.get("authToken")}`,
});

export const axiosInstance = axios.create({
  baseURL: NEW_BASE_URL,
  headers: BASE_AXIOS_HEADERS(),
});
