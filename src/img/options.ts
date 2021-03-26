import { IAnchor, IGradient } from './utils'

export interface ITextMiddlewareOptions {
  text: string
  fontWeight?: string
  fontSize: number
  font: string
  color: string | IGradient

  stroke?: boolean
  strokeWidth?: number
  strokeStyle?: string | IGradient

  x: number
  y: number

  fixBoundingBox?: boolean

  anchor: IAnchor
}

export interface IBorderMiddlewareOptions {
  color: string | IGradient
  width?: number

  expand?: boolean
}