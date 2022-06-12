import React, { Component } from 'react'
import "./Navbar.css"
import {BsNewspaper} from "react-icons/bs"
import {GiFactory} from "react-icons/gi"
import {SiGooglemybusiness} from "react-icons/si"
import {FaRupeeSign} from "react-icons/fa"
import {
  Link
} from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
        <nav>
        <Link  to="/Headlines"><BsNewspaper/></Link>
        <Link  to="/Startup-News"><SiGooglemybusiness/></Link>
        <Link  to="/Business-News"><GiFactory/></Link>
        <Link  to="/Finance-News"><FaRupeeSign/></Link>
      </nav>
    )
  }
}
