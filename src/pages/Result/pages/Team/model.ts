import { Moment } from 'moment'

type History = {
  'Grand Prix': string
  Date: string | Date | Moment
  PTS: number
}

export type Team = {
  _id: string
  Pos: number
  Team: string
  PTS: number
  history: History[]
}
