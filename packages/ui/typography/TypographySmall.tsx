"use client";
export function TypographySmall({ children }: { children: React.ReactNode }) {
  return (
    <small className='text-sm font-medium leading-none tracking-[0.045em]'>
      {children}
    </small>
  );
}
