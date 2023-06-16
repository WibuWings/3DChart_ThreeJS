/**
 * @file Tag list page

 */

import React, { useEffect, useState } from 'react'
import { Card, Menu } from 'antd'
import * as Icon from '@ant-design/icons'

import './styles.less'
import { Outlet, useNavigate } from 'react-router-dom'
import { RouteKey, rc } from '@/routes'

export function ResultPage() {
  const navigate = useNavigate()
  const mainMenuItems = [
    {
      key: rc(RouteKey.ResultRaces).path,
      label: `${rc(RouteKey.ResultRaces).name}`,
    },
    {
      key: rc(RouteKey.ResultDrivers).path,
      label: `${rc(RouteKey.ResultDrivers).name}`,
    },
    {
      key: rc(RouteKey.ResultTeams).path,
      label: `${rc(RouteKey.ResultTeams).name}`,
    },
    {
      key: rc(RouteKey.ResultFastest).path,
      label: `${rc(RouteKey.ResultFastest).name}`,
    },
  ].map((nav) => ({ key: nav.key.split('/')[2], label: nav.label }))
  return (
    <Card
      title={
        <Menu
          style={{
            flex: 1,
          }}
          theme="light"
          mode="horizontal"
          onClick={(event) => navigate(event.key)}
          selectedKeys={[location.pathname.split('/')[2]]}
          defaultOpenKeys={[rc(RouteKey.ResultRaces).path.split('/')[2]]}
          items={mainMenuItems}
        />
      }
    >
      <Outlet />
    </Card>
  )
}
