import { ActiveStatus } from '@/models/status'
import { Moment } from 'moment'

export type Classification = {
  _id: string
  name: string
}
export type Customer = {
  _id: string
  fullname: string
  phone: string
  note?: string
  lastCall: string | Date | Moment
  duration: number
  classification?: string | Classification
  status: ActiveStatus
}
