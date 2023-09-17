import { nanoid } from "nanoid";
import { Resend } from "resend";
import { type CreateEmailOptions } from "resend/build/src/emails/interfaces";

import { VerificationTemp, WelcomeTemp } from "@/components/emails";

export const resend = new Resend(process.env.RESEND_API_KEY!);

interface SendMailProps {
  toMail: string;
  type: "verification" | "welcome" | "notifications" | "newsletter";
  data: {
    name?: string;
    url?: string;
  };
}

export const sendMail = async ({ toMail, type, data }: SendMailProps) => {
  let subject;
  let react;
  if (type === "verification") {
    subject = "🔗 Sign In link for Refhired.com !";
    react = VerificationTemp({
      userName: data.name,
      verificationUrl: data.url as string,
    });
  } else if (type === "welcome") {
    subject = "🎉 Welcome to the Refhired.com !";
    react = WelcomeTemp({ userName: data.name });
  }

  try {
    await resend.emails.send({
      from: "Refhired.com <onboarding@resend.dev>",
      to: toMail,
      subject,
      react,
      headers: {
        // Set this to prevent Gmail from threading emails.
        "X-Entity-Ref-ID": nanoid(),
      },
    } as CreateEmailOptions);
  } catch (error) {
    console.error(error);
  }
};
