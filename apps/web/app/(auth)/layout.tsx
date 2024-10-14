export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-muted flex flex-col items-center justify-center lg:h-screen">{children}</div>;
}
