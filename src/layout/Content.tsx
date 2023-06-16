import React from 'react'
import { useLocation, matchPath } from 'react-router-dom'
import { Breadcrumb, BackTop, Typography, FloatButton } from 'antd'
import * as Icon from '@ant-design/icons'
import { routeMap } from '@/routes'

export const AppContent: React.FC = (props) => {
  const location = useLocation()
  const [, ...paths] = location.pathname.split('/')
  const currentRoute = Array.from(routeMap.values()).find((route) => {
    return matchPath(route.path, location.pathname)
  })

  return (
    <div>
      <div>{props?.children}</div>
      <FloatButton.BackTop>
        <div>
          <Icon.CaretUpOutlined />
        </div>
      </FloatButton.BackTop>
    </div>
  )
}
