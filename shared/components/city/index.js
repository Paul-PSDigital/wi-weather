import React, { Component } from 'react'

export class CityComponent extends Component {
  render () {
    const { city } = this.props

    return <span> { city.name }, { city.country }</span>
  }
}
