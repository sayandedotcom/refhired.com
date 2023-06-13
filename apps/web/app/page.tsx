"use client";

import { Button, LoaderButton } from "@referrer/ui";
import "../styles/globals.css";
export default function Page() {
  return (
    <>
      <Button iconBefore={<LoaderButton />} onClick={() => alert("hello")}>
        Button
      </Button>
      <Button iconAfter={<LoaderButton />}>Button</Button>
      <input className="bg-destructive" type='text' name='' id='' placeholder='Claim your username' />
    </>
  );
}
