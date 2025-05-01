import { ILogItem } from "@/interface";
import { ColumnDef } from "@tanstack/react-table";

export const logsColumn: ColumnDef<ILogItem>[] = [
  {
    accessorKey: "ip",
    header: "IP",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "source",
    header: "Source",
    cell: ({ row }) => <div className="capitalize">{row.original.source}</div>,
  },
  {
    accessorKey: "method",
    header: "Method",
  },
  {
    accessorKey: "url",
    header: "URL",
  },
  {
    accessorKey: "protocol",
    header: "Protocol",
  },
  {
    accessorKey: "statusCode",
    header: "Status",
  },

  {
    accessorKey: "responseSize",
    header: "Response(Bytes)",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "region",
    header: "Region",
  },
  {
    accessorKey: "city",
    header: "City",
  },
];
