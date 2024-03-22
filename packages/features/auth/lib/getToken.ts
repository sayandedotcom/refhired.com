import { getToken } from "next-auth/jwt";

export const veryfyToken = async (req: any) => {
  // if using `NEXTAUTH_SECRET` env variable, we detect it, and you won't actually need to `secret`
  return await getToken({ req });
  // try {
  //   const token = await getToken({ req, secret });
  //   return token;
  // } catch (error) {
  //   return null;
  // }
};
