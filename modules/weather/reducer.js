import { ForecastPeriod } from 'models/forecastPeriod'
import { Forecast } from 'models/forecast'
import { City } from 'models/city'

export const FORECAST_LOADED = 'FORECAST_LOADED'

const FORECAST_URI = 'http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=44db6a862fba0b067b1930da0d769e98'

var initialState = {
  forecast: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FORECAST_LOADED:
      return Object.assign({}, state, {forecast: action.forecast})
    default:
      return state
  }
}

function forecastLoaded(forecast: Forecast): Redux.Action {
  return {
    type: FORECAST_LOADED,
    forecast
  }
}

/**
* Load the forecasts in from 3rd party
*/
export function loadForecast(coordinates = null) {
  // Default City
  var params = "&q=Manchester,uk"

  // If we have location supplied in coordinates use those
  if (coordinates && coordinates.coords) {
    params = "&lat=" + coordinates.coords.latitude + "&lon=" + coordinates.coords.longitude
  }
  return (dispatch: Redux.Dispatch, getState: () => any) => {
    fetch(FORECAST_URI + params).then(r => r.json())
    .then((data) => {
      var periods = data.list.map((d) => new ForecastPeriod(d))
      var city = new City(data.city)

      dispatch(forecastLoaded(new Forecast(city, periods)))
    })
    .catch(e => console.log("Failed to Load Forecast", e))
  }
}
