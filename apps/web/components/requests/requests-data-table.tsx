"use client";

import * as React from "react";

import Link from "next/link";

import { fromNow } from "@refhiredcom/utils";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, File, Link2, MoreHorizontal } from "lucide-react";

import {
  Button,
  Checkbox,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@referrer/ui";

import { TooltipDemo } from "../ui";

// const data: Payment[] = [];
//   // {
//   //   id: "m5gr84i9",
//   //   amount: 316,
//   //   status: "read",
//   //   email: "ken99@yahoo.com",
//   // },
//   // {
//   //   id: "3u1reuv4",
//   //   amount: 242,
//   //   status: "unread",
//   //   email: "Abe45@gmail.com",
//   // },
//   // {
//   //   id: "derv1ws0",
//   //   amount: 837,
//   //   status: "read",
//   //   email: "Monserrat44@gmail.com",
//   // },
//   // {
//   //   id: "5kma53ae",
//   //   amount: 874,
//   //   status: "read",
//   //   email: "Silas22@gmail.com",
//   // },
//   // {
//   //   id: "bhqecj4p",
//   //   amount: 721,
//   //   status: "unread",
//   //   email: "carmella@hotmail.com",
//   // },
// ];

// export type Data = {
//   id: string;
//   received: string;
//   status: string;
//   post: string;
//   email: string;
//   amount: number;
//   info: any;
// };

// const data = [
//   {
//     id: "1",
//     received: "5 min ago",
//     status: "Read",
//     post: "Hiring Backend Developers from India and I would ...",
//     email: "chumkimahajandey@gmail.com",
//     amount: 354,
//     info: "grfhrtehbyrt",
//     message: "message",
//     pdf: ["www.sayande.com"],
//     links: ["www.sayande.com"],
//   },
//   {
//     id: "2",
//     received: "5 min ago",
//     status: "Unread",
//     post: "Hiring Developers from India and I would ...",
//     email: "ayande@gmail.com",
//     amount: 354,
//     info: "grfhrtehbyrt",
//     message: "message",
//     pdf: ["www.sayande.com"],
//     links: ["www.sayande.com"],
//   },
// ];

export const columns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "received",
    header: "Received",
    cell: ({ row }) => <div className="capitalize">{fromNow(row.getValue("received"))}</div>,
  },
  // {
  //   accessorKey: "status",
  //   header: "Status",
  //   cell: ({ row }) => (
  //     <Badge variant="outline" className="capitalize">
  //       {row.getValue("status")}
  //     </Badge>
  //   ),
  // },
  {
    accessorKey: "post",
    header: "Post",
    cell: ({ row }) => <div className="lowercase">{row.getValue("post")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "message",
    header: () => <div className="text-right">Message</div>,
    cell: ({ row }) => {
      return <div className="text-right font-medium">{row.getValue("message")}</div>;
    },
  },
  {
    accessorKey: "pdfs",
    header: () => <div className="text-right">Pdfs</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {/* @ts-ignore */}
          {row.getValue("pdfs").map((link, index) => {
            const platform = Object.keys(link)[0];
            const url = link[platform];
            return (
              <TooltipDemo key={index} text={platform}>
                <Link href={url} target="_blank">
                  <File />
                </Link>
              </TooltipDemo>
            );
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "links",
    header: () => <div className="text-right">Links</div>,
    cell: ({ row }) => {
      return (
        <div className="flex gap-3 text-right font-medium">
          {/* @ts-ignore */}
          {row.getValue("links").map((link, index) => {
            const platform = Object.keys(link)[0];
            const url = link[platform];
            return (
              <Link key={index} href={url} target="_blank">
                <TooltipDemo text={platform}>
                  <Link2 />
                </TooltipDemo>
              </Link>
            );
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function RequestDataTable({ data }) {
  // console.log("data in client", data);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  // console.log("queriedData?.getAllRequests.Posts", queriedData?.getAllRequests.Posts);

  // const data = queriedData?.getAllRequests.Posts || [];

  // const transformArray = React.useCallback(
  //   (originalArray) => {
  //     const transformedArray = [];

  //     originalArray.forEach((obj) => {
  //       obj.appliedInfo.forEach((applyInfo) => {
  //         const transformedObj = {
  //           id: obj.id,
  //           received: "5 min ago", // Example value, you need to calculate actual time difference
  //           status: "Read", // Assuming all are read
  //           post: obj.description,
  //           email: applyInfo.user.email,
  //           amount: 354, // Example value, you need to determine how to calculate it
  //           info: applyInfo.applyInfo.message,
  //         };
  //         transformedArray.push(transformedObj);
  //       });
  //     });

  //     return transformedArray;
  //   },
  //   [data]
  // );

  // // Call the function to get the transformed array
  // const formattedArray = transformArray(data);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  // console.log(
  //   table?.getRowModel().rows.map((row) => {
  //     console.log("row", row);
  //     //   .getVisibleCells().map((cell) => {
  //     //     console.log("cols", flexRender(cell.column.columnDef.cell, cell.getContext()));
  //     //   })
  //     // );
  //   })
  // );

  return (
    <div className="w-full px-4">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("email")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}>
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table?.getRowModel()?.rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  You got no requests !
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length}{" "}
          row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
