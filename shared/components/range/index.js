import React, { Component } from 'react'

export class RangeComponent extends Component {
  render () {
    const { forecastPeriod } = this.props

    return <div className='col-md-4'>
      <ul>
        <li>Date: {forecastPeriod.dt_txt}</li>
        <li>Temperature: { forecastPeriod.main.temp }</li>
        <li>Weather: {forecastPeriod.weather[0].main}</li>
      </ul>
    </div>
  }
}
