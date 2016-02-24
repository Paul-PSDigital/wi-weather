export class ForecastPeriod {
  // TODO: Define these as real objects where more complex
  clouds: any     = null
  dt: number      = null
  dt_txt: string  = null
  main: any       = null
  rain: any       = null
  sys: any        = null
  weather: any    = null
  wind: any       = null

  constructor(data): void {
    Object.assign(this, data)
  }
}
