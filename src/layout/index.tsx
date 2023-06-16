/**
 * @desc App layout

 */

import React, { CSSProperties, useState } from 'react'
import { ConfigProvider, Layout } from 'antd'
import enUS from 'antd/lib/locale/en_US'

import * as CONFIG from '@/config'
import { AppHeader } from './Header'
import { AppContent } from './Content'
import { useStyles } from './useStyles'
import './styles.less'

export const AppLayout = (props: { children?: React.ReactNode }) => {
  const styles = useStyles()
  return (
    <ConfigProvider locale={enUS} space={{ size: CONFIG.APP_CONTENT_SPACE_SIZE }}>
      <Layout key={enUS.locale} style={styles.appLayout}>
        <Layout>
          <Layout.Header style={styles.headerLayout}>
            <AppHeader />
          </Layout.Header>
          <Layout.Content style={styles.contentLayout}>
            <AppContent>{props?.children}</AppContent>
          </Layout.Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}
