"use client";

import { Button, LoaderButton } from "@referrer/ui";

export default function Page() {
  return (
    <>
      <Button iconBefore={<LoaderButton />} onClick={() => alert("hello")}>
        Button
      </Button>
      <input
        type='text'
        name=''
        id=''
        placeholder='Claim your username'
        className='bg-destructive'
      />
    </>
  );
}
