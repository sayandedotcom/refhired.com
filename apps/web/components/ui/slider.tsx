"use client";

import ReactSlider from "react-slider";

export function MultiSlider(props) {
  return (
    <ReactSlider
      className="bg-secondary relative h-5 w-full grow overflow-hidden rounded-full"
      thumbActiveClassName="bg-foreground"
      thumbClassName="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
      disabled:opacity-50"
      ariaLabel={["Lower thumb", "Upper thumb"]}
      defaultValue={[0, 100]}
      max={100}
      min={0}
      {...props}
    />
  );
}
