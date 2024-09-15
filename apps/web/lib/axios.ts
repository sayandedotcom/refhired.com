import { DEV_API_URL } from "@/config/urls";
import axios from "axios";

console.log(
  "😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊process.env.NODE_ENV",
  process.env.NODE_ENV,
  process.env.BACKEND_PROD_URL
);

export const requests = axios.create({
  baseURL: `${DEV_API_URL}/api/v1`,
  // headers: {
  //   commonRequest: "Sayan De from Commonnnnnnnnnnnnnn Component",
  // },
  // params: {
  //   key: "AIzaSyCAZkmJKKD1ByfyyvezqVWv1ohIdarhVMY",
  // },
});
