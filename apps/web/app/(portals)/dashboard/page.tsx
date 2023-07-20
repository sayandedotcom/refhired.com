import { Metadata } from "next";
import Image from "next/image";

import { columns } from "@/components/ui/data-table/components/columns";
import { DataTable } from "@/components/ui/data-table/components/data-table";
import { UserNav } from "@/components/ui/data-table/components/user-nav";
import { tsTasks } from "@/components/ui/data-table/data/tasks";

import Avatar from "../../../public/avatar/avatar.png";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Get job referrals to the top best companies of the world",
};

// async function getTasks() {
//   const data = await fs.readFile(path.join(process.cwd(), "app/components/ui/data/tasks.json"));

//   const tasks = JSON.parse(data.toString());

//   return z.array(taskSchema).parse(tasks);
// }
export default async function Dashboard() {
  // const tasks = await getTasks();
  return (
    <>
      <div className="md:hidden">
        <Image src={Avatar} width={1280} height={998} alt="Playground" className="block dark:hidden" />
        <Image src={Avatar} width={1280} height={998} alt="Playground" className="hidden dark:block" />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back !</h2>
            <p className="text-muted-foreground">Here&apos;s a list of your referrals for this month!</p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tsTasks} columns={columns} />
      </div>
    </>
  );
}
