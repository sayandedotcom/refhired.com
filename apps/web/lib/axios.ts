import { API_URL, DEV_API_URL, PROD_API_URL, REFHIREDCOM_API_KEY } from "@/config/urls";
import axios from "axios";

export const request = axios.create({
  baseURL: `${API_URL}/v1`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": DEV_API_URL,
    PROD_API_URL,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
  params: {
    key: REFHIREDCOM_API_KEY,
  },
});
