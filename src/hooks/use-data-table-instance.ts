import * as React from 'react';

import {
  useReactTable,
  type ColumnDef,
  getCoreRowModel,
  type OnChangeFn,
  getSortedRowModel,
  type SortingState,
  getFacetedRowModel,
  getFilteredRowModel,
  type PaginationState,
  type VisibilityState,
  getPaginationRowModel,
  getFacetedUniqueValues,
  type ColumnFiltersState,
} from '@tanstack/react-table';

type UseDataTableInstanceProps<TData, TValue> = {
  data: TData[];
  pageCount?: number;
  defaultPageSize?: number;
  defaultPageIndex?: number;
  manualPagination?: boolean;
  enableRowSelection?: boolean;
  pagination?: PaginationState;
  columns: ColumnDef<TData, TValue>[];
  getRowId?: (row: TData, index: number) => string;
  onPaginationChange?: OnChangeFn<PaginationState>;
};

export function useDataTableInstance<TData, TValue>({
  data,
  columns,
  getRowId,
  pageCount,
  defaultPageSize,
  defaultPageIndex,
  onPaginationChange,
  manualPagination = false,
  enableRowSelection = true,
  pagination: controlledPagination,
}: UseDataTableInstanceProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageSize: defaultPageSize ?? 10,
    pageIndex: defaultPageIndex ?? 0,
  });
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

  // TanStack Table's returned API is intentionally not memoizable by the React Compiler.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    pageCount,
    manualPagination,
    enableRowSelection,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFacetedRowModel: getFacetedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    state: {
      sorting,
      rowSelection,
      columnFilters,
      columnVisibility,
      pagination: controlledPagination ?? pagination,
    },
    onPaginationChange: onPaginationChange ?? setPagination,
    getRowId: getRowId ?? ((row) => (row as any).id.toString()),
  });

  return table;
}
