"use client";

import { signIn } from "next-auth/react";

import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@referrer/ui";

export function SessionExpiredDialog({ open, setOpen }: { open: boolean; setOpen: any }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-base">
            Your session has expired! Please log in again to continue !
          </DialogTitle>
          {/* <DialogDescription>Please log in again to continue !</DialogDescription> */}
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" onClick={() => signIn("google")}>
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
