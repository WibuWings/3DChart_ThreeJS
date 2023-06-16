/**
 * @file Global config

 */

import type { SizeType } from 'antd/lib/config-provider/SizeContext'

export const VITE_ENV = import.meta.env
export const ENV = import.meta.env.MODE
export const isDev = ENV === 'development'
export const BASE_PATH = import.meta.env.BASE_URL as string
export const API_URL = import.meta.env.VITE_API_URL as string
export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY as string
export const ENABLED_AD = Boolean(import.meta.env.VITE_ENABLE_AD)
export const ENABLEd_HASH_ROUTER = Boolean(import.meta.env.VITE_ENABLE_HASH_ROUTER)

export const FILE = {
  MAX_MB_SIZE: 10,
  ACCEPT_EXTENSIONS: ['JPG', 'PNG', 'JPEG'],
}