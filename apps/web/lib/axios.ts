import axios from "axios";

export const requests = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    commonRequest: "Sayan De from Commonnnnnnnnnnnnnn Component",
  },
  // params: {
  //   key: "AIzaSyCAZkmJKKD1ByfyyvezqVWv1ohIdarhVMY",
  // },
});
