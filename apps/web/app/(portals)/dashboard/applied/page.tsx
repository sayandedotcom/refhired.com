"use client";

import { columns } from "@/components/ui/data-table/components/columns";
import DataTable from "@/components/ui/data-table/components/data-table";
import { tsTasks } from "@/components/ui/data-table/data/tasks";

function AppliedDashboard() {
  return <DataTable columns={columns} data={tsTasks} />;
}

export default AppliedDashboard;
