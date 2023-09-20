"use client";

import Login from "@/app/[locale]/(auth)/auth/login/page";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@referrer/ui";

function LoginModal() {
  return (
    <Dialog open>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Login />
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal;
