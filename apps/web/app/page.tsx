"use client";

import { Button, LoaderButton } from "@referrer/ui";
import "../styles/globals.css";
import "@referrer/ui/styles.css";
export default function Page() {
  return (
    <>
      <Button iconBefore={<LoaderButton />} onClick={() => alert("hello")}>
        Button
      </Button>
      <Button iconAfter={<LoaderButton />}>Button</Button>
      <input type='text' name='' id='' placeholder='Claim your username' />
    </>
  );
}
