import React, { CSSProperties } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Dropdown, Avatar, Button, Modal, Spin, MenuProps, Space, Menu } from 'antd'
import * as Icon from '@ant-design/icons'
import { useAppDispatch } from '@/hooks'
import { removeToken } from '@/services/token'
import { logout } from '@/pages/Login/slice'
import { rc, RouteKey } from '@/routes'
import { getResourceUrl } from '@/utils/url'
import { PAGE_INFO } from '@/constants/page'
import { useStyles } from './useStyles'

export const AppHeader = () => {
  // hooks
  const styles = useStyles()
  // menu item
  const navigate = useNavigate()
  const location = useLocation()

  const mainMenuItems = [
    {
      key: rc(RouteKey.Campaign).path,
      icon: rc(RouteKey.Campaign).icon,
      label: `${rc(RouteKey.Campaign).name}`,
    },
    {
      key: rc(RouteKey.Device).path,
      icon: rc(RouteKey.Device).icon,
      label: `${rc(RouteKey.Device).name}`,
    },
    {
      key: rc(RouteKey.Profile).path,
      icon: rc(RouteKey.Profile).icon,
      label: `${rc(RouteKey.Profile).name}`,
    },
    {
      key: rc(RouteKey.Proxy).path,
      icon: rc(RouteKey.Proxy).icon,
      label: `${rc(RouteKey.Proxy).name}`,
    },
    {
      key: rc(RouteKey.UserAgent).path,
      icon: rc(RouteKey.UserAgent).icon,
      label: `${rc(RouteKey.UserAgent).name}`,
    },
  ]
  return (
    <div style={styles.header}>
      <img
        style={styles.logo}
        src={getResourceUrl(PAGE_INFO.LOGO_HORIZONTAL)}
        alt={'logo'}
        draggable={false}
      />
      <Menu
        style={styles.menu}
        theme="light"
        mode="horizontal"
        onClick={(event) => navigate(event.key)}
        selectedKeys={[location.pathname.split('/')[1]]}
        defaultOpenKeys={[rc(RouteKey.Campaign).path]}
        items={mainMenuItems.map((item) => ({ ...item, key: item.key.split('/')[1] }))}
      />
      <UserDropdown style={styles.dropdown} />
    </div>
  )
}

const UserDropdown = ({ style }: React.PropsWithChildren<{ style?: CSSProperties }>) => {
  // hook
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    Modal.confirm({
      title: 'Logout',
      content: 'Are you sure you want to logout?',
      centered: true,
      onOk() {
        removeToken()
        dispatch(logout())
        navigate(rc(RouteKey.Login).path)
      },
    })
  }
  return (
    <div style={style}>
      <Dropdown
        placement="bottomRight"
        menu={{
          items: [
            {
              key: 'profile',
              icon: <Icon.ExclamationCircleOutlined />,
              onClick: () => {
                navigate(rc(RouteKey.UserInformation).path)
              },
              label: 'Infomation',
            },
            {
              key: 'divider',
              type: 'divider',
            },
            {
              key: 'change-pass',
              icon: <Icon.LockOutlined />,
              onClick: () => {
                navigate(rc(RouteKey.ChangePassword).path)
              },
              label: 'Profile',
            },
            {
              key: 'divider2',
              type: 'divider',
            },
            {
              key: 'logout',
              icon: <Icon.LogoutOutlined />,
              onClick: logoutHandler,
              // danger: true,
              label: 'Logout',
            },
          ] as MenuProps['items'],
        }}
      >
        <Avatar shape="square" size="small" icon={<Icon.UserOutlined />} src={'avatar'} />
      </Dropdown>
    </div>
  )
}
