import React, { Component } from "react";
import "./NewsItem.css"
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
      <div className="card my-3 mx-8">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <img src={!imageUrl?"https://www.freeiconspng.com/uploads/no-image-icon-6.png":imageUrl} className="card-img-top" alt="..." style={{height:"50vh",width:"80vw",alignItems:"center",paddingLeft:"4rem"}}></img>
          <p className="card-text">
            {description}
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More 
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
