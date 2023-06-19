"use client";
export function TypographyH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className='scroll-m-20 border-b pb-2 text-xl lg:text-3xl font-semibold tracking-widest transition-colors first:mt-0'>
      {children}
    </h2>
  );
}
