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
        <Link  to="/Top-7-headlines"><AiTwotoneHome/></Link>
        <Link  to="/startup-news-india"><BiCodeBlock/></Link>
        <Link  to="/Business-news"><SiGooglemybusiness/></Link>
        <Link  to="/Book-Suggestions-Daily"><GiMaterialsScience/></Link>
      </nav>
    )
  }
}
