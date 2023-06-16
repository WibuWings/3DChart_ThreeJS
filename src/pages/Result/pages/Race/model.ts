import { Moment } from 'moment'

export type Race = {
  _id: string
  'Grand Prix': string
  Date: string | Date | Moment
  Winner: string
  Car: string
  Laps: number
  Time: string
}
