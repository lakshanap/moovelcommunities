import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="footer">
        <Link to="/"><img id="teamsImg" src="./assets/team.svg"></img></Link>
        <img id="filter" src="./assets/settings2.svg"></img>
      </div>
    )
  }
}
