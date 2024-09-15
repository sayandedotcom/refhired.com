import { API_URL } from "@/config/urls";
import axios from "axios";

export const requests = axios.create({
  baseURL: `${API_URL}/v1`,
  // headers: {
  //   commonRequest: "Sayan De from Commonnnnnnnnnnnnnn Component",
  // },
  // params: {
  //   key: "AIzaSyCAZkmJKKD1ByfyyvezqVWv1ohIdarhVMY",
  // },
});
