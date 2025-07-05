const DEV_API_URL: string = "http://localhost:3000/api";

const PROD_API_URL: string = "https://refhired.sayande.com/api";

const API_URL: string = process.env.NODE_ENV === "development" ? DEV_API_URL : PROD_API_URL;

const REFHIREDCOM_API_KEY: string = process.env.REFHIREDCOM_API_KEY;

const navigateToPostsOfUser = (userName: string, postId: string) => `/${userName}/posts/${postId}`;

export { API_URL, DEV_API_URL, PROD_API_URL, REFHIREDCOM_API_KEY, navigateToPostsOfUser };
