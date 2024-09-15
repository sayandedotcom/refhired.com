import axios from "axios";

console.log(
  "😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊BACKEND_PROD_URL",
  process.env.BACKEND_PROD_URL
);

export const requests = axios.create({
  baseURL: `${process.env.BACKEND_PROD_URL}/api/v1`,
  // headers: {
  //   commonRequest: "Sayan De from Commonnnnnnnnnnnnnn Component",
  // },
  // params: {
  //   key: "AIzaSyCAZkmJKKD1ByfyyvezqVWv1ohIdarhVMY",
  // },
});
