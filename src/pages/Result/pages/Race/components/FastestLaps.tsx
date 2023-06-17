/**
 * @file Tag list page

 */

import React, { useEffect, useState } from 'react'
import {
  Table,
  Button,
  Input,
  Divider,
  Modal,
  Space,
  Typography,
  Select,
  theme,
  Dropdown,
  MenuProps,
  Switch,
  Tag,
  Tooltip,
  Col,
  Row,
  DatePicker,
} from 'antd'
import * as Icon from '@ant-design/icons'

import { PAGE_TABLE } from '@/constants/page'
import { mockDataFastestLaps } from '../mock-data'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { RouteKey, rc } from '@/routes'
import slugify from 'slugify'

export const FastestLaps = () => {
  // hooks
  const { token } = theme.useToken()
  // query api
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(PAGE_TABLE.PERPAGE)
  const [keyword, setKeyword] = useState('')
  const [sortInfo, setSortInfo] = useState<{
    field: string | undefined
    order: string | number | undefined
  }>({ field: undefined, order: undefined })

  // state
  const [keywordInput, setKeywordInput] = useState('')

  // handle action
  const resetParamsAndRefresh = () => {
    setCurrentPage(1)
    setPageSize(PAGE_TABLE.PERPAGE)
    setSortInfo({ field: undefined, order: undefined })
    setKeyword('')
    setKeywordInput('')
  }

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Space align="start">
        <Space wrap>
          <Input.Search
            loading={false}
            placeholder="Search..."
            onSearch={() => {
              setCurrentPage(1)
              setKeyword(keywordInput)
            }}
            value={keywordInput}
            onChange={(event) => {
              setKeywordInput(event.target.value)
            }}
          />
          <Button loading={false} icon={<Icon.ReloadOutlined />} onClick={resetParamsAndRefresh}>
            Refresh
          </Button>
        </Space>
      </Space>
      <Table
        rowKey="_id"
        onChange={(_, __, sorter: any) => {
          setSortInfo({
            field: sorter.field,
            order: !sorter.order ? undefined : PAGE_TABLE.mapValueFormKey(sorter.order),
          })
        }}
        loading={false}
        dataSource={mockDataFastestLaps}
        pagination={{
          pageSizeOptions: PAGE_TABLE.PAGE_SIZE_OPTIONS,
          current: currentPage,
          pageSize: pageSize,
          total: mockDataFastestLaps.length,
          showTotal: (total) => `Total: ${total}`,
          showSizeChanger: true,
          onChange: (page, pageSize) => {
            setCurrentPage(page)
            setPageSize(pageSize)
          },
        }}
        columns={[
          {
            title: 'POS',
            dataIndex: 'Pos',
            sorter: true,
            render: (_, fastestLaps) => fastestLaps['Pos'],
          },
          {
            title: 'NO',
            dataIndex: 'No',
            sorter: true,
            render: (_, fastestLaps) => fastestLaps['No'],
          },
          {
            title: 'DRIVER',
            dataIndex: 'Driver',
            sorter: true,
            render: (_, fastestLaps) => fastestLaps['Driver'],
          },
          {
            title: 'CAR',
            dataIndex: 'Car',
            sorter: true,
            render: (_, fastestLaps) => fastestLaps['Car'],
          },
          {
            title: 'LAP',
            dataIndex: 'Laps',
            sorter: true,
            render: (_, fastestLaps) => fastestLaps['Lap'],
          },
          {
            title: 'TIME OF DAY',
            dataIndex: 'Time of day',
            sorter: true,
            render: (_, fastestLaps) => fastestLaps['Time of day'],
          },
          {
            title: 'TIME',
            dataIndex: 'Time',
            sorter: true,
            render: (_, fastestLaps) => fastestLaps['Time'],
          },
          {
            title: 'AVG SPEED',
            dataIndex: 'Avg Speed',
            sorter: true,
            render: (_, fastestLaps) => fastestLaps['Avg Speed'],
          },
        ]}
      />
    </Space>
  )
}
