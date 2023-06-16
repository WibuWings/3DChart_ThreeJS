import { StyleProvider } from '@ant-design/cssinjs'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, HashRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import { AppAuth } from './components/AppAuth'
import { AppLayout } from './components/AppLayout'
import { ENABLEd_HASH_ROUTER, ENV, VITE_ENV } from './config'
import { Login } from './pages/Login'
import { NotFoundPage } from './pages/NotFound'
import { rc, RouteKey } from './routes'
import { store } from './store'
import { CustomerPage } from './pages/Result'
import { CampaignPage } from './pages/Campaign'
import { CampaignDetailPage } from './pages/Campaign/pages/Detail'
import { CampaignSettingPage } from './pages/Setting'
import { DevicePage } from './pages/Device'
import { ProfilePage } from './pages/Profile'
import { ProxyPage } from './pages/Proxy'
import { ProxyOwnPage } from './pages/Proxy/pages/ProxyOwn'
import { ProxyAutoPage } from './pages/Proxy/pages/ProxyAuto'
import { UserAgentPage } from './pages/UserAgent'

// Router: WORKAROUND for outside
function RouterComponent(props: { children?: React.ReactNode }) {
  return ENABLEd_HASH_ROUTER ? (
    <HashRouter>{props.children}</HashRouter>
  ) : (
    <BrowserRouter>{props.children}</BrowserRouter>
  )
}

export function App() {
  useEffect(() => {
    console.info(`Run! env: ${ENV}, vite env: ${JSON.stringify(VITE_ENV)}`)
  }, [])

  return (
    <StyleProvider hashPriority="high">
      <Provider store={store}>
        <RouterComponent>
          <Routes>
            <Route path={`${rc(RouteKey.Result).path}/`} element={<ProxyPage />}>
                <Route
                  index={true}
                  element={<Navigate to={rc(RouteKey.ResultDrivers).path} replace />}
                />
                <Route
                path={`${rc(RouteKey.ResultDrivers).path}/*`}
                  element={<Routes>
                     <Route
                  index={true}
                  element={<Navigate to={rc(RouteKey.ResultDrivers).path} replace />}
                />
                 <Route
                  index={true}
                  element={<Navigate to={rc(RouteKey.ResultDrivers).path} replace />}
                />
                  </Routes>}
                />
              </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </RouterComponent>
      </Provider>
    </StyleProvider>
  )
}
