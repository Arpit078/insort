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
        <img src={!imageUrl?null:imageUrl} className="card-img-top" style={{width:"fit",alignItems:"center",filter:"contrast(160%) grayscale(100%) "}}></img>

          <h5 className="">{title}</h5>
          <p className="">
            {!description?null:description}
          </p>
             
          <a href={newsUrl} target="_blank" className="btn-change7 btn btn-sm">Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
