import { PAGE_TABLE } from '@/constants/page'
import { SortOrder } from 'antd/lib/table/interface'

export const findSortOrder = (
  columnName: string | undefined,
  sortValue: number | string | undefined,
  matchColumn: string
) => {
  return columnName === matchColumn
    ? sortValue === PAGE_TABLE.SORTER_VALUE.ASC
      ? (PAGE_TABLE.SORT_KEY.ASC as SortOrder)
      : sortValue === PAGE_TABLE.SORTER_VALUE.DESC
      ? (PAGE_TABLE.SORT_KEY.DESC as SortOrder)
      : null
    : null
}
