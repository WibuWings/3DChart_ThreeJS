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
import { ResultTeamPage } from './pages/Result/pages/Team'
import { ResultDriverPage } from './pages/Result/pages/Driver'
import { ResultFastestPage } from './pages/Result/pages/Fastest'
import { RaceDetail } from './pages/Result/pages/Race/pages/Detail'
import { ResultRace } from './pages/Result/pages/Race/components/RaceResult'
import { FastestLaps } from './pages/Result/pages/Race/components/FastestLaps'

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
                      <Route
                        path={`${rc(RouteKey.ResultRacesDetail).subPath!}/*`}
                        element={<RaceDetail />}
                      >
                        <Route index element={<Navigate to="race-result" replace />} />
                        <Route path={'race-result'} element={<ResultRace />}></Route>
                        <Route path={'fastest-laps'} element={<FastestLaps />}></Route>
                        <Route path="*" element={<Navigate to="race-result" replace />} />
                      </Route>
                      <Route index path="" element={<ResultRacePage />} />
                    </Routes>
                  }
                />
                <Route
                  path={`${rc(RouteKey.ResultDrivers).subPath}/*`}
                  element={
                    <Routes>
                      <Route index path="" element={<ResultDriverPage />} />
                    </Routes>
                  }
                />
                <Route
                  path={`${rc(RouteKey.ResultTeams).subPath}`}
                  element={<ResultTeamPage />}
                />
                <Route
                  path={`${rc(RouteKey.ResultFastest).subPath}/*`}
                  element={
                    <Routes>
                      <Route index path="" element={<ResultFastestPage />} />
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
