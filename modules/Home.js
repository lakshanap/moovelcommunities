import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div  className="home">
        <div id="homeImg">
          <img id="more1" src="./assets/more.svg"></img>
          <Link to="/streams" activeClassName="active" ><img id="car" src="./assets/car.svg"></img></Link>
          <img id="mother" src="./assets/motherhood.svg"></img>
          <img id="vote" src="./assets/vote.svg"></img>
          <img id="more2" src="./assets/more.svg"></img>
        </div>
        {this.props.children}
      </div>
    )
  }
}
