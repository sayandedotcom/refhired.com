"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { X } from "lucide-react";
import { z } from "zod";

import { Button } from "@referrer/ui";

const querySchema = z.object({
  error: z.string().optional(),
});
const errors = {
  Signin: "Try signing with a different account.",
  OAuthSignin: "Try signing with a different account.",
  OAuthCallback: "Try signing with a different account.",
  OAuthCreateAccount: "Try signing with a different account.",
  EmailCreateAccount: "Try signing with a different account.",
  Callback: "Try signing with a different account.",
  OAuthAccountNotLinked: "To confirm your identity, sign in with the same account you used originally.",
  EmailSignin: "Check your email address.",
  CredentialsSignin: "Sign in failed. Check the details you provided are correct.",
  default: "Unable to sign in.",
};

const AuthError = () => {
  const searchParams = useSearchParams();
  // const router = useRouter();
  // const { error } = router.query;
  // const errorMessage = error && (errors[error as keyof typeof errors] ?? errors.default);

  const { error } = querySchema.parse(searchParams);
  console.log("errorjwt😊😊😊😊😊😊😊😊😊😊", error);

  const isTokenVerificationError = error?.toLowerCase() === "verification";
  const errorMsg = isTokenVerificationError ? "token_invalid_expired" : "error_during_login";
  return (
    <div className="bg-destructive flex h-screen w-full justify-center">
      <div className="bg-background mt-16 h-60 w-[500px] rounded-md p-6">
        <div>
          <div className="bg-destructive mx-auto flex h-12 w-12 items-center justify-center rounded-full">
            <X className="h-6 w-6 text-red-600" />
          </div>
          <div className="mt-3 text-center sm:mt-5">
            <h3 className="text-emphasis text-lg font-medium leading-6" id="modal-title">
              {error ?? "Error !"}
            </h3>
            <div className="mt-2">
              <p className="text-subtle text-sm">
                {errorMsg ??
                  "An error occurred when logging you in. Head back to the login screen and try again."}
                {/* {errorMessage} */}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Link href="/auth/login" passHref legacyBehavior>
            <Button className="flex w-full justify-center">Go back to the login page</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthError;

// ! Errors
// ! https://next-auth.js.org/configuration/pages
