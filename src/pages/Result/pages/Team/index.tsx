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
import { mockData } from './mock-data'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { RouteKey, rc } from '@/routes'
import { Team } from './model'

export const ResultTeamPage = () => {
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
          <DatePicker.YearPicker defaultValue={moment()} />
          <Button loading={false} icon={<Icon.ReloadOutlined />} onClick={resetParamsAndRefresh}>
            Refresh
          </Button>
        </Space>
      </Space>
      <Space>
        <Input.Search
          loading={false}
          allowClear
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
        dataSource={mockData}
        pagination={{
          pageSizeOptions: PAGE_TABLE.PAGE_SIZE_OPTIONS,
          current: currentPage,
          pageSize: pageSize,
          total: mockData.length,
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
            render: (_, team) => team['Pos'],
          },
          {
            title: 'TEAM',
            dataIndex: 'Team',
            sorter: true,
            render: (_, team) => team['Team'],
          },
          {
            title: 'PTS',
            dataIndex: 'PTS',
            sorter: true,
            width: '30%',
            align: 'center',
            render: (_, team) => team['PTS'],
          },
        ]}
      />
    </Space>
  )
}

const TempChart = ({ team }: React.PropsWithChildren<{ team: Team }>) => {
  return <div></div>
}
