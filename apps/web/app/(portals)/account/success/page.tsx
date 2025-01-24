"use client";

import { useEffect } from "react";

import { Check } from "lucide-react";
import { useSession } from "next-auth/react";

import { Button } from "@referrer/ui";

function Account() {
  const { data: session, update } = useSession();

  useEffect(() => {
    update({
      ...session,
      user: { ...session?.user, stripeConnectLinked: true },
    });
  }, []);

  return (
    <div className="bg-muted flex h-screen justify-center">
      <div className="bg-background mt-16 h-60 w-[500px] rounded-md p-6">
        <div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-300">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <h3 className="text-emphasis text-lg font-medium leading-6" id="modal-title">
              Congratulations ! 🎉
            </h3>
            <div className="mt-2">
              <p className="text-subtle text-base">
                You have sucessfully created and connected your stripe account !
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Button className="flex w-full items-center justify-center">Go to dashboard</Button>
        </div>
      </div>
    </div>
  );
}

export default Account;
