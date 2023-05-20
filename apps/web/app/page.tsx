"use client";

import { Button, LoaderButton } from "@referrer/ui";
import "../styles/globals.css";
import "@referrer/ui/styles.css";
export default function Page() {
  return (
    <>
      <Button onClick={() => alert("hello")}>Button</Button>
      <Button variant='destructive'>
        <LoaderButton />
        Button
      </Button>
    </>
  );
}
