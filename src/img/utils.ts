import { CanvasGradient, CanvasRenderingContext2D } from 'canvas'
import { IBorderMiddlewareOptions, ITextMiddlewareOptions } from './options'

interface IGradientStop {
  offset: number
  color: string
}

export interface IGradient {
  type: 'linear' | 'radial'
  stops: IGradientStop[]
}
// prettier-ignore
export enum IAnchor {
  NONE,
  TOPLEFT,    TOPMIDDLE,    TOPRIGHT,
  MIDDLELEFT, CENTER,       MIDDLERIGHT,
  BOTTOMLEFT, BOTTOMMIDDLE, BOTTOMRIGHT,
}

export interface IImageMiddlewareSettingsMiddleware {
  type: 'text' | 'border'
  options: ITextMiddlewareOptions | IBorderMiddlewareOptions
}

export interface IImageMiddlewareSettings {
  middleware: IImageMiddlewareSettingsMiddleware[]
}

export function escapeString(str: string): string {
  return str.replace(/"/gi, '"').replace(/'/gi, "'")
}

export function parseGradient(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  options: IGradient
): CanvasGradient {
  let type: 'createLinearGradient' | 'createRadialGradient' =
    options.type === 'linear' ? 'createLinearGradient' : 'createRadialGradient'
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
  options.stops.forEach((stop) => {
    if (stop.offset < 0) stop.offset = 0
    else if (stop.offset > 1) stop.offset = 1
    gradient.addColorStop(stop.offset, stop.color)
  })
  return gradient
}