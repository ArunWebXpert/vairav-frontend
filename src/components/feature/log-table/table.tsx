import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { logsColumn } from "./columns";
import { useLogsTable } from "@/api/hooks/logs-stat/use-logs-data";
import TableFilter from "./table-filter";
import { Pagination } from "@/components/ui/pagination";

const LogTable = () => {
  const { isPending, data, isError, error } = useLogsTable();

  const table = useReactTable({
    data: data?.items || [],
    columns: logsColumn,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isPending) {
    return <div>pending..</div>;
  }

  if (isError) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      <TableFilter />
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
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={logsColumn.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Pagination />
    </>
  );
};

export default LogTable;
