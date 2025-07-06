import { API_URL, DEV_API_URL, PROD_API_URL, REFHIREDCOM_API_KEY } from "@/config/urls";
import axios from "axios";

// baseURL: `${API_URL}/v1`,
export const request = axios.create({
  baseURL: "/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    key: REFHIREDCOM_API_KEY,
  },
});
