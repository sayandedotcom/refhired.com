"use client";
export function TypographyBlockquote({ children }: { children: React.ReactNode }) {
  return <blockquote className="mt-6 border-l-2 pl-6 italic tracking-[0.02em]">{children}</blockquote>;
}
