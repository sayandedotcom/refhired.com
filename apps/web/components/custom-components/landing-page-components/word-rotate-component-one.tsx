import { WordRotate } from "@/components/ui";

export function WordRotateComponentOne() {
  return (
    <WordRotate
      className="font-heading bg-foreground relative z-10 bg-clip-text text-center text-lg font-bold text-transparent dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-600 md:text-4xl"
      words={[
        "Join the Waitlist",
        "Referrals increase your chances by 600%",
        "Referrals from top companies",
        "Easy apply to referrals",
        "Join Now !",
        "Enter your email below",
      ]}
    />
  );
}
