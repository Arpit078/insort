import React, { Component } from "react";
import "./NewsItem.css"
import hoverButton from "../hoverButton/hoverButton"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className="box">
        <div className="">
          <h5 className="">{title}</h5>
          {/* <img src={!imageUrl?"https://www.freeiconspng.com/uploads/no-image-icon-6.png":imageUrl} className="card-img-top" alt="..." style={{height:"50vh",width:"45vw",alignItems:"center",paddingLeft:"4rem",filter:"grayscale(100%)"}}></img> */}
          <p className="">
            {description}
          </p>
             
          <a href={newsUrl} target="_blank" className="btn-change7 btn btn-sm">Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
