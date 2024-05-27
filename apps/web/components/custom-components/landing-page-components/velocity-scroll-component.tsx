import { VelocityScroll } from "@/components/ui";

export function ScrollBasedVelocityCOmponent() {
  return (
    <VelocityScroll
      text="Join Now !"
      default_velocity={5}
      className="font-heading text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-4xl md:leading-[5rem]"
    />
  );
}
