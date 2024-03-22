import { SES } from "@aws-sdk/client-ses";
import { render } from "@react-email/render";
import { nanoid } from "nanoid";

import { VerificationTemp, WelcomeTemp } from "./component";

const ses = new SES({ region: process.env.AWS_SES_REGION });

interface SendMailProps {
  toMail: string;
  type: "verification" | "welcome" | "notifications" | "newsletter";
  data: {
    name: string;
    url?: string;
  };
}

export const sendMail = async ({ toMail, type, data }: SendMailProps) => {
  let subject;
  let react;
  if (type === "verification") {
    subject = "🔗 Sign In link for Refhired.com !";
    react = render(<VerificationTemp verificationUrl={data.url as string} userName={data.name} />);
  } else if (type === "welcome") {
    subject = "🎉 Welcome to the Refhired.com !";
    react = render(<WelcomeTemp userName={data.name} />);
  }
  const params = {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: toMail,
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: react,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
      Headers: {
        // Set this to prevent Gmail from threading emails.
        "X-Entity-Ref-ID": nanoid(),
      },
    },
  };

  try {
    await ses.sendEmail(params as any);
  } catch (error) {
    console.error(error);
  }
};
