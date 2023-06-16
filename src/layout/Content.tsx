import React from 'react'
import { useLocation, matchPath } from 'react-router-dom'
import { Breadcrumb, BackTop, Typography, FloatButton } from 'antd'
import * as Icon from '@ant-design/icons'
import { scrollTo } from '@/services/scroller'
import { routeMap } from '@/routes'
import { useTranslation } from 'react-i18next'
import i18n from '@/i18n/i18n'

export const AppContent: React.FC = (props) => {
  const { t } = useTranslation('translation', { i18n })

  const location = useLocation()
  const [, ...paths] = location.pathname.split('/')
  const currentRoute = Array.from(routeMap.values()).find((route) => {
    return matchPath(route.path, location.pathname)
  })

  return (
    <div>
      <div>{props?.children}</div>
      <FloatButton.BackTop onClick={() => scrollTo(document.body)}>
        <div>
          <Icon.CaretUpOutlined />
        </div>
      </FloatButton.BackTop>
    </div>
  )
}
