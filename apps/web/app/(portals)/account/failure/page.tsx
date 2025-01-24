"use client";

import { useSearchParams } from "next/navigation";

import { X } from "lucide-react";

import { Button } from "@referrer/ui";

function Account() {
  const searchParams = useSearchParams();

  const errorMessage = searchParams.get("errorMessage");

  return (
    <div className="bg-muted flex h-screen w-full justify-center">
      <div className="bg-background mt-16 h-60 w-[500px] rounded-md p-6">
        <div>
          <div className="bg-destructive mx-auto flex h-12 w-12 items-center justify-center rounded-full">
            <X className="h-6 w-6 text-red-600" />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <h3 className="text-emphasis text-lg font-medium leading-6" id="modal-title">
              Error !
            </h3>
            <div className="mt-2">
              <p className="text-subtle text-sm">
                {errorMessage ?? "An error occurred while creating stripe account. Try again later !"}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Button className="flex w-full justify-center">Go back to the settings page</Button>
        </div>
      </div>
    </div>
  );
}

export default Account;
