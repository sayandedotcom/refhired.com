import { sendMail } from "@refhiredcom/features/email";
// import { sendMail } from "@refhiredcom/email/email";
import { SendVerificationRequestParams } from "next-auth/providers";

import prisma from "@referrer/prisma";

export const sendVerificationRequest = async (params: SendVerificationRequestParams) => {
  const { identifier: email, url, provider, expires, theme, token } = params;
  // console.log("EmailProvider email 😊😊😊😊😊😊😊😊😊😊", email);
  // console.log("EmailProvider url  😊😊😊😊😊😊😊😊😊😊", url);
  // console.log("EmailProvider provider  😊😊😊😊😊😊😊😊😊😊", provider);
  // console.log("EmailProvider expires  😊😊😊😊😊😊😊😊😊😊", expires);
  // console.log("EmailProvider theme  😊😊😊😊😊😊😊😊😊😊", theme);
  // console.log("EmailProvider token  😊😊😊😊😊😊😊😊😊😊", token);

  const userExists = await prisma.user.findUnique({
    where: { email },
    select: { name: true },
  });
  if (userExists) {
    try {
      await sendMail({
        toMail: email,
        type: "verification",
        data: {
          name: userExists?.name!,
          url,
        },
      });
      console.log("hi");
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  } else {
    try {
      await sendMail({
        toMail: email,
        type: "verification",
        data: {
          name: "Welcome to Refhired.com",
          url,
        },
      });
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }
};
