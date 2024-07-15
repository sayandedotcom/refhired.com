"use server";

import { nanoid } from "nanoid";
import { type CreateEmailOptions } from "resend/build/src/emails/interfaces";

import { VerificationTemp, WelcomeTemp } from "@/components/emails";

import { resend } from "@/lib/resend";

interface SendMailProps {
  toMail: string;
  type: "verification" | "welcome" | "notifications" | "receipt";
  data: {
    name?: string;
    url?: string;
  };
}

export async function sendMail({ toMail, type, data }: SendMailProps) {
  let subject;
  let react;
  if (type === "verification") {
    subject = "Sign In link for Refhired.com !";
    react = VerificationTemp({
      userName: data.name ?? "",
      verificationUrl: data.url as string,
    });
    // react = React.createElement(VerificationTemp, {
    //   userName: data.name ?? "",
    //   verificationUrl: data.url as string,
    // });
  } else if (type === "welcome") {
    subject = "Thanks for signing in to Refhired.com !";
    react = WelcomeTemp({ userName: data.name });
    // react = React.createElement(WelcomeTemp, {
    //   userName: data.name,
    // });
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
}
