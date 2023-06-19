"use client";
export function TypographyH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className='scroll-m-20 text-2xl font-semibold tracking-[0.015em]'>
      {children}
    </h3>
  );
}
