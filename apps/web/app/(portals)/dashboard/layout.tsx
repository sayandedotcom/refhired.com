export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="scroll-smooth">{children}</section>
    </>
  );
}
// {/* <div className="border-b">
//   <div className="flex h-16 items-center px-4">
//     <MainNav className="mx-6" />
//     <div className="ml-auto flex items-center space-x-4">
//       <Search />
//       {/* <UserNav /> */}
//     </div>
//   </div>
// </div>; */}
