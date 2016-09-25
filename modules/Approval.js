import React, { Component } from 'react'
import { Link } from 'react-router'
import Footer from "./Footer"

export default class Approval extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div  className="approval">
        <h1>Pending Approval</h1>
        <Footer/>
      </div>
    )
  }
}
