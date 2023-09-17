"use client";

import { Check, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { useReadLocalStorage } from "usehooks-ts";

import { Button } from "@referrer/ui";

const VerifyRequest = () => {
  const email = useReadLocalStorage("verification-email");
  return (
    <div className="bg-muted flex h-screen items-center justify-center">
      <div className="bg-background w-[500px] rounded-md p-6">
        <div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-300">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <h3 className="text-emphasis text-lg font-medium leading-6" id="modal-title">
              Email has been sent ! 🎉
            </h3>
            <div className="mt-2">
              <p className="text-subtle text-base">
                Please check your inbox for your sign in link. If it is not send within 5 minutes then click
                on Send again !
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Button
            className="flex w-full items-center justify-center"
            onClick={() => signIn("email", { email })}>
            <Mail className="mr-4" /> Send again !
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyRequest;
