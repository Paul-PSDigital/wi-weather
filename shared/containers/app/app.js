import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { CityComponent } from 'components/city'
import { RangeComponent } from 'components/range'
import * as weatherActions from 'modules/weather/reducer'
import { ForecastPeriod } from 'models/forecastPeriod'

require('bootstrap-loader')

class App extends Component {

  constructor(props) {
    super(props)
    this.fetchForecast = this.fetchForecast.bind(this)
  }

  componentDidMount() {
    // Start with Default Location
    this.fetchForecast()

    // Use detected location as soon as browser gets it
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.fetchForecast)
    }
  }

  fetchForecast(coordinates = null) {
      this.props.dispatch(weatherActions.loadForecast(coordinates))
  }

  render () {
    const { state, dispatch, children } = this.props

    var forecast = null, city = null
    if (state.weather.forecast) {
      city = <CityComponent city={state.weather.forecast.city} />
      if (state.weather.forecast.periods.length > 0) {
        forecast = state.weather.forecast.periods.map((period: ForecastPeriod) => {
            return <RangeComponent forecastPeriod={period} />
        })
      }
    }
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            Location: { city }
          </div>
        </div>
        <div className='row'>
          { forecast }
        </div>
        {children && React.cloneElement(children, { state, dispatch })}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { state }
}

export default connect(mapStateToProps)(App)
