import React, { Component } from 'react'
import { Link } from 'react-router'

export default class About extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Link {...this.props} activeClassName="active" />
  }
}
