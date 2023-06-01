import {
  Box,
  Flex,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useSafeState } from 'ahooks';
import Pagination from 'rc-pagination';
import { useMemo } from 'react';

import './index.less';

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: ColumnDef<Data, any>[];
  onPagination?: (current: number) => void;
  loading: boolean;

  pagination: {
    limit: number;
    total: number;
    current: number;
  };
};

const DataTable = <Data extends object>({
  data,
  columns,
  loading,
  onPagination,
  pagination,
}: DataTableProps<Data>) => {
  const [sorting, setSorting] = useSafeState<SortingState>([]);
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    // onSortingChange: setSorting,
    // getSortedRowModel: getSortedRowModel(),
    // state: {
    //   pagination: { pageIndex: 1, pageSize: 1 },
    //   sorting,
    // },
  });

  const handlePagination = (current: number, limit: number) => {
    if (typeof onPagination === 'function') {
      onPagination(current);
    }
  };

  const tableHeader = useMemo(
    () => (
      <Thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
              const meta: any = header.column.columnDef.meta;
              return (
                <Th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  isNumeric={meta?.isNumeric}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </Th>
              );
            })}
          </Tr>
        ))}
      </Thead>
    ),
    [table]
  );

  return (
    <Box>
      {loading ? (
        <Flex height={'20rem'} alignItems="center" justifyContent="center">
          <Spinner />
        </Flex>
      ) : (
        <Table>
          {tableHeader}
          <Tbody mb="24px">
            {data?.length
              ? table.getRowModel().rows.map((row) => (
                  <Tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                      const meta: any = cell.column.columnDef.meta;
                      return (
                        <Td key={cell.id} isNumeric={meta?.isNumeric}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </Td>
                      );
                    })}
                  </Tr>
                ))
              : null}
          </Tbody>
        </Table>
      )}
      {pagination ? (
        <Pagination
          onChange={handlePagination}
          defaultCurrent={1}
          current={pagination.current}
          pageSize={pagination.limit}
          total={pagination.total}
          style={{ marginTop: '24px' }}
        />
      ) : null}
    </Box>
  );
};

export default DataTable;
