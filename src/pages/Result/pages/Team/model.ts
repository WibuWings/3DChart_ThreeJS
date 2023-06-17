import { Moment } from 'moment'
import { Color } from 'three'

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
  histories: History[]
}
