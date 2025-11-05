"use client";

import React, { useState, useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Filter,
  ArrowUp,
  ArrowDown,
  ArrowDownUp
} from "lucide-react";

const ClaimsTable = ({ claims }) => {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 15,
  });

  const data = useMemo(() => claims, [claims]);

  // Define columns
  const columns = useMemo(
    () => [
      {
        accessorKey: "amountClaimed",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center justify-between gap-1 cursor-pointer select-none"
            >
              Amount claimed
              {column.getIsSorted() === "asc" ? (
                <ArrowUp className="h-4 w-4 text-primary-light" />
              ) : column.getIsSorted() === "desc" ? (
                <ArrowDown className="h-4 w-4 text-primary-light" />
              ) : (
                <ArrowDownUp className="h-4 w-4 text-primary-light" />
              )}
            </div>
          );
        },
        cell: ({ row }) => <div>{row.getValue("amountClaimed")}</div>,
      },
      {
        accessorKey: "amountPaid",
        header: "Amount paid",
        cell: ({ row }) => <div>{row.getValue("amountPaid")}</div>,
      },
      {
        accessorKey: "amountNotPaid",
        header: "Amount not paid",
        cell: ({ row }) => <div>{row.getValue("amountNotPaid")}</div>,
      },
      {
        accessorKey: "paidTo",
        header: "Paid to",
        cell: ({ row }) => <div>{row.getValue("paidTo")}</div>,
      },
      {
        accessorKey: "paymentDate",
        header: "Payment date",
        cell: ({ row }) => <div>{row.getValue("paymentDate")}</div>,
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    state: {
      sorting,
      globalFilter,
      pagination,
    },
  });

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Header with Search and Filter */}
      <div className="px-4 py-3 border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-slate-500 font-medium">{data.length} records in total</p>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-[18px] w-[18px] text-foreground" />
            <Input
              type="text"
              placeholder="Search this list"
              value={globalFilter ?? ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="pl-9 w-full h-10 bg-white border-gray-300 rounded-md"
            />
          </div>
          
          {/* Filter Button */}
          <Button 
            variant="ghost" 
            className="gap-2 h-10 sm:h-12 px-4 text-primary-light border-primary-light hover:bg-blue-50 hover:text-primary-light uppercase font-medium text-sm"
          >
            <Filter className="h-4 w-4" />
            FILTER
          </Button>
        </div>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto px-4">
        <table className="w-full">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-left px-2 py-[18px] text-sm font-medium text-foreground tracking-wide border-b border-slate-500 bg-white"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-2 py-4 text-sm text-foreground">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-8 text-center text-foreground"
                >
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="px-4 py-3 bg-white border-t border-gray-200 flex flex-col sm:flex-row items-center justify-end gap-3">
        <div className="flex items-center gap-3">
          <span className="text-sm text-foreground">Rows per page:</span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="border-b border-foreground pr-2 py-1 text-sm bg-white focus:outline-none"
          >
            {[10, 15, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span className="ml-2 text-sm text-foreground">
            {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}-
            {Math.min(
              (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
              table.getFilteredRowModel().rows.length
            )}{" "}
            of {table.getFilteredRowModel().rows.length}
          </span>
        </div>
        
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="h-8 w-8 hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft className="!h-8 !w-8 text-primary-light" strokeWidth={1} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="h-8 w-8 hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight className="!h-8 !w-8 text-primary-light" strokeWidth={1} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClaimsTable;
