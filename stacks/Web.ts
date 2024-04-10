import { NextjsSite, StackContext } from "sst/constructs";

export function WEB({ stack }: StackContext) {
  // ... existing constructs

  // Create the Next.js site
  const site = new NextjsSite(stack, "Site", {
    path: "packages/web",
  });

  // Add the site's URL to stack output
  stack.addOutputs({
    URL: site.url,
  });
}
