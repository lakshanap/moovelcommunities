import React, { Component } from 'react'
import { Link } from 'react-router'
import Footer from "./Footer"

export default class Contract extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div  className="contract">
        <img src="./assets/contract.svg"></img>
        <h1>Tarzan's Car rental agreement</h1>
        <ol>
          <li>Sunday, September 25, 2016</li>
          <li>Pick-up: 1pm</li>
          <li>Drop-off: 3pm</li>
          <li>Return with gas</li>
          <li>No Smoking</li>
          <li>60 mile radius perimeter</li>
        </ol>
        <Link to="/approval"><img id="like" src="./assets/like.svg"></img></Link>
        <Footer/>
      </div>
    )
  }
}
