/**
 * @file App route config

 */

import React from 'react'
import { generatePath } from 'react-router-dom'
import * as Icon from '@ant-design/icons'

export enum RouteKey {
  Result,
  ResultRaces,
  ResultRacesDetail,
  ResultDrivers,
  ResultDriversDetail,
  ResultTeams,
  ResultTeamsDetail,
  ResultFastest,
  ResultFastestDetail
}

export interface RouteConfig {
  id: RouteKey
  name: string
  path: string
  subPath?: string
  icon?: React.ReactElement
  pather?(...args: Array<any>): string
}
export const routeMap: ReadonlyMap<RouteKey, RouteConfig> = new Map(
  [
    {
      id: RouteKey.Result,
      name: 'Result',
      path: '/result',
    },
    {
      id: RouteKey.ResultDrivers,
      name: 'Driver',
      path: '/result/drivers',
      subPath: 'drivers',
    },
    {
      id: RouteKey.ResultDriversDetail,
      name: 'Driver',
      path: '/result/drivers/:id',
      subPath: 'drivers/:id',
      pather(_id: string) {
        return generatePath(this.path, { _id })
      },
    },
    {
      id: RouteKey.ResultRaces,
      name: 'Races',
      path: '/result/races',
      subPath: 'races',
    },
    {
      id: RouteKey.ResultRacesDetail,
      name: 'Races',
      path: '/result/races/:id',
      subPath: 'races/:id',
      pather(_id: string) {
        return generatePath(this.path, { _id })
      },
    },{
      id: RouteKey.ResultTeams,
      name: 'Teams',
      path: '/result/teams',
      subPath: 'teams',
    },
    {
      id: RouteKey.ResultTeamsDetail,
      name: 'Teams',
      path: '/result/teams/:id',
      subPath: 'teams/:id',
      pather(_id: string) {
        return generatePath(this.path, { _id })
      },
    },
    {
      id: RouteKey.ResultFastest,
      name: 'Teams',
      path: '/result/teams',
      subPath: 'teams',
    },
    {
      id: RouteKey.ResultFastestDetail,
      name: 'Fastest',
      path: '/result/fastest/:id',
      subPath: 'fastest/:id',
      pather(_id: string) {
        return generatePath(this.path, { _id })
      },
    },
  ].map((route) => [route.id, route])
)

export const rc = (routeKey: RouteKey): RouteConfig => {
  return routeMap.get(routeKey)!
}
export const rcByPath = (routePath: string) => {
  return Array.from(routeMap.values()).find((route) => route.path === routePath)
}
export const isRoute = (routePath: string, routeKey: RouteKey) => {
  return routeMap.get(routeKey)?.path === routePath
}
export const getRouteNameBySubpath = (subpath: string) => {
  const routeArray = Array.from(routeMap.values())
  return routeArray.find((route) =>
    route.subPath ? route.subPath === subpath : route.path === subpath
  )
}
