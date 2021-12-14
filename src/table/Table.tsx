import React, { PropsWithChildren, useState } from 'react'
import { useTable, usePagination, TableOptions, Row } from 'react-table'
import 'twin.macro'

import { TablePagination } from './TablePagination'

const hooks = [usePagination]

export function Table<T extends object>(
  props: PropsWithChildren<TableOptions<T>>
) {
  const { columns, data } = props
  const [initialState, _] = useState({ pageIndex: 0 })
  const instance = useTable<T>(
    {
      ...props,
      columns,
      data,
      initialState: initialState,
    },
    ...hooks
  )

  const { headerGroups, page, getTableProps, getTableBodyProps, prepareRow } =
    instance

  const rowGenerate = (row: Row<T>) => {
    prepareRow(row)
    return (
      <tr
        {...row.getRowProps()}
        tw="border-b border-shade-medium-default transform transition duration-300 ease-in-out hover:bg-shade-light-default"
      >
        {row.cells.map((cell) => (
          <>{cell.render('Cell')}</>
        ))}
      </tr>
    )
  }

  return (
    <>
      <table {...getTableProps()} tw="w-full">
        <thead tw="table-header-group">
          {headerGroups.map((headerGroup, i) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={i}
              tw="border-b border-shade-medium-default table-row align-middle"
            >
              {headerGroup.headers.map((column, j) => (
                <th
                  key={j}
                  tw="p-3 text-base text-shade-dark-default text-left table-cell whitespace-nowrap"
                  scope="col"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          tw="bg-shade-white-default text-shade-dark-default table-row-group"
        >
          {page.map((row: Row<T>) => rowGenerate(row))}
        </tbody>
      </table>

      <TablePagination instance={instance} />
    </>
  )
}
