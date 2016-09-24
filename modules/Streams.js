import React, { Component } from 'react'
import { Link } from 'react-router'
import Footer from "./Footer"


export default class Streams extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="streams">
        <div id="streamBox">
          <ul>
            <Link to="/contract"><li>Rent: 1 - 3pm</li></Link>
            <li>Ride: now</li>
            <li>Carpool: m - f 9am</li>
            <li>Rent bike: 10 - 12pm</li>
            <li>Rent Motorcycle: 3 - 6pm</li>
            <li>Rent Car: 6 - 9pm</li>
            <li>Ride: now</li>
            <li>Carpool: m - f 9am</li>
            <li>Rent bike: 10 - 12pm</li>
          </ul>
        </div>
        <Footer/>
      </div>
    )
  }
}
