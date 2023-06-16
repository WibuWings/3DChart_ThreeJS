import { StyleProvider } from '@ant-design/cssinjs'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFound'
import { rc, RouteKey } from './routes'
import { store } from './store'
import { ResultPage } from './pages/Result'
import { AppLayout } from './layout'
import { ResultRacePage } from './pages/Result/pages/Race'

export function App() {
  return (
    <StyleProvider hashPriority="high">
      <Provider store={store}>
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route index={true} element={<Navigate to={rc(RouteKey.Result).path!} replace />} />
              <Route path={`${rc(RouteKey.Result).path}/*`} element={<ResultPage />}>
                <Route
                  index={true}
                  element={<Navigate to={rc(RouteKey.ResultRaces).subPath!} replace />}
                />
                <Route
                  path={`${rc(RouteKey.ResultRaces).subPath}/*`}
                  element={
                    <Routes>
                      <Route index path="" element={<ResultRacePage />} />
                      <Route
                        path={rc(RouteKey.ResultRacesDetail).subPath!}
                        element={<div>hihi</div>}
                      />
                    </Routes>
                  }
                />
                <Route
                  path={`${rc(RouteKey.ResultDrivers).subPath}/*`}
                  element={
                    <Routes>
                      <Route index path="" element={<div>hihi</div>} />
                    </Routes>
                  }
                />
                <Route
                  path={`${rc(RouteKey.ResultTeams).subPath}/*`}
                  element={
                    <Routes>
                      <Route index path="" element={<div>hihihi</div>} />
                    </Routes>
                  }
                />
                <Route
                  path={`${rc(RouteKey.ResultFastest).subPath}/*`}
                  element={
                    <Routes>
                      <Route index path="" element={<div>hihihihi</div>} />
                    </Routes>
                  }
                />
                <Route
                  path="*"
                  element={<Navigate to={rc(RouteKey.ResultRaces).subPath!} replace />}
                />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </Provider>
    </StyleProvider>
  )
}
