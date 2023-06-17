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

export type RaceResult = {
  _id: string
  Pos: string
  No: number
  Driver: string
  Car: string
  Laps: number
  'Time/Retired': string
  PTS: number
}

export type FastestLaps = {
  _id: string
  Pos: number
  No: number
  Driver: string
  Car: string
  Lap: number
  'Time of day': string
  Time: string
  'Avg Speed': number
}
