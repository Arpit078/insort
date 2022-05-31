import React, { Component } from 'react'
import "./Navbar.css"
import {AiTwotoneHome} from "react-icons/ai"
import {BiCodeBlock } from "react-icons/bi"
import {SiGooglemybusiness} from "react-icons/si"
import {GiMaterialsScience} from "react-icons/gi"
import {
  Link
} from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
        <nav>
        <Link  to="/general"><AiTwotoneHome/></Link>
        <Link  to="/technology"><BiCodeBlock/></Link>
        <Link  to="/business"><SiGooglemybusiness/></Link>
        <Link  to="/science"><GiMaterialsScience/></Link>
      </nav>
    )
  }
}