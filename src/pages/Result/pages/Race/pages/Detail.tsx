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
  Empty,
  Menu,
} from 'antd'
import * as Icon from '@ant-design/icons'

import { PAGE_TABLE } from '@/constants/page'
import moment from 'moment'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import { RouteKey, rc } from '@/routes'
import slugify from 'slugify'
import { mockData as RaceList } from '../../Race/mock-data'

export const RaceDetail = () => {
  const params = useParams()
  if (params._id !== slugify(RaceList[0]['Grand Prix'], { replacement: '-', lower: true })) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  }
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
  // nav
  const navigate = useNavigate()
  const mainMenuItems = [
    {
      key: 'race-result',
      label: `RACE RESULT`,
    },
    {
      key: 'fastest-laps',
      label: `FASTEST LAPS`,
    },
  ]
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
      <Typography.Title level={5}>{RaceList[0]['Grand Prix']}</Typography.Title>
      <div style={{ display: 'flex', gap: 8 }}>
        <Menu
          theme="light"
          mode="vertical"
          onClick={(event) => navigate(event.key)}
          selectedKeys={[location.pathname.split('/')[4]]}
          defaultOpenKeys={['race-result']}
          items={mainMenuItems}
        />
        <Outlet />
      </div>
    </Space>
  )
}
