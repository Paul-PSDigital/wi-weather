import { ForecastPeriod } from './forecastPeriod'
import { City } from './city'

export class Forecast {
  periods: ForecastPeriod[] = []
  city: City = null

  constructor(city: City, forecastPeriods: ForecastPeriod[]): any {
    this.city    = city
    this.periods = forecastPeriods
  }
}
