"use client";

import { Button, Footer, Header, LoaderButton } from "@referrer/ui";
import "../styles/globals.css";
export default function Page() {
  return (
    <>
      <Button iconBefore={<LoaderButton />} onClick={() => alert("hello")}>
        Button
      </Button>
      <input type='text' name='' id='' placeholder='Claim your username' />
    </>
  );
}
